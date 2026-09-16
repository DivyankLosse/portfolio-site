const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const decrypt = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  const fileBuffer = fs.readFileSync(inputFile);
  const iv = fileBuffer.slice(0, 16);
  const encryptedData = fileBuffer.slice(16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
  fs.writeFileSync(outputFile, decrypted);
  console.log("Decryption successful: " + outputFile);
};

const inputPath = path.join(__dirname, "character.enc");
const outputPath = path.join(__dirname, "character.glb");
decrypt(inputPath, outputPath, "Character3D#@");
