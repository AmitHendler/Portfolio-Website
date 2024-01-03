let targetDate;
let countdownInterval;

document.addEventListener('DOMContentLoaded', function () {
  updateCountdown();

  document.getElementById('datepicker').valueAsDate = new Date();
  document.getElementById('timepicker').value = getCurrentTime();
});

function setCustomCountdown() {
  const selectedDate = document.getElementById('datepicker').value;
  const selectedTime = document.getElementById('timepicker').value;

  if (selectedDate && selectedTime) {
    targetDate = new Date(`${selectedDate}T${selectedTime}`);
    updateCountdown();
  }
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function updateCountdown() {
  if (!targetDate) return;

  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
  } else {
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.body.innerHTML = '<h1>Countdown Expired!</h1>';
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function startCountdown() {
  countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown() {
  document.getElementById('datepicker').valueAsDate = new Date();
  document.getElementById('timepicker').value = getCurrentTime();
  targetDate = null;
  updateCountdown();
  stopCountdown();
  document.getElementById('days').innerText = '00';
  document.getElementById('hours').innerText = '00';
  document.getElementById('minutes').innerText = '00';
  document.getElementById('seconds').innerText = '00';
}