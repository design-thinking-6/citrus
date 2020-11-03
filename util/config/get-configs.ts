import path from 'path';
import fs from 'fs';

const jsons = new Map<string, any>();

const rootPath = path.join(
  process.env.PWD
  ?? path.join(__dirname, '../../'),
);

function extractConfig(filename: string): any | Error {
  const configPath = path.join(rootPath, filename);

  if (fs.existsSync(configPath)) {
    const citrusConfig = fs.readFileSync(configPath, { encoding: 'utf8' });
    try {
      return JSON.parse(citrusConfig);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`Cannot parse config file: ${filename}`);

      return err;
    }
  }

  return new Error(`File does not exist: ${configPath}`);
}

export function register(name: string, data: any | string): void {
  if (jsons.has(name)) throw new Error(`${name} is already registered`);

  if (typeof data === 'string') {
    jsons.set(name, extractConfig(data));
  } else {
    jsons.set(name, data);
  }
}

export function getConfig(name?: string): any | Map<string, any> {
  if (name) {
    return jsons.get(name);
  }

  return jsons;
}

export default {
  register,
  getConfig,
};
