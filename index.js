$(document).ready(function(){
  $("nav a").on('click', function(event) {
    if (this.hash !== "10") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){
        window.location.hash = hash;
      });
    }
  });
});
