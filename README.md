# TRADER GAME

## Adding stocks

1. Go to **finance.yahoo.com**
2. Search for any stock (e.g. AAPL)
3. Click **Historical Data** → set period to **Max** → click **Download**
4. Rename the file to just the ticker symbol: `AAPL.csv`, `TSLA.csv`, etc.
5. Drop it in the `/stocks` folder
6. Commit and push → auto-deploys in 30 seconds

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to **vercel.com** → New Project → Import your GitHub repo
3. Click Deploy — that's it

## Local dev

```
npm i -g vercel
vercel dev
```
Then open http://localhost:3000

## CSV format

Standard Yahoo Finance export works out of the box:
```
Date,Open,High,Low,Close,Adj Close,Volume
2024-01-02,185.23,185.88,182.73,185.20,184.45,79007800
```
The game uses **Adj Close** (split-adjusted). Minimum 50 rows required.
