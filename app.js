const express = require('express');
const logger = require('./middlewares/logger');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

// 1. JSON Gövde Çözümleyici Middleware
app.use(express.json());

// 2. Temel Logger Middleware (Tüm API isteklerini konsola ve requests.log dosyasına kaydeder)
app.use(logger);

// Ana dizin kontrol uç noktası
app.get('/', (req, res) => {
  res.status(200).json({
    project: 'TASKFLOW API',
    status: 'Running',
    message: 'Görev ve Proje Yönetim Sistemi API sunucusu çalışıyor.'
  });
});

// Görev Yönetim Modülü yönlendirmeleri
app.use('/tasks', taskRoutes);

// Tanımlanmayan bir adrese (404) istek atılırsa yakalayan genel hata yanıtı
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'İstenen API uç noktası (endpoint) bulunamadı.'
  });
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});