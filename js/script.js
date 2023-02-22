async function teste(country) {
  // const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
  // const data = await response.json()
  //   console.log(data);
  // return response
}

// teste('brazil');

// Elements
const themeSwitchBtn = document.querySelector('#theme-switch');
const themeSwitchImg = document.querySelector('#theme-switch-img');
const themeSwitchSearch = document.querySelector('#search-icon')

// Functions

/* ==========
 The SWAP functions are related to the light and dark theme 
   ========== */
let isLightMode = document.body.classList.contains('light-mode') ? true : false;

function swapThemeToggle() {
    if(isLightMode) isLightMode = false
    else isLightMode = true
}

function swapThemeName() {
  const themeSwitchName = document.querySelector('#theme-switch-name');

  if (isLightMode) {
    themeSwitchName.textContent = 'Dark Mode';
  } else {
    themeSwitchName.textContent = 'Light Mode';
  }
}

function swapThemeImage() {
  const darkMode = 'images/dark-mode.svg';
  const lightMode = 'images/light-mode.svg';
  const darkModeSearch = 'images/search-icon-dark.svg';
  const lightModeSearch = 'images/search-icon-light.svg';

  if (isLightMode) {
    themeSwitchImg.setAttribute('src', darkMode);
    themeSwitchSearch.setAttribute('src', darkModeSearch)
} else {
    themeSwitchImg.setAttribute('src', lightMode);
    themeSwitchSearch.setAttribute('src', lightModeSearch)
  }
}

function swapThemeColors() {
  document.body.classList.toggle('light-mode');
}

function swapThemeActivation(all) {
  if (all === true) {
      swapThemeToggle()
      swapThemeName();
      swapThemeImage();
      swapThemeColors();
  } else {
      swapThemeToggle()
      swapThemeName();
      swapThemeImage();
  }
}

swapThemeActivation();

// Events
themeSwitchBtn.addEventListener('click', () => {
  swapThemeActivation(true);
});
