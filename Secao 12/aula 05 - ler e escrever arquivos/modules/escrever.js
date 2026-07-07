// const fs = require('fs').promisses;
// const path = require('path');
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
// const { encode } = require('querystring');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const caminhoArquivo = path.resolve(__dirname, '..', 'arquivo.txt');

writeFile(caminhoArquivo, 'Escrevendo no arquivo', { flag: 'w', encoding: 'utf-8' })
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((err) => console.error('Erro ao escrever no arquivo:', err));