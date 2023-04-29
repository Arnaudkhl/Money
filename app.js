const intro = document.querySelector('.intro');
const introLoop = document.querySelector('.intro-loop');

intro.addEventListener('ended', function() {
    intro.style.display = 'none';
    introLoop.style.display = 'block';
    introLoop.play();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
document.addEventListener("DOMContentLoaded", function(event) { 
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");
  
    setTimeout(function() {
      loader.style.display = "none";
      content.style.display = "block";
    }, 2000);
  });

  setTimeout(function() {
    document.querySelector('.title').classList.add('show');
  }, 4000);
  
  setTimeout(function() {
    document.querySelector('.navbar-brand').classList.add('show');
  }, 5000);
  setTimeout(function() {
    document.querySelector('.navbar-nav').classList.add('show');
  }, 6200);

 
  ///
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// Fonction pour animer un élément en fonction de la position de défilement
function animateElement(element, offset = 0) {
    // Variables pour la gestion de l'animation
    let scrollPosition = 0;
    let requestId = null;
  
    // Fonction pour mettre à jour la position de l'élément
    function updateElementPosition() {
      // Calculer la nouvelle position en fonction de la distance parcourue depuis le haut de la page
      const newPosition = (scrollPosition - offset) * -0.2;
  
      // Appliquer le décalage à l'élément
      element.style.transform = `translateY(${newPosition}px)`;
    }
  
    // Fonction pour gérer l'animation
    function animate() {
      // Mettre à jour la position de l'élément
      updateElementPosition();
  
      // Demander une nouvelle trame d'animation
      requestId = requestAnimationFrame(animate);
    }
  
    // Ajouter un écouteur d'événement de scroll sur la fenêtre
    window.addEventListener("scroll", function() {
      // Récupérer la distance parcourue depuis le haut de la page
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      // Si une animation est en cours, ne rien faire pour éviter de surcharger la boucle d'animation
      if (requestId) {
        return;
      }
  
      // Lancer l'animation
      requestId = requestAnimationFrame(animate);
    });
  }
  
  // Animer l'élément .title
  const title = document.querySelector(".title");
  animateElement(title);
  
  // Animer l'élément .scan avec un offset de -300px
  const scanTitle = document.querySelector(".scans");
  animateElement(scanTitle, 1700);

  const smsTitle = document.querySelector(".sms");
  animateElement(smsTitle, 1500);
  
  const h2_titlesTitle = document.querySelector(".h2_titles");
  animateElement(h2_titlesTitle, 900);

  const txt_footerTitle = document.querySelector(".txt-footer");
  animateElement(txt_footerTitle,3000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// Sélectionne tous les éléments "span" à l'intérieur des éléments ayant la classe "h2_titles"
const spans = document.querySelectorAll('.h2_titles span');

// Ajoute un écouteur d'événements qui détecte le scroll de la page
window.addEventListener('scroll', () => {
  // Détermine la position à partir de laquelle l'animation doit se déclencher
  const triggerTop = window.innerHeight / 2;

  // Parcourt tous les éléments "span" sélectionnés auparavant
  spans.forEach(span => {
    // Obtient la position de l'élément "span" par rapport à la fenêtre visible
    const spanTop = span.getBoundingClientRect().top;

    // Si l'élément "span" est dans la zone de déclenchement, ajoute la classe "zoom-in" et supprime la classe "zoom-out"
    if (spanTop < triggerTop) {
      span.classList.add('zoom-in');
      span.classList.remove('zoom-out');
    } 
    // Sinon, ajoute la classe "zoom-out" et supprime la classe "zoom-in"
    else {
      span.classList.add('zoom-out');
      span.classList.remove('zoom-in');
    }
  });
});
/////////////////////////navbar//////////////
// Récupérer la section payment et free
const paymentSection = document.getElementById('payment');
const freeSection = document.getElementById('free');

// Récupérer les liens de navigation et la navbar-brand
const navLinks = document.querySelectorAll('.nav-link, .navbar-brand');

// Ajouter un événement de défilement à la fenêtre
window.addEventListener('scroll', () => {
  // Si la section payment est atteinte
  if (window.scrollY >= paymentSection.offsetTop && window.scrollY < paymentSection.offsetTop + paymentSection.offsetHeight) {
    // Changer la couleur des liens de navigation en noir
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'black';
    }
  } else if (window.scrollY >= paymentSection.offsetTop + paymentSection.offsetHeight && window.scrollY < freeSection.offsetTop) {
    // Réinitialiser la couleur des liens de navigation à blanc
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = 'white';
    }
  } else {
    // Remettre la couleur par défaut des liens de navigation
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = '';
    }
  }
});
