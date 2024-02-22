// BURGER
const menu = document.querySelector('.header__main')
const btnOpen = document.querySelector('.burger')
const btnClose = document.querySelector('.close')
const links = document.querySelectorAll('.nav__link')
let arr = [btnClose,]

btnOpen.onclick = () => {
  menu.classList.add('header__main--active');
  btnOpen.classList.add('burger--hidden');
  btnClose.classList.add('close--active');
}

links.forEach(link => {
  arr.push(link)
})

arr.forEach(item => {
  item.onclick = () => {
    menu.classList.remove('header__main--active');
    btnOpen.classList.remove('burger--hidden');
    btnClose.classList.remove('close--active');
  }
})







// ACTIVE LINK
const observer = new IntersectionObserver((entries) => { // отследим секцию по ключу "isIntersecting"
  // console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) { // будет true, если догортали до секции (она в области видимости)
      links.forEach((link) => {
        let linkId = link.getAttribute('href').replace('#', ''); // заменить # на '', тк сравниваем с href секций, в которых нет #
        if (linkId === entry.target.id) {
          link.classList.add('nav__link--active');
        } else {
          link.classList.remove('nav__link--active');
        }
      });
    }
  });
}, {
  threshold: 0.5 // на 50% заехали на секцию и она отображается по кнопке как действующая
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section)
});