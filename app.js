// <===== NAV ======>

const ul = document.querySelector('.nav ul');
const burger = document.querySelector('.burger');
const navlinks = document.querySelectorAll('.nav ul li');
const overflowYbody = document.querySelector('html')

burger.onclick = () => {
    ul.classList.toggle('nav-active')
    navlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navlinkfade 0.5s ease-in forwards ${index / 7 + 0.2}s`;
        }
    });

    //burger anination
    burger.classList.toggle('toggle');
    overflowYbody.classList.toggle('overflowY')
}


// Characters >>>>>>>
const boxes = document.querySelectorAll('.box')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .5,
})

boxes.forEach(box => {
    observer.observe(box)
})


// NAV BAR OBSERVER =============>

const navBar = document.querySelector(".nav")
const homeSection = document.querySelector(".home")


const navBarObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) navBar.classList.add('scrolled')
            else navBar.classList.remove('scrolled')
        })
    },
    {
        // rootMargin: '-100px 0px 0px 0px',
    }
)

navBarObserver.observe(homeSection)