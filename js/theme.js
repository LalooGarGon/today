const d = document;

//Theme name saved in LocalStorage
const storageThemeKey = "theme";

//Nombres de los iconos en el CSS o imagenes
const lightIcon = "bxs-sun",
  darkIcon = "bxs-moon";
//Sobre la etiqueta i se trabajará para cambiar el icono
const icono = "theme__icon";
const innerElements = `
 <span>
  <i id="theme__icon" class="bx ${lightIcon}">
 </span>`;

const getColorPreference = () => {
  if (localStorage.getItem(storageThemeKey)) {
    return localStorage.getItem(storageThemeKey);
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
};

const changeTheme = (theme) => {
  const $icon = d.getElementById(icono);
  d.documentElement.setAttribute("data-theme", theme);
  $icon.classList.toggle(lightIcon);
  $icon.classList.toggle(darkIcon);
  localStorage.setItem(storageThemeKey, theme);
};

export default function theme($container) {
  const $themeContainer = d.querySelector($container);
  $themeContainer.innerHTML = innerElements;

  let theme = getColorPreference();

  changeTheme(theme);

  $themeContainer.addEventListener("click", () => {
    console.log("click");
    theme === "dark" ? (theme = "light") : (theme = "dark");
    changeTheme(theme);
  });
}

// export default function theme(themeBtn) {
//   const themeIcon = d.querySelector(themeBtn).childNodes[1].firstChild;

//   d.addEventListener("click", (e) => {
//     if (e.target.matches(themeBtn) || e.target.matches(`${themeBtn} *`)) {
//       theme === "dark" ? (theme = "light") : (theme = "dark");
//       changeTheme(theme, themeIcon);
//     }
//   });
// }
