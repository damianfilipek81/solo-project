
const select = {
  sidebar: {
    middle: '.sidebar__middle',
    bottom: '.sidebar__bottom',
    topBar: '[href="#hamburger"]',
    links: '.sidebar__middle-list',
    main: '.main',
  },
  main: {
    chart: 'myChart',
    formOne: '.form-1',
    formTwo: '.form-2',
    formThree: '.form-3',
    formFour: '.form-4',
    formButton: '.button__form',
  }
};
const classNames = {
  toggle: 'toggle',
  active: 'active',
  notActive: 'not-active',
};

const barButton = document.querySelector(select.sidebar.topBar);
const sidebarMiddle = document.querySelector(select.sidebar.middle);
const sidebarBottom = document.querySelector(select.sidebar.bottom);

const links = document.querySelector(select.sidebar.links);
const pages = document.querySelector(select.sidebar.main).children;

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

    } else if (page.classList.contains(linkHref)) {
      page.classList.add(classNames.active);
    }
  }
};

barButton.addEventListener('click', function () {
  sidebarMiddle.classList.toggle(classNames.toggle);
  sidebarBottom.classList.toggle(classNames.toggle);
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

