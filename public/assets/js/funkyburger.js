$(function() {

  $('.addBurger').on('click', function(event) {
    event.preventDefault();
    let newBurger = {
      burger_name: $('#newBurger').val().trim(),
      devoured: 0
    };

    console.log(newBurger);

    $.ajax('/api/funkyburgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('new burger!');
        location.reload();
      }
    )
  });

  $('.minibutton').on('click', function(event) {
    let id = $(this).data('id');

    let devoured = {
      devoured: 1
    }
    
    $.ajax('/api/funkyburgers/' + id, {
      type: 'PUT',
      data: devoured,
    }).then(
      function() {
        console.log('it has been done');
        // reload
        location.reload();
      }
    )
  })
});