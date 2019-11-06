//Form Post Starts
$('#sendDeets').submit(e => {
  e.preventDefault();
  let name = $('#name').val();
  let company = $('#company').val();
  let opinion = $('#Opinion').val();

  let $dang = $('.dang');
  let $successful = $('.successful');

  if (name === '' || company === '' || opinion === '') {
    $dang.append(`<div class="alert alert-danger" role="alert">
    Details not Complete
  </div>`);
    window.setTimeout(function() {
      window.location.reload();
    }, 2000);
  } else {
    $.ajax({
      url: 'http://localhost:3000/details',
      method: 'POST',
      data: {
        name,
        company,
        opinion
      }
    }).done(e => {
      $successful.append(`<div class="alert alert-success" role="alert">
      Form Sent Successfully !.. we will get Bact to you in a Minute
    </div>`);
      $('#name').val('');
      $('#company').val('');
      $('#Opinion').val('');
    });
  }
});

//Form Post Ends
