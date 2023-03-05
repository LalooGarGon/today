const d = document;
const preffixName = "time-card";
let today;

export default function timeCard(container) {
  const $card = d.querySelector(container);
  createTemplateCard($card);
  setHour();
  setDate();
  setDayCount();
  setImage("moon");

  setInterval(setHour, 30000);
}

const createTemplateCard = ($el) => {
  let html = `
  <div>
   <span id="${preffixName}__image">Image Icon</span>
   <p id="${preffixName}__hour">8:00 PM</p>
  </div>
  <div>
   <p id="${preffixName}__day">Lunes</p>
   <p id="${preffixName}__date">8 de marzo de 2023</p>
   <p id="${preffixName}__day-count">Día 61</p>
  </div>
 `;
  $el.innerHTML = html;
};

const setHour = () => {
  today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let suffixHour = "AM";
  if (hour > 12) {
    hour = hour - 12;
    suffixHour = "PM";
  }
  if (minutes < 10) minutes = "0" + `${minutes}`;
  d.getElementById(
    `${preffixName}__hour`
  ).textContent = `${hour}:${minutes} ${suffixHour}`;

  if (minutes > 59) {
    setDate();
    setDayCount();
    setImage();
  }
};

const setDate = () => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let [day, date] = today.toLocaleDateString("es-MX", options).split(",");
  d.getElementById(`${preffixName}__day`).textContent = day;
  d.getElementById(`${preffixName}__date`).textContent = date;
};

const setDayCount = () => {
  let dayOne = new Date(`${today.getFullYear()}-01-01 00:00:00`);
  let lapse = today - dayOne;
  let passedDays = Math.floor(lapse / (1000 * 60 * 60 * 24));
  d.getElementById(`${preffixName}__day-count`).textContent = `Día ${
    passedDays + 1
  }`;
};

const setImage = () => {
  let hours = today.getHours();
  let isMorning = true;
  if (hours > 19 || hours < 5) isMorning = false;
  const timeImage = d.getElementById(`${preffixName}__image`);
  timeImage.innerHTML = `<i class="bx bxs-${isMorning ? "sun" : "moon"}"></i>`;
  timeImage.style.color = isMorning ? "yellow" : "#202124";
};
