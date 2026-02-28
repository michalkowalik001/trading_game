import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const stocksDir = path.join(process.cwd(), 'stocks');
    const files = fs.readdirSync(stocksDir)
      .filter(f => f.endsWith('.csv'))
      .map(f => f.replace('.csv', ''));

    res.status(200).json({ stocks: files });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
