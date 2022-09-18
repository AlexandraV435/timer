document.addEventListener('DOMContentLoaded', () => {
  const date = new Date('Jan 1 2023 00:00');

  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  const time = () => {
    let now = new Date();
    let leftUntil = date - now;

    let daysVal = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hoursVal = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutesVal = Math.floor(leftUntil / 1000 / 60) % 60;
    let secondsVal = Math.floor(leftUntil / 1000) % 60;

    days.textContent = daysVal;
    hours.textContent = hoursVal;
    minutes.textContent = minutesVal;
    seconds.textContent = secondsVal;
  };
  time();

  let setTime = setInterval(time, 1000)
});
