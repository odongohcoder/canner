import path from 'path';
import fs from 'fs';

export default function createWindowVarsFile({
  schemaPath,
  windowVarsPath,
  cloudPath
}: {
  schemaPath: string,
  windowVarsPath: string,
  cloudPath: string
}) {
  const templateCode = generateTemplate(schemaPath, cloudPath);
  fs.writeFileSync(windowVarsPath, templateCode);
}

function toNodePath(p) {
  return p.replace(/\\/g, '/')
}

function generateTemplate(appPath, cloudPath) {
  return `
  import schema from '${toNodePath(appPath)}';
  import cloudConfig from '${toNodePath(cloudPath)}';
  window.schema = schema;
  window.cloudConfig = cloudConfig;
`;
}