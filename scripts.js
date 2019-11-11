const handleClick = (section, pos) => {
    if (pos) window.scrollTo(0, pos)
    else {
        const rect = document.getElementsByClassName(section)[0].getBoundingClientRect();
        window.scrollTo(0, rect.y + 30)
    }

}

const sections = document.querySelectorAll('.js-scroll');

const animaScroll = () => {
   sections.forEach(section => {
       const sectionTop = section.getBoundingClientRect().top - (window.innerHeight * 0.7);
       console.log(sectionTop);
       if(sectionTop < 0) {
           section.classList.add('ativo');
       }
   })
}

window.addEventListener('scroll', animaScroll);