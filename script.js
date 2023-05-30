$(document).ready(function() {
    $('.type-bar').change(function() {
      var input = $(this).val();
      $('ul').append('<li>' + input + '<i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i></li>');
      $(this).val('');
    });
  
    $('ul').on('click', '.fa-trash', function() {
      $(this).closest('li').fadeOut(200);
    });
  
    $('ul').on('click', '.fa-check', function() {
      $(this).closest('li').toggleClass('checked');
    });
  });
//   TIME
  $(document).ready(function() {
    setInterval(function() {
        var currentTime = new Date().toLocaleTimeString();
        $("#time-display").text(currentTime);
    }, 1000);
});