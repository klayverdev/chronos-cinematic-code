import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Try to load from dist/server
    const { default: handleRequest } = await import("../dist/server/index.js");
    
    const response = await handleRequest.fetch(
      new Request(`http://${req.headers.host}${req.url}`, {
        method: req.method,
        headers: Object.entries(req.headers).reduce((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>),
        body:
          req.method !== "GET" && req.method !== "HEAD"
            ? JSON.stringify(req.body)
            : undefined,
      })
    );

    // Forward response
    res.status(response.status);
    Object.entries(Object.fromEntries(response.headers)).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    const text = await response.text();
    res.send(text);
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ error: String(error) });
  }
};
