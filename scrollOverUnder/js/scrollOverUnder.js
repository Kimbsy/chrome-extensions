var comic = $('#comic');
// comic
var text = comic.find('img').attr('title');

var html = '<p>' + text + '</p>'

comic.after(html);

// what-if
var illustrations = $('img.illustration');

illustrations.each(function() {
	var title = $(this).attr('title');
	$(this).after('<p style="text-align:center;">[' + title + ']</p>');
console.log($(this).attr('title'));
});


