const path = require('path');
const { createCodeprezArchive } = require('./createArchive');

// ✅ On récupère le chemin en argument CLI
const dossierSource = process.argv[2]; // ← récupère le 3e argument
if (!dossierSource) {
  console.error("❌ Tu dois fournir un dossier source en argument !");
  process.exit(1);
}

const dossierAbsolu = path.resolve(dossierSource);
const outputFile = path.join(__dirname, 'output.codeprez');

// 🧪 Lancement
createCodeprezArchive(dossierAbsolu, outputFile)
  .then(() => console.log("✅ Archive créée avec succès !"))
  .catch((err) => console.error("❌ Erreur :", err.message));
