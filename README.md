# CurioUS

A feed you steer. Bite-size wonder about history, nature, space and the unexplained, where every card tells you how sure we are. A Modish experiment.

## Edit the content

Cards live in `src/cards`, one file per theme (for example `src/cards/sacred.ts`). To add a card, copy an existing one in that file and change the words. Themes and truth labels live in `src/content.ts`. Real or Myth statements live in `src/games/realOrMyth.ts`. Paste an image URL into a card's `image` field to replace the gradient art. Starter source links are overview pages; swap in primary sources as you check each card.

## Run it locally

```
npm install
npm run dev
```

## Deploy

Push to GitHub, then import the repo in Vercel. It detects Vite automatically (build: `npm run build`, output: `dist`).

## How the algorithm works

`src/store.ts`. Each theme has a weight. Keep, skip, go deeper, learn and play each nudge it (see `NUDGE`). The feed picks unseen cards weighted by theme, with a small share from unpicked themes to keep things fresh. Sessions pause after 8 cards (`SESSION_SIZE`). Progress is saved in the browser.
