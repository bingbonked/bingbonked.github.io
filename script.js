document.addEventListener('DOMContentLoaded', () => {

  const welcomeWindow = document.getElementById('welcome-window');
  const docsWindow = document.getElementById('docs-window');
  const projWindow = document.getElementById('proj-window');

  const beginButton = document.getElementById('begin-button');
  const closeWelcome = document.getElementById('close-welcome');
  const closeAbout = document.getElementById('close-about');
  const closeProjects = document.getElementById('close-projects');

  const aboutIcon = document.getElementById('my-documents');
  const projectsIcon = document.getElementById('my-projects');

  beginButton?.addEventListener('click', () => {
    welcomeWindow.style.display = 'none';
  });

  closeWelcome?.addEventListener('click', () => {
    welcomeWindow.style.display = 'none';
  });

  closeAbout?.addEventListener('click', () => {
    docsWindow.style.display = 'none';
  });

  closeProjects?.addEventListener('click', () => {
    projWindow.style.display = 'none';
  });

  aboutIcon?.addEventListener('click', () => {
    docsWindow.style.display = 'block';
  });

  projectsIcon?.addEventListener('click', () => {
    projWindow.style.display = 'block';
  });

  /*taskbar clock logic*/

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    const clock = document.getElementById('clock');
    if (clock) {
      clock.textContent = `${hours}:${minutesStr} ${ampm}`;
    }
  }

  updateClock();
  setInterval(updateClock, 5000);

});
