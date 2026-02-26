


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1000);
});



function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  const icon = document.getElementById('menu-icon');
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    icon.classList.remove('fa-bars-staggered');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars-staggered');
  }
}


document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav-menu');
    const icon = document.getElementById('menu-icon');
    nav.classList.remove('active');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars-staggered');
  });
});


const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
  
      
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});


function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  contents.forEach(content => content.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}




 document.getElementById("portfolio-contact").addEventListener("submit", function(event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      
      let whatsappNumber = "919860183511";

      let whatsappURL = `https://wa.me/${9860183511}?text=` + encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

      window.open(whatsappURL, "_blank");
  }); 


document.addEventListener('DOMContentLoaded', () => {

  const style = document.createElement('style');
  style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-content .reveal:nth-child(1) { transition-delay: 0.1s; }
        .hero-content .reveal:nth-child(2) { transition-delay: 0.3s; }
        .hero-content .reveal:nth-child(3) { transition-delay: 0.5s; }
        .hero-content .reveal:nth-child(4) { transition-delay: 0.7s; }
    `;
  document.head.appendChild(style);
});