<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0,0,0,255&text=KLAYVER%20OLIVEIRA&fontColor=39FF14&fontSize=42&fontAlignY=50&animation=blinking&height=100&desc=Backend%20Engineer%20%2F%20TypeScript%20%2F%20Node.js&descAlignY=75&descSize=14&descFontColor=39FF14" width="100%"/>
</div>
<br/>
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   $ whoami                                                  │
│   > klayver.oliveira                                        │
│                                                             │
│   $ cat profile.ts                                          │
│   > role:    Backend Engineer                               │
│   > focus:   TypeScript · Node.js · APIs                    │
│   > status:  always building                                │
│                                                             │
│   [████████████████████░░░░░] learning: 82%                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
 
<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=16&pause=1000&color=39FF14&center=true&vCenter=true&width=520&lines=%24+tsc+--strict+klayver.ts+...+OK;%24+node+dist%2Fserver.js+--port+3000;%3E+Listening+on+http%3A%2F%2Flocalhost%3A3000+%E2%9C%94;%24+git+commit+-m+%22feat%3A+never+stop+building%22" alt="terminal typing"/>
</div>
<br/>
<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" width="360"/>
</div>
<br/>
<div align="center">
[![LinkedIn](https://img.shields.io/badge/─%20LinkedIn-000?style=for-the-badge&logo=linkedin&logoColor=39FF14&labelColor=000)](https://linkedin.com/in/klayver-oliveira)
[![GitHub](https://img.shields.io/badge/─%20GitHub-000?style=for-the-badge&logo=github&logoColor=39FF14&labelColor=000)](https://github.com/klayverdev)
[![Views](https://komarev.com/ghpvc/?username=klayverdev&color=39FF14&style=for-the-badge&label=─%20VISITORS&labelColor=000)](https://github.com/klayverdev)
 
</div>
---
 
## `$ cat stack.ts`
 
```typescript
// stack.ts — Primary configuration
 
const stack = {
  primary:    "TypeScript",              // strict mode always on
  runtime:    "Node.js",
  frameworks: ["Next.js", "Express"],
  databases:  ["MySQL", "Supabase", "MariaDB"],
  scripting:  ["Python", "Lua"],
  tooling:    ["Git", "GitHub Actions", "REST APIs"],
} as const;
 
type MainLang = typeof stack.primary;   // "TypeScript"
```
 
<div align="center">
<br/>
<img src="https://skillicons.dev/icons?i=ts,nodejs,nextjs,express,react,python,lua,mysql,git,github&theme=dark&perline=10"/>
</div>
---
 
## `$ github-stats --user klayverdev`
 
<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=klayverdev&show_icons=true&theme=chartreuse-dark&bg_color=010101&border_color=39FF14&icon_color=39FF14&title_color=39FF14&text_color=cccccc&hide_border=false&count_private=true&include_all_commits=true&rank_icon=github" height="172"/>
&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=klayverdev&layout=compact&theme=chartreuse-dark&bg_color=010101&border_color=39FF14&title_color=39FF14&text_color=cccccc&hide_border=false&langs_count=6" height="172"/>
<br/><br/>
 
<img src="https://github-readme-streak-stats.herokuapp.com/?user=klayverdev&theme=dark&background=010101&border=39FF14&ring=39FF14&fire=39FF14&currStreakLabel=39FF14&sideLabels=39FF14&dates=888888&stroke=39FF14" width="65%"/>
</div>
---
 
## `$ git log --graph --oneline`
 
<div align="center">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=klayverdev&bg_color=010101&color=39FF14&line=39FF14&point=ffffff&area=true&area_color=003300&hide_border=false&border_color=39FF14&radius=0&custom_title=contribution%20activity" width="100%"/>
</div>
---
 
## `$ ls -la ./repos`
 
<div align="center">
```
drwxr-xr-x  sistemas-de-api-backend       [TypeScript · Node.js · MySQL]
drwxr-xr-x  sistemas-gta-rp               [Lua · MariaDB]
drwxr-xr-x  ferramentas-para-devs         [Node.js · CLI · Automation]
drwxr-xr-x  frontend-e-experiencias-web   [Next.js · React · TypeScript]
```
 
<br/>
[![api](https://github-readme-stats.vercel.app/api/pin/?username=klayverdev&repo=sistemas-de-api-backend&theme=chartreuse-dark&bg_color=010101&border_color=39FF14&title_color=39FF14&text_color=cccccc&icon_color=39FF14)](https://github.com/klayverdev)
&nbsp;
[![gta](https://github-readme-stats.vercel.app/api/pin/?username=klayverdev&repo=sistemas-gta-rp&theme=chartreuse-dark&bg_color=010101&border_color=39FF14&title_color=39FF14&text_color=cccccc&icon_color=39FF14)](https://github.com/klayverdev)
 
</div>
---
 
## `$ snake --watch contributions`
 
<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/klayverdev/klayverdev/output/github-contribution-grid-snake-dark.svg"/>
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/klayverdev/klayverdev/output/github-contribution-grid-snake.svg"/>
  <img alt="contribution snake" src="https://raw.githubusercontent.com/klayverdev/klayverdev/output/github-contribution-grid-snake.svg" width="100%"/>
</picture>
</div>
<details>
<summary><code>> snake --setup</code></summary>
<br/>
Crie `.github/workflows/snake.yml` no repositório `klayverdev/klayverdev`:
 
```yaml
name: Generate Snake
on:
  schedule:
    - cron: "0 */12 * * *"
  workflow_dispatch:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: Platane/snk@v3
        with:
          github_user_name: klayverdev
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark
      - uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
 
Depois: **Actions → Generate Snake → Run Workflow**
 
</details>
---
 
## `$ trophy --display`
 
<div align="center">
<img src="https://github-profile-trophy.vercel.app/?username=klayverdev&theme=matrix&no-bg=true&no-frame=true&margin-w=10&column=6"/>
</div>
---
 
<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif" width="100%"/>
```
> process.exit(0)  // see you in the commits.
```
 
</div>
