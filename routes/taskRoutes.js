const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks');

// 1. GET /tasks- Tüm görevleri getirir
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks
  });
});

// 2. GÖREV DETAYI (GET /tasks/:id) - Belirli bir görevi ID ile getirir
router.get('/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: `${taskId} ID numaralı görev bulunamadı.`
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

// 3.POST /tasks - Yeni görev oluşturur
router.post('/', (req, res) => {
  const { title, description, status, priority, assignee } = req.body;

  // Yeni ID belirleme (mevcut en büyük ID + 1, liste boşsa 1)
  const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;

  const newTask = {
    id: newId,
    title: title || 'Başlıksız Görev',
    description: description || '',
    status: status || 'pending',
    priority: priority || 'medium',
    assignee: assignee || 'atanmadi',
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    message: 'Görev başarıyla oluşturuldu.',
    data: newTask
  });
});

// 4. PUT /tasks/:id - Mevcut bir görevin bilgilerini günceller
router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Güncellenmek istenen ${taskId} ID numaralı görev bulunamadı.`
    });
  }

  const { title, description, status, priority, assignee } = req.body;
  const existingTask = tasks[taskIndex];

  // Sadece gönderilen alanları günceller, gönderilmeyenleri korur
  const updatedTask = {
    ...existingTask,
    title: title !== undefined ? title : existingTask.title,
    description: description !== undefined ? description : existingTask.description,
    status: status !== undefined ? status : existingTask.status,
    priority: priority !== undefined ? priority : existingTask.priority,
    assignee: assignee !== undefined ? assignee : existingTask.assignee
  };

  tasks[taskIndex] = updatedTask;

  res.status(200).json({
    success: true,
    message: 'Görev başarıyla güncellendi.',
    data: updatedTask
  });
});

// 5. DELETE /tasks/:id - Görevi sistemden kaldırır
router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Silinmek istenen ${taskId} ID numaralı görev bulunamadı.`
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: 'Görev başarıyla silindi.',
    data: deletedTask
  });
});

module.exports = router;