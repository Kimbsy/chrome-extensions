var $dislikeImg = chrome.extension.getURL('img/dislike.png');


$(document).ready(function() {
	addDislike();
});

$(document).scroll(function() {
	addDislike();
});

var addDislike = function() {
	// main post dislike button
	$('form[rel="async"].commentable_item').each(function($index) {

		if (!$(this).hasClass('already-done')) {

			// create html using index
			var $dislikeLinkHtml = '</span></span> · <span><span data-reactid=".a"><a class="dislike-link" id="' + $index + '">Dislike</a>';
			var $dislikeImageRowHTML = '<li id="dislike-' + $index + '" class="UFIRow UFILikeSentence UFIFirstComponent dislike-image-row"><div class="clearfix"><div class="_ohe lfloat"><a class="img _8o _8r UFIImageBlockImage UFILikeThumb" href="#" tabindex="-1" title="Like this" role="button" aria-label="Like this"><img src="' + $dislikeImg + '" width="13" height="15"></a></div><div class=""><div class="UFIImageBlockContent"><div class="UFILikeSentenceText"><span>&nbsp;You<span> dislike this.</span></span></div></div></div></div></li>';

			// find likeLink and add dislike link
			var $likeLink = $(this).find('a.UFILikeLink:first');
			$likeLink.parent().append($dislikeLinkHtml);

			// add dislike image/text and hide it
			var $likeImageRow = $(this).find('ul.UFIList');
			$likeImageRow.prepend($dislikeImageRowHTML);
			$('li.dislike-image-row#dislike-' + $index).hide();

			$(this).addClass('already-done');
		}
	});

	//comment dislike button
	$('div.UFICommentActions > a.UFILikeLink').each(function($index) {

		if (!$(this).hasClass('already-done')) {

			// create html using index
			var $dislikeLinkHtml = '</span></span> · <span><span data-reactid=".a"><a class="dislike-comment-link" id="' + $index + '">Dislike</a>';

			// add dislike link
			$(this).parent().append($dislikeLinkHtml);

			// add dislike image/number and hide it
			$(this).parent().append('<div id="dislike-comment-' + $index + '" class="dislike-image-comment" style="display:inline-block;"> · <img src="' + $dislikeImg + '" width="13" height="16" style="margin-bottom:-4px;"><span style="color:#3B5998;"> 1</span></div>');
			$('div.dislike-image-comment#dislike-comment-' + $index).hide();

			$(this).addClass('already-done');
		}
	});

	// click event triggers dislike image
	// main post
	$('a.dislike-link').click(function() {
		var $linkID = $(this).attr('id');
		
		$('li.dislike-image-row#dislike-' + $linkID).show();
	});

	// comment
	$('a.dislike-comment-link').click(function() {
		var $linkID = $(this).attr('id');

		$('div.dislike-image-comment#dislike-comment-' + $linkID).show();
	});
};
