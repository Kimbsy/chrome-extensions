/**
 * JavaScript file to be loaded into matched pages
 **/
$(document).ready(function() {

  // add regex search bar
  var searchContainer = $('html').prepend('<div id="regex-search-container"><input type="text" id="regex-search-input" value="^regex search$"></div>').find('#regex-search-container');
  var searchInput = $('#regex-search-input');

  // hide it
  searchContainer.hide();
  var showing = false;


  // listen for keypresses
  $(document).keydown(function(e) {
    // on ctrl + shift + f
    if (e.ctrlKey && e.shiftKey && e.keyCode == 70) {
      if (showing) {
        searchContainer.slideUp();
        showing = false;
      }
      else {
        searchContainer.slideDown();
        showing = true;

        // select text
        searchInput.select();
      }
    }

    // submit serach string
    if (showing) {
      if (e.keyCode == 13) {
        regexSearch(searchInput.val());
      }
    }
  });

});

function regexSearch(regexString) {
  console.log(regexString);
}
