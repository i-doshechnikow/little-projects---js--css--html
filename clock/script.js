let currentDate;

const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");

const updateClock = () => {
  currentDate = new Date();
  hourNeedle.style.transform = `translate(-50%, -100%) rotate(${
    currentDate.getHours() / 12
  }turn)`;

  minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${
    currentDate.getMinutes() / 60
  }turn)`;

  secondNeedle.style.transform = `translate(-50%, -100%) rotate(${
    currentDate.getSeconds() / 60
  }turn)`;
};

setInterval(updateClock, 1000);
