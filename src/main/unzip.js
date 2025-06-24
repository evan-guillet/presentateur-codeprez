const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

async function unzip(archivePath) {
  const outputDir = path.join(__dirname, 'unzipped_' + Date.now());
  const directory = await unzipper.Open.file(archivePath);

  for (const file of directory.files) {
    const outputPath = path.join(outputDir, file.path);

    if (file.type === 'Directory') {
      fs.mkdirSync(outputPath, { recursive: true });
      continue;
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    await new Promise((resolve, reject) => {
      file
        .stream()
        .pipe(fs.createWriteStream(outputPath))
        .on('finish', resolve)
        .on('error', reject);
    });
  }

  return outputDir;
}
