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

        // remove_html_tag('span', 'html');
        // $('html').regexReplace('<\/?span[^>]*>');
        $('span.regex-match').contents().unwrap();
      }
      else {
        searchContainer.slideDown();
        showing = true;

        // select text
        searchInput.select();
      }
    }

    // submit search string
    if (showing) {
      if (e.keyCode == 13) {
        $('html').regexReplace(searchInput.val());
      }
    }
  });

});

$.fn.regexReplace = function(regexString) {

  var pattern = new RegExp(regexString, 'g');
  var repl = '<span class="regex-match">' + regexString + '</span>';
   
  this.each(function() {
    $(this).contents().each(function() {
      if(this.nodeType === 3 && pattern.test(this.nodeValue)) {
        $(this).replaceWith(this.nodeValue.replace(pattern, repl));
      }
      else if(!$(this).hasClass('high')) {
        $(this).regexReplace(regexString);
      }
    });
  });
  return this;

  // // create regex string
  // var regex = new RegExp('(' + regexString + ')', 'g');

  // // console.log('wooooo');

  // // // get text from page
  // // // var pageHTML = $('html').html();

  // // get all nodes
  // var nodes = $('*');

  // nodes.each(function() {
  //   // console.log($(this).text());
  //   if ($(this).text()) {
  //     console.log($(this).text());
  //     var oldText = $(this).text() || '';
  //     $(this).text(oldText.replace(regex, '<span class="regex-match">$1</span>'));
  //   }
  // });
};

function removeSpans() {
  var spans = document.getElementsByTagName("span");

  for(var i=0; i<spans.length;i++)
  {
    if(spans[i].className == "regex-match")
    {
      var container = spans[i].parentNode;
      var text = spans[i].innerHTML;
      container.innerHTML += text;
      container.removeChild(spans[i]);
    }
    else if(spans[i].className == "removed")
    {
      var container = spans[i].parentNode;
      container.removeChild(spans[i]);
    }
  }
}

function remove_html_tag(tag, target_div){
  var content = $(tag).html();
  var foundat = content.indexOf("<"+tag,foundat);
  while (foundat>-1) {
            f2=content.indexOf(">",foundat);
    if (f2>-1) {
      content=content.substr(0,foundat)+content.substr(f2+1,content.length);
    }
    
    f2=content.indexOf("</"+tag+">",foundat);
    
    if (f2>-1) {
      content=content.substr(0,f2)+content.substr(f2+3+tag.length,content.length);
    }
    foundat=content.indexOf("<"+tag,foundat);
  }
  $(target_div).html(content);
}
