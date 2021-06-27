$(function() {
  $(document).on('click', '#hamburger-list-show', function(){
    $('.header-hamburger-icon').attr('id', 'hamburger-list-hide');
    $('.hamburger-list').fadeIn(500);
    $('.hamburger-list').css('display', 'flex');
    $('.header-hamburger-line1').css('transform', 'translateY(2px) translateX(-3px) rotate(-225deg)');
    $('.header-hamburger-line2').css('display', 'none');
    $('.header-hamburger-line3').css('transform', 'translateY(-2px) translateX(-3px) rotate(225deg)');
  });

  $(document).on('click', '#hamburger-list-hide', function(){
    $('.header-hamburger-icon').attr('id', 'hamburger-list-show');
    $('.hamburger-list').fadeOut(500);
    //$('.hamburger-list').css('display', 'none');
    $('.header-hamburger-line1').css('transform', '');
    $('.header-hamburger-line2').css('display', 'block');
    $('.header-hamburger-line3').css('transform', '');
  });
});
