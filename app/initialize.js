document.addEventListener('DOMContentLoaded', function() {


$(".marqueur-carte").click(function(){
  $( this ).find( ".bulle-carte" ).toggleClass("is-active animated fadeIn");
});

$(".offre-spe").hover(function(){
  $( this ).find( ".to-anim" ).toggleClass("animated hinge infinite shake");
});

// .modal-backdrop classes

$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});


  console.log('Initialized app');
});
