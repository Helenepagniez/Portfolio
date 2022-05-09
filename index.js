
//affiche parcours
(function showElements() 
{
  "use strict";
  
  // define variables
  var items = document.querySelectorAll(".timeline li");
  
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) 
  {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function callbackFunc() 
  {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
          
      }
    }
  }
  
  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

//envoi mail
function sendMail(params)
{
  var tempParams = 
  {
    name: document.getElementById("name").value,
    prenom: document.getElementById("prenom").value,
    message: document.getElementById("message").value,
    email: document.getElementById("email").value,
  };

  emailjs.send('gmail','template_ze5a3hk',tempParams)
    .then(function(res){
      console.log("success", res.status);
    })
} 

// ===== Scroll ====
const scroll = document.querySelector(".scroll");
// Lorsque la page est chargée, masquez le bouton de défilement vers le haut
window.onload = function()
{
 scroll.style.visibility = "hidden";
 scroll.style.opacity = 0;
};
// Si la page défile à plus de 200px,
// afficher le bouton de défilement vers le haut
// Sinon gardez le bouton caché
window.onscroll = function()
{
 if (window.scrollY > 300)
 {
 scroll.style.visibility ="visible";
 scroll.style.opacity = 1;
 } else 
 {
 scroll.style.visibility = "hidden";
 scroll.style.opacity = 0;
 }
};