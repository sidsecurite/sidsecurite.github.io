document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in', '.fadeRed');
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    const checkVisibility = () => {
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});

function classToggle() {
    const navs = document.querySelectorAll('.listaNavbar')
    navs.forEach(nav => nav.classList.toggle('showMenuNavbar'));
}
document.querySelector('.menuButtonNavbar')
    .addEventListener('click', classToggle);

const el = document.getElementById("hoverActiveList");
const hiddenDiv = document.getElementById("listNos");
el.addEventListener('click', function handleMouseOver() {
    hiddenDiv.style.display = 'block';
});

hiddenDiv.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';
});
hiddenDiv.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';
});
const timeOut = setTimeout(mouseTime, 100);
hiddenDiv.addEventListener('mouseout', function mouseTime() {
    hiddenDiv.style.display = 'none';
});

const x = document.getElementById('closeX');
const cookie = document.getElementById('cookiesIDS')

x.addEventListener('click', function close() {
    cookie.style.display = 'none';
})

