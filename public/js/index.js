$('#menu-btn').click(function() {
  $("#bg-2")[0].scrollIntoView({
    behavior: 'smooth',
    block: "start"
  });
});

$('.list').on('click', function() {
  let target = $(this).data('linked');
  $(`#${target}`).show();
  $(`#${target}`).siblings("div").hide();
});

$('.photo-box-img').on('click', function() {

  //show lightbox modal
  $('.lightbox').css('display', 'block');
  
  //get css background image url
  let bg = $(this).css('background-image');
  let img_url = bg.split(/"/)[1];

  let imgElement = $('<img>').attr({
    'class': 'img',
    'src': `${img_url}`
  }).appendTo('.img-placeholder');
});

$('.lightbox-close').on('click', function() {
  $('.lightbox').css('display', 'none');
  $('.img').remove();
});

