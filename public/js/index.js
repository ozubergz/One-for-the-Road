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