import { createServer } from "http";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load the Cloudflare Worker
const worker = await import("./dist/server/index.js");

const server = createServer(async (req, res) => {
  try {
    // Create a request object compatible with the worker
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const headers = new Headers(req.headers as Record<string, string>);

    // Handle body for POST/PUT
    let body;
    if (req.method !== "GET" && req.method !== "HEAD") {
      body = await new Promise((resolve) => {
        let data = "";
        req.on("data", (chunk) => (data += chunk));
        req.on("end", () => resolve(data));
      });
    }

    const workerRequest = new Request(url, {
      method: req.method,
      headers,
      body: body || undefined,
    });

    const response = await worker.default.fetch(workerRequest);

    // Send response
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(await response.text());
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
