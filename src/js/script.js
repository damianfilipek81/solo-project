
const select = {
  sidebar: {
    sidebar: '.sidebar',
    middle: '.sidebar__middle',
    bottom: '.sidebar__bottom',
    topBar: '[href="#hamburger"]',
    links: '.sidebar__middle-list',
    main: '.main',
    chat: '[href="#manager"]',
  },
  main: {
    chart: 'myChart',
    formOne: '.form-1',
    formTwo: '.form-2',
    formThree: '.form-3',
    formFour: '.form-4',
    formButton: '.button__form',
  },
  topbar: {
    account: '[href="#account"]',
    quit: '[href="#quit"]',
    topbar: '.topbar',
  },
  popups: {
    login: '.login',
    quit: '.quit',
    chat: '.manager__chat',
    close: '.button__close',
  },
};
const classNames = {
  activeSidebar: 'active-sidebar',
  activeTopbar: 'active-topbar',
  active: 'active',
  popupShow: 'popup-show',
};

const barButton = document.querySelector(select.sidebar.topBar);
const sidebarMiddle = document.querySelector(select.sidebar.middle);
const sidebarBottom = document.querySelector(select.sidebar.bottom);
const sidebar = document.querySelector(select.sidebar.sidebar);
const topbar = document.querySelector(select.topbar.topbar);

const loginButton = document.querySelector(select.topbar.account);
const loginPopup = document.querySelector(select.popups.login);

const quitButton = document.querySelector(select.topbar.quit);
const quitPopup = document.querySelector(select.popups.quit);

const chatButton = document.querySelector(select.sidebar.chat);
const chatPopup = document.querySelector(select.popups.chat);
const closeButton = document.querySelector(select.popups.close);

const links = document.querySelector(select.sidebar.links);
const pages = document.querySelector(select.sidebar.main).children;

loginButton.addEventListener('click', function (event) {
  event.preventDefault();
  loginPopup.classList.add(classNames.popupShow);
});

quitButton.addEventListener('click', function (event) {
  event.preventDefault();
  quitPopup.classList.add(classNames.popupShow);
});

chatButton.addEventListener('click', function (event) {
  event.preventDefault();
  chatPopup.classList.add(classNames.popupShow);
});

window.addEventListener('click', function (event) {
  if (event.target == loginPopup || event.target == closeButton) {
    loginPopup.classList.remove(classNames.popupShow);
  } else if (event.target == quitPopup || event.target == closeButton) {
    quitPopup.classList.remove(classNames.popupShow);
  } else if (event.target == chatPopup || event.target == closeButton) {
    chatPopup.classList.remove(classNames.popupShow);
  }
});

links.addEventListener('click', function (event) {
  const clickedElement = event.target;
  const linkHref = clickedElement.getAttribute('href').replace('#', '');

  pageActive(linkHref);
});

pages[0].classList.add(classNames.active);

const pageActive = (linkHref) => {
  for (let page of pages) {
    if (!page.classList.contains(linkHref)) {
      page.classList.remove(classNames.active);
      for(let childrenPage of page.children){
        if(childrenPage.id == linkHref){
          childrenPage.parentElement.classList.add(classNames.active)
        }
      }
    } else if (page.classList.contains(linkHref)) {
      page.classList.add(classNames.active);
    }
  }
};

barButton.addEventListener('click', function () {
  sidebarMiddle.classList.toggle(classNames.activeSidebar);
  sidebarBottom.classList.toggle(classNames.activeSidebar);
  topbar.classList.toggle(classNames.activeTopbar);
  sidebar.insertAdjacentElement('afterend', topbar);
});

const ctx = document.getElementById(select.main.chart);

// eslint-disable-next-line no-undef
var chart = new Chart(ctx, { // eslint-disable-line no-unused-vars
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [156, 346, 410, 490, 260, 500, 200, 190, 210, 250],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [380, 216, 320, 300, 470, 333, 400, 421, 360, 127],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [320, 523, 410, 256, 216, 578, 130, 380, 234, 480],
      hidden: true,
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
});

