async function teste(country) {
  // const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
  // const data = await response.json()
  //   console.log(data);
  // return response
}

// teste('brazil');

// Elements
const themeSwitch = document.querySelector('#theme-switch');
const themeSwitchImg = document.querySelector('#theme-switch-img');

// Functions

/* ==========
 The SWAP functions are related to the light and dark theme 
   ========== */
let isLightMode = document.body.classList.contains('light-mode') ? true : false;

function swapThemeName() {
  const themeSwitchName = document.querySelector('#theme-switch-name');

  if (isLightMode) {
    themeSwitchName.textContent = 'Dark Mode';
    isLightMode = false;
  } else {
    themeSwitchName.textContent = 'Light Mode';
    isLightMode = true;
  }
}

function swapThemeImage() {
  const darkMode = 'images/dark-mode.svg';
  const lightMode = 'images/light-mode.svg';

  if (isLightMode) {
    themeSwitchImg.setAttribute('src', darkMode);
  } else {
    themeSwitchImg.setAttribute('src', lightMode);
  }
}

function swapThemeColors() {
  document.body.classList.toggle('light-mode');
}

function swapThemeActivation(all) {
  if (all === true) {
    swapThemeName();
    swapThemeImage();
    swapThemeColors();
  } else {
    swapThemeName();
    swapThemeImage();
  }
}

swapThemeActivation(false);

// Events
themeSwitch.addEventListener('click', () => {
  swapThemeActivation(true);
});
