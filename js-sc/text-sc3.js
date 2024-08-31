$(function($){
  $('.found-1').on('click',function (){
    if ($('.file-1').is(':hidden')) {
      $('.file-1').slideDown();
    } else {
      $('.file-1').slideUp();
    }
  });
  $('.found-2').on('click',function (){
    if ($('.file-2').is(':hidden')) {
      $('.file-2').slideDown();
    } else {
      $('.file-2').slideUp();
    }
  });
  $('.found-3').on('click',function (){
    if ($('.file-3').is(':hidden')) {
      $('.file-3').slideDown();
    } else {
      $('.file-3').slideUp();
    }
  });
  $('.found-4').on('click',function (){
    if ($('.file-4').is(':hidden')) {
      $('.file-4').slideDown();
    } else {
      $('.file-4').slideUp();
    }
  });
  $('.found-4').on('click',function (){
    if ($('.file-5').is(':hidden')) {
      $('.file-5').slideDown();
    } else {
      $('.file-5').slideUp();
    }
  });
  $('.file-4').on('click',function (){
    if ($('.check-tys-1').is(':hidden')) {
      $('.check-tys-1').slideDown();
    } else {
      $('.check-tys-1').slideUp();
    }
  });
  $('.file-5').on('click',function (){
    if ($('.check-tys-2').is(':hidden')) {
      $('.check-tys-2').slideDown();
    } else {
      $('.check-tys-2').slideUp();
    }
  });
  $('.found-4').on('click',function (){
    if ($('.check-tys-1').is(':visible')) {
      $('.check-tys-1').slideUp();
    }
  });
  $('.found-4').on('click',function (){
    if ($('.check-tys-2').is(':visible')) {
      $('.check-tys-2').slideUp();
    }
  });
});