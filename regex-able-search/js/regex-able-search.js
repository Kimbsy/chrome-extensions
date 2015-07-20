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

    console.log('wooooo');

    // on ctrl + shift + f
    if (e.ctrlKey && e.shiftKey && e.keyCode == 70) {
      if (showing) {
        searchContainer.slideUp('fast');
        showing = false;

        // remove all current match spans
        $('span.regex-match').contents().unwrap();
        $('span.regex-match').remove();
      }
      else {
        searchContainer.slideDown('fast');
        showing = true;

        // select text
        searchInput.select();
      }
    }

    // close search
    if (showing) {
      if (e.keyCode == 27) {
        searchContainer.slideUp('fast');
        showing = false;

        // remove all current match spans
        $('span.regex-match').contents().unwrap();
        $('span.regex-match').remove();
      }
    }

    // submit search string
    if (showing) {
      if (e.keyCode == 13) {
        // remove all current match spans
        $('span.regex-match').contents().unwrap();
        $('span.regex-match').remove();

        // wrap matches in highlight spans
        $('html').regexSpanWrap(searchInput.val());

        // reselect text
        searchInput.select();
      }
    }
  });

});

$.fn.regexSpanWrap = function(regexString) {

  // create regex from string
  var pattern = new RegExp(regexString, 'g');
   
  // loop over all nodes
  this.each(function() {
    $(this).contents().each(function() {
      if(this.nodeType === 3 && pattern.test(this.nodeValue)) {
        $(this).replaceWith(this.nodeValue.replace(pattern, function(match) {
          return '<span class="regex-match">' + match + '</span>';
        }));
      }
      else if(!$(this).hasClass('high')) {
        $(this).regexSpanWrap(regexString);
      }
    });
  });
  return this;
};
