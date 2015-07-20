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

  // variable for which match we are looking at
  var matchIndex = 0;

  // variable to store the current search string
  var currentInput = '';

  // listen for keypresses
  $(document).keydown(function(e) {

    // on ctrl + shift + f
    if (e.ctrlKey && e.shiftKey && e.keyCode == 70) {
      if (showing) {
        searchContainer.slideUp('fast');
        showing = false;

        // remove all current match spans
        $('span.regex-match').contents().unwrap();
        $('span.regex-match').remove();

        // reset match index
        matchIndex = 0;

        // reset current input
        currentInput = '';
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

        // reset match index
        matchIndex = 0;

        // reset current input
        currentInput = '';
      }
    }

    // submit search string
    if (showing) {
      if (e.keyCode == 13) {
        if (searchInput.val() == currentInput) {
          // look at the next/previous match
          if (e.shiftKey) {
            matchIndex--;
          }
          else {
            matchIndex++;
          }
        }
        else {
          // remove all current match spans
          $('span.regex-match').contents().unwrap();
          $('span.regex-match').remove();

          // wrap matches in highlight spans
          $('html').regexSpanWrap(searchInput.val());

          // set the current search string
          currentInput = searchInput.val();

          // reselect text
          searchInput.select();          
        }
        // find out how many matches there are
        var matches = $('.regex-match');
        
        // make sure we loop through matches
        if (matchIndex > matches.length - 1) {
          matchIndex = 0;
        }
        if (matchIndex < 0) {
          matchIndex = matches.length - 1;
        }
        
        // remove all current classes
        matches.each(function() {
          $(this).removeClass('regex-match-current');
        });

        // add current class to the current one
        $(matches[matchIndex]).addClass('regex-match-current');
        
        // scroll to it
        matches[matchIndex].scrollIntoView();
      }
    }
  });
});

$.fn.regexSpanWrap = function(regexString) {

  // create regex from string
  var pattern = new RegExp(regexString, 'g');

  // loop over all nodes
  this.each(function() {
    // loop over all the contents of this node
    $(this).contents().each(function() {
      // if it's a text node
      if(this.nodeType === 3 && pattern.test(this.nodeValue)) {
        // replace the match with the match wrapped in a highlighting span
        $(this).replaceWith(this.nodeValue.replace(pattern, function(match) {
          return '<span class="regex-match">' + match + '</span>';
        }));
      }
      // recurse
      else if(!$(this).hasClass('regex-match')) {
        $(this).regexSpanWrap(regexString);
      }
    });
  });
  return this;
};
