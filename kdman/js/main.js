// Kiểm tra nếu Service Worker được hỗ trợ
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/service-worker.js').then(reg => {
      console.log('Service Worker registered successfully:', reg);
  }).catch(err => {
      console.error('Service Worker registration failed:', err);
  });
}

// Script để xóa thẻ HTML
// @ts-ignore
document.getElementById('removeBtn').addEventListener('click', () => {
  const paragraph = document.getElementById('paragraph');
  if (paragraph) {
      paragraph.remove();
  }
});
