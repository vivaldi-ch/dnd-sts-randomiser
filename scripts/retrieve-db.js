const request = require('request');
const unzipper = require('unzipper');
const fs = require('fs');
const _ = require('lodash');

const DB_URL = 'https://github.com/adrpadua/5e-database/archive/master.zip';
const FILENAME_FILTER = '5e-database-master/5e-SRD-';

const FILENAME = 'master.zip';
const FILEPATH = `assets/${FILENAME}`;
const DESTINATION_PATH = 'src/data/';

const renameFile = (fileName) => {
  const [tempFileName, fileExt] = fileName.split('.');

  return `${_.camelCase(tempFileName.replace(FILENAME_FILTER, ''))}.${fileExt}`;
};

const downloadFile = () => {
  const tempFile = fs.createWriteStream(FILEPATH);

  return new Promise((res, rej) => {
    tempFile
      .on('open', () => {
        request.get(DB_URL).pipe(tempFile);
      })
      .on('error', (err) => {
        rej(err);
      })
      .on('finish', () => {
        tempFile.end();
        res();
      });
  });
};

const unzipDownloadedDB = () => {
  const tempFile = fs.createReadStream(FILEPATH);

  return tempFile
    .pipe(unzipper.Parse())
    .on('entry', (entry) => {
      const fileName = entry.path;

      if (fileName.includes(FILENAME_FILTER)) {
        const ws = fs.createWriteStream(DESTINATION_PATH + renameFile(fileName));
        ws
          .on('open', () => entry.pipe(ws))
          .on('finish', () => ws.end());
      } else {
        entry.autodrain();
      }
    })
    .promise();
};

downloadFile()
  .then(() => unzipDownloadedDB())
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
