// Barra de carga por scroll
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = `${scrollPercentage}%`;
});



/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// Inicializa SortableJS en el contenedor de los iconos
new Sortable(document.getElementById('sortable-tech'), {
  animation: 150,  // Animación suave al mover los iconos
  onEnd(evt) {
      console.log('Icono movido:', evt.item);
  }
});


const form = document.getElementById('contactForm');
    const modal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');
    
    // Mostrar el modal cuando se envíe el formulario
    form.addEventListener('submit', function () {
        modal.classList.add('show');
    });
    
    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', function () {
        modal.classList.remove('show');
    });

    document.addEventListener("DOMContentLoaded", () => {
      // Ajuste de desplazamiento para las secciones
      const offset = 50; // Cambiá este valor según la altura que quieras ajustar
      const adjustScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: topPosition,
            behavior: "smooth",
          });
        }
      };
    
      // Interceptar clicks en los enlaces
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const targetId = anchor.getAttribute("href").substring(1);
          if (targetId === "projects" || targetId === "tecno") {
            e.preventDefault();
            adjustScroll(targetId);
          }
        });
      });
    });
    
    
    