import fs from 'node:fs';
import path from 'node:path';

const messagesDir = path.join(process.cwd(), 'messages');
const files = fs.readdirSync(messagesDir).filter((file) => file.endsWith('.json')).sort();
if (files.length === 0) {
  console.error('No locale files found in messages/.');
  process.exit(1);
}

const source = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'));
const sourceKeys = flatten(source);

for (const file of files) {
  if (file === 'en.json') continue;
  const target = JSON.parse(fs.readFileSync(path.join(messagesDir, file), 'utf8'));
  const targetKeys = flatten(target);
  const missing = [...new Set(Object.keys(sourceKeys).filter((key) => !(key in targetKeys)))];
  const extra = [...new Set(Object.keys(targetKeys).filter((key) => !(key in sourceKeys)))];

  if (missing.length || extra.length) {
    console.error(`Locale check failed for ${file}`);
    if (missing.length) console.error(`Missing keys: ${missing.join(', ')}`);
    if (extra.length) console.error(`Extra keys: ${extra.join(', ')}`);
    process.exit(1);
  }
}

console.log(`i18n:check passed for ${files.length} locale files.`);

function flatten(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flatten(value, nextKey));
    } else {
      result[nextKey] = value;
    }
  }
  return result;
}
