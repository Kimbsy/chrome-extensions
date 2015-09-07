/**
 * JavaScript file to be loaded into matched pages
 **/
$(document).ready(function() {
  $('.js-icon-item a').each(function() {

    // get url, name and html of icon tile
    var url = $(this).attr('href');
    var name = $(this).attr('href').substr($(this).attr('href').lastIndexOf('/') + 1);
    var old = $(this).html();

    // create copy of icon tile and give it a title aattribute
    $(this).parent().append('<a href="' + url + '"" title="octicon-' + name + '">' + old + '</a>');

    // delete the old one (to get rid of the flash bullshit)
    $(this).remove();
  });
});
