$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' +
            '<span class="shopping-item">' + newItem + '</span>' +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' +
          '</li>');
    });
});

$(function() {
    $('ul').on('click', 'li', function(event) {
        $(this).toggleClass('.shopping-item__checked');
    });
});

$(function() {
    $('.shopping-item-delete').on('click', function(event) {
        this.closest('li').remove();
    });
});