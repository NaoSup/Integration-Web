$(document).ready(function(){
  //alert('coucou, c\'est moi! :)');
  $('ul li a').click(function(clean){
    $.scrollTo(this.hash||0,1500);
    clean.preventDefault();
  });
});