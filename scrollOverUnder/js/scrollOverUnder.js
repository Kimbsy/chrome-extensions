$(document).ready(function() {
    // XKCD comic
    $('#comic').after($('#comic').find('img').attr('title'))

    // XKCD what-if
    $('img.illustration').each(function() {
        $(this).after('<p style="text-align:center;">[' + $(this).attr('title') + ']</p>');
    });
});
