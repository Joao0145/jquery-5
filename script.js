$(document).ready(function() {
    $('#clickMe').on('click', function() {
        $('#result').fadeIn();
    });
});

$('a[href="https://example.com"]').css('color', 'red');


$('li:even').css('background-color', '#f0f0f0'); // Seleciona itens de lista pares

$('#header, .nav-item').css('color', 'blue');


$('#moveMe').animate({
    left: '250px',
    opacity: 0.5
  }, 1000); // Move o elemento e altera a opacidade em 1 segundo
  

  $.ajax({
    url: 'https://api.example.com/data',
    type: 'GET',
    success: function(data) {
      $('#result').html(data);
    },
    error: function(error) {
      console.error('Erro:', error);
    }
  });


  $('#myElement')
  .css('background-color', 'blue')
  .slideUp(500)
  .fadeIn(500);

  

  var $button = $('#myButton');
$button.on('click', function() {
  // Sua lógica aqui
});


$('#parentElement').on('click', '.childElement', function() {
    // Sua lógica aqui
  });
  