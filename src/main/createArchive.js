const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

/**
 * Crée une archive .codeprez à partir d’un dossier source
 * @param {string} dossierSource - Le dossier contenant les fichiers à archiver
 * @param {string} cheminDestination - Le fichier de sortie .codeprez
 */
function createCodeprezArchive(dossierSource, cheminDestination) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(cheminDestination);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      console.log(`✅ Archive créée : ${cheminDestination} (${archive.pointer()} octets)`);
      resolve();
    });

    archive.on('error', err => reject(err));

    archive.pipe(output);

    const fichiersObligatoires = ['presentation.md', 'style.css', 'config.json'];
    for (const file of fichiersObligatoires) {
      const filePath = path.join(dossierSource, file);
      if (!fs.existsSync(filePath)) {
        return reject(new Error(`❌ Fichier manquant : ${file}`));
      }
      archive.file(filePath, { name: file });
    }


    archive.finalize();
  });
}
module.exports = {
  createCodeprezArchive,
};
