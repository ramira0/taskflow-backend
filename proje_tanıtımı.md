# TASKFLOW — Görev ve Proje Yönetim Sistemi API

## 1. Proje Amacı ve Kapsamı
Bu proje, bir yazılım şirketinin ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip edebilmesi amacıyla geliştirilmiş REST API tabanlı bir backend servisidir. Katılımcıların Node.js ve Express.js yetkinliklerini, modüler routing mimarisini, middleware kullanımını ve CRUD operasyonlarını eksiksiz şekilde uygulamalı olarak göstermesi hedeflenmiştir.

## 2. Sistem Senaryosu
Şirket çalışanlarına görev atanabilmesi, görevlerin durumunun (beklemede, tamamlandı vb.) izlenebilmesi, önceliklendirilmesi ve gerektiğinde güncellenip silinebilmesi gerekmektedir. Sistem tamamen HTTP istekleri ve JSON veri formatı üzerinden haberleşen bir REST mimarisinde çalışır.

## 3. Veri Modeli (Task Yapısı)
Sistemde yönetilen her görev nesnesi aşağıdaki özelliklere sahiptir:

* **id:** Göreve ait benzersiz kimlik numarası (Sayı).
* **title:** Görevin başlığı (Metin).
* **description:** Göreve dair ayrıntılı açıklama (Metin).
* **status:** Görevin durumu (`pending` veya `completed`).
* **priority:** Görevin öncelik seviyesi (`low`, `medium`, `high`).
* **assignee:** Görevin atandığı çalışanın adı/kullanıcı adı (Metin).
* **createdAt:** Görevin oluşturulma zaman damgası (ISO Tarih formatı).

## 4. API Mimarisi ve Uç Noktaları (Endpoints)

| HTTP Metodu | Endpoint | İşlev | Başarılı Durum Kodu |
| :--- | :--- | :--- | :--- |
| **GET** | `/tasks` | Sistemdeki tüm görevleri listeler | `200 OK` |
| **GET** | `/tasks/:id` | Belirli bir görevin detayını görüntüler | `200 OK` |
| **POST** | `/tasks` | Yeni bir görev oluşturur | `201 Created` |
| **PUT** | `/tasks/:id` | Var olan bir görevin bilgilerini günceller | `200 OK` |
| **DELETE** | `/tasks/:id` | Belirtilen görevi sistemden siler | `200 OK` |

## 5. Middleware Mimarisi
* **Request Logger:** Sunucuya gelen her HTTP isteğinin metodunu (`method`), istek yapılan adresi (`endpoint`) ve isteğin gerçekleştiği anı (`timestamp`) yakalayarak hem konsola yazdırır hem de `requests.log` dosyasına kalıcı olarak kaydeder.