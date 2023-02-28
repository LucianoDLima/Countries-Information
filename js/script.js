/* //
ELEMENTS
// */
const themeSwitchBtn = document.querySelector('#theme-switch');
const select = document.querySelector('#filter-options');
const countryContainer = document.querySelector('.countries');

/* //
FUNCTIONS
// */

/* ==========
 The SWAP functions are related to the light and dark theme 
   ========== */
let isLightMode = document.body.classList.contains('light-mode') ? true : false;

function swapThemeToggle() {
  if (isLightMode) isLightMode = false;
  else isLightMode = true;
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
  const themeSwitchImg = document.querySelector('#theme-switch-img');
  const themeSwitchSearch = document.querySelector('#search-icon');
  const themeSwitchArrow = document.querySelector('#arrow-icon');

  const darkMode = 'images/dark-mode.svg';
  const lightMode = 'images/light-mode.svg';
  const darkModeSearch = 'images/search-icon-dark.svg';
  const lightModeSearch = 'images/search-icon-light.svg';
  const darkModeArrow = 'images/arrow-dark.svg';
  const lightModeArrow = 'images/arrow-light.svg';

  if (isLightMode) {
    themeSwitchImg.setAttribute('src', darkMode);
    themeSwitchSearch.setAttribute('src', darkModeSearch);
    themeSwitchArrow.setAttribute('src', darkModeArrow);
  } else {
    themeSwitchImg.setAttribute('src', lightMode);
    themeSwitchSearch.setAttribute('src', lightModeSearch);
    themeSwitchArrow.setAttribute('src', lightModeArrow);
  }
}

function swapThemeColors() {
  document.body.classList.toggle('light-mode');
}

function swapThemeActivation(all) {
  if (all === true) {
    swapThemeToggle();
    swapThemeName();
    swapThemeImage();
    swapThemeColors();
  } else {
    swapThemeToggle();
    swapThemeName();
    swapThemeImage();
  }
}

// ====== \\
function countryHTML(data, index) {
  countryContainer.insertAdjacentHTML(
    'beforeend',
    `
        <div class="countries__box">
          <div class="countries__flag">
            <img src="${data[index].flags.svg}" alt="${data[index].flags.alt}">
          </div>
          
          <h2 class="countries__name">${data[index].name.common}</h2>

          <div class="countries__information">
            <p>Population: <span id="population">${data[index].population}</span></p>
            <p>Region: <span id="region">${data[index].region}</span></p>
            <p>Capital: <span id="capital">${data[index].capital}</span></p> 
          </div>
        </div>`
  );
}

async function addCountry(country) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await response.json();

  countryHTML(data, 0);
}

async function allCountries(i) {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await response.json();

  countryHTML(data, i);
}

function addAllCountries(start, countriesToLoad) {
  // Responsible for adding all the countries once you load the page
  // 'Start' is from which index we start counting
  // 'CountriesToLoad' is how many countries I should load starting from the index in 'start'
  countriesToLoad += start
  for (let i = start; i < countriesToLoad; i++) {
    allCountries(i);
  }
}

addAllCountries(0, 16);

window.addEventListener('scroll', () => {
  // Loads more information as you scrolldown
  const scrollPosition = window.pageYOffset;
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight - 1;

  if (scrollPosition >= maxScroll) {
    addAllCountries(countryContainer.children.length, 16);
  }
});



/* //
EVENTS
// */

// Dark and light mode button
swapThemeActivation();
themeSwitchBtn.addEventListener('click', () => {
  swapThemeActivation(true);
});

// Drop down filter options, makes the 'filter option' dissappear after an option is selected
select.addEventListener('change', () => {
  const filterName = document.querySelector('#filter-options-name');
  filterName.textContent = '';
});
