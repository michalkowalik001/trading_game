import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { symbol } = req.query;

  // Sanitize — only allow alphanumeric + dash/dot
  if (!symbol || !/^[A-Za-z0-9.\-]{1,20}$/.test(symbol)) {
    return res.status(400).json({ error: 'Invalid symbol' });
  }

  try {
    const filePath = path.join(process.cwd(), 'stocks', symbol + '.csv');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Not found' });
    }
    const csv = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(csv);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
