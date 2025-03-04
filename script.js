// Variables to manage stopwatch time
let startTime, updatedTime, difference = 0, timerInterval, running = false;
const display = document.getElementById('display');
const startButton = document.querySelector('button.start');
const pauseButton = document.querySelector('button.pause');
const resetButton = document.querySelector('button.reset');

// Function to update the display with the elapsed time
function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  
  const hours = ("0" + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2);
  const minutes = ("0" + Math.floor((difference / (1000 * 60)) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((difference / 1000) % 60)).slice(-2);
  const milliseconds = ("00" + (difference % 1000)).slice(-3);
  
  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Start the stopwatch
startButton.addEventListener('click', () => {
  if (!running) {
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(updateTime, 10);
    running = true;
  }
});

// Pause the stopwatch
pauseButton.addEventListener('click', () => {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  running = false;
  difference = 0;
  display.textContent = "00:00:00.000";
});
