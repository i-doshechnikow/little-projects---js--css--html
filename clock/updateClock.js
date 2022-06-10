let currentDate;

const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");
const time = document.querySelector(".time");
const date = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const updateNeedle = (curentNeedle, currentType) => {
  const ye = {
    hours: { method: "getHours", max: 12 },
    minutes: { method: "getMinutes", max: 60 },
    seconds: { method: "getSeconds", max: 60 },
  };

  const { method, max } = ye[currentType];

  const currentPosition = currentDate[method]() / max;
  curentNeedle.style.transform = `translate(-50%, -100%) rotate(${currentPosition}turn)`;
};

const updateClock = () => {
  currentDate = new Date();

  updateNeedle(secondNeedle, "seconds");
  updateNeedle(minuteNeedle, "minutes");
  updateNeedle(hourNeedle, "hours");

  time.innerHTML = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  date.innerHTML = `${days[currentDate.getDay()]}, ${
    months[currentDate.getMonth()]
  }
        <span class="circle">${currentDate.getDate()}</span>`;
};

setInterval(updateClock, 1000);
