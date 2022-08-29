
import { readdirSync } from 'fs';

const PATH = `${__dirname}/..`;

const getFolders = mainFolder => {
  return readdirSync(`${PATH}/${mainFolder}/`).filter((folder) => folder !== 'README.md');
}

const getFolderFiles = (mainFolder, folder) => {
  return readdirSync(`${PATH}/${mainFolder}/${folder}`).map(file => `/${mainFolder}/${folder}/${file}`);
  
}

export default (category) =>
  {const get = getFolders(category).map((folder) => ({
    text: folder,
    collapsible: true,
    children: getFolderFiles(category, folder),
  }))
  console.log('get files', get);
  return get;
  }
;
