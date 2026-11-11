# TASKFLOW — Görev ve Proje Yönetim Sistemi REST API

Node.js ve Express.js kullanılarak geliştirilmiş, ekip içi görev ve sorumluluk takibini sağlayan REST API tabanlı Görev Yönetim Sistemi projesi.

Projenin detaylı amacı, senaryosu ve veri modeli için [Proje Tanıtım Dokümanı (proje_tanıtımı.md)](./proje_tanıtımı.md) dosyasına göz atabilirsiniz.

## Özellikler (Zorunlu Kapsam)
- **Modüler Routing Yapısı:** `/tasks` uç noktaları `express.Router()` ile ayrı bir modül olarak yapılandırılmıştır.
- **5 Temel CRUD Operasyonu:** Görev ekleme, listeleme, detay görüntüleme, güncelleme ve silme işlemleri.
- **Logger Middleware:** Gelen tüm HTTP isteklerini (`method`, `endpoint`, `timestamp`) hem konsola hem de `requests.log` dosyasına kaydeder.

## Klasör Yapısı

    taskflow-backend/
    ├── data/
    │   └── tasks.js          # Başlangıç görev verileri (JSON formatında dizi)
    ├── middlewares/
    │   └── logger.js         # İstek kayıt (Logger) ara katmanı
    ├── routes/
    │   └── taskRoutes.js     # Görev CRUD yönlendirmeleri (Endpoints)
    ├── screenshots/          # Postman CRUD test ekran görüntüleri
    ├── app.js                # Ana Express sunucu dosyası
    ├── package.json          # Proje bağımlılıkları ve çalışma komutları
    ├── PROJE_TANIMI.md       # Proje Tanıtım ve Tasarım Dokümanı
    └── README.md             # Kurulum ve Çalıştırma Rehberi

## Kurulum ve Çalıştırma Adımları

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayın:

### 1. Gereksinimler
- Bilgisayarınızda **Node.js** (v18 veya üzeri) ve **npm** kurulu olmalıdır.

### 2. Projeyi İndirin
Repoyu bilgisayarınıza klonlayın ve proje dizinine gidin:

    git clone https://github.com/ramira0/taskflow-backend
    cd taskflow-backend

### 3. Bağımlılıkları Yükleyin
Express.js ve gerekli paketleri kurmak için aşağıdaki komutu çalıştırın:

    npm install

### 4. Sunucuyu Başlatın
Uygulamayı ayağa kaldırmak için:

    npm start

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışmaya başlayacaktır.

## API Uç Noktaları (Endpoints)

| Metot | Endpoint | Açıklama | Örnek İstek Gövdesi (Body) |
| :--- | :--- | :--- | :--- |
| **GET** | `/tasks` | Tüm görevleri listeler | - |
| **GET** | `/tasks/:id` | Belirli bir görevin detayını getirir | - |
| **POST** | `/tasks` | Yeni görev ekler | `{"title": "Yeni Görev", "description": "Açıklama", "status": "pending", "priority": "high", "assignee": "musa"}` |
| **PUT** | `/tasks/:id` | Mevcut görevi günceller | `{"status": "completed", "priority": "medium"}` |
| **DELETE** | `/tasks/:id` | Görevi sistemden siler | - |

## Postman Test Ekran Görüntüleri

### 1. Görev Ekleme (`POST /tasks`)
[./screenshots/1-post-gorev-ekleme.png]

### 2. Görev Listeleme (`GET /tasks`)
[./screenshots/2-get-gorev-listeleme.png]

### 3. Görev Detayı (`GET /tasks/:id`)
[./screenshots/3-get-gorev-detay.png]

### 4. Görev Güncelleme (`PUT /tasks/:id`)
[./screenshots/4-put-gorev-guncelleme.png]

### 5. Görev Silme (`DELETE /tasks/:id`)
[./screenshots/5-delete-gorev-silme.png]
