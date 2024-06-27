const handleBeforePrompt = e => {
  // console.log('handleBeforePrompt');
  e.preventDefault();

  window.deferredPrompt = e;
  localStorage.setItem('beforePromptFlag', '1');

  window.removeEventListener('beforeinstallprompt', handleBeforePrompt);
  return false;
};
window.addEventListener('beforeinstallprompt', handleBeforePrompt);
window.addEventListener('appinstalled', () => {
  window.location.reload();
});