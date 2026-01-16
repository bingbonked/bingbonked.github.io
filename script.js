document.addEventListener('DOMContentLoaded', () => {
  
  //Logic to close welcome-window/window
  const welcomeWindow = document.getElementById('welcome-window');
  const beginButton = document.getElementById('begin-button'); 
  const closeButton = document.querySelector('.title-bar-controls button[aria-label="Close"]');
  const myDocsIcon = document.getElementById('my-documents');
  const docsWindow = document.getElementById('docs-window')


  function closeWindow() {
    if (welcomeWindow) {
      welcomeWindow.style.display = 'none';
    }
  }

  if (beginButton) {
    beginButton.addEventListener('click', closeWindow);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeWindow);
  }

  //Task bar clock logic
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const timeString = hours + ':' + minutesStr + ' ' + ampm;
    
    const clockElement = document.getElementById('clock');
    if (clockElement) {
      clockElement.textContent = timeString;
    }
  }
  updateClock();
  setInterval(updateClock, 5000);

  if (myDocsIcon && docsWindow) {
    myDocsIcon.addEventListener('dblclick', () => {
        docsWindow.style.display = 'block';
    })
  }

});