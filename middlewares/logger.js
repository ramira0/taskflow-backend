const fs = require('fs');
const path = require('path');

// Log dosyasının projenin ana dizininde (requests.log) oluşturulacağını belirtiyoruz
const logFilePath = path.join(__dirname, '..', 'requests.log');

const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const endpoint = req.originalUrl;

  const logMessage = `[${timestamp}] ${method} ${endpoint}\n`;

  // 1.Terminale yazdırma
  console.log(logMessage.trim());

  // 2. requests.log dosyasına ekleme (appendFile mevcut logları silmeden alt satıra ekler)
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Log dosyasına yazılırken hata oluştu:', err.message);
    }
  });

  // İsteğin bir sonraki Route'lara geçmesini sağlar
  next();
};

module.exports = logger;