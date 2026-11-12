const tasks = [
  {
    id: 1,
    title: 'Backend API Mimarisinin Kurulması',
    description: 'Node.js ve Express.js kullanılarak temel sunucu ve routing yapısı oluşturulacak.',
    status: 'completed',
    priority: 'high',
    assignee: 'musa',
    createdAt: '2026-11-10T09:00:00.000Z'
  },
  {
    id: 2,
    title: 'Logger Middleware Geliştirilmesi',
    description: 'Gelen tüm API isteklerinin method, endpoint ve zaman damgası ile kayıt altına alınması.',
    status: 'completed',
    priority: 'medium',
    assignee: 'ahmet',
    createdAt: '2026-11-10T14:30:00.000Z'
  },
  {
    id: 3,
    title: 'Postman CRUD Testlerinin Yapılması',
    description: 'Görev ekleme, listeleme, detay, güncelleme ve silme uçlarının Postman ile test edilmesi.',
    status: 'pending',
    priority: 'high',
    assignee: 'zeynep',
    createdAt: '2026-11-11T10:15:00.000Z'
  }
];

module.exports = tasks;