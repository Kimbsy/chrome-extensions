var links = [
  'http://www.reactiongifs.com/wp-content/gallery/no/no-effin-way.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/646.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/841.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/486.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/1062.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/rdj-no.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/nuntuh.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/les-mis-no.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/Julie-White.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/colbert-no.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/aubrey-no.gif',
  'http://www.reactiongifs.com/wp-content/gallery/no/5d4f7172a17eb2ec20df365eed1ed70a.gif'
];

// run it evry second
setInterval(noDisney, 1000);

// run when video is clicked
$('#player-api').click(function() {

  noDisney();
});

function noDisney() {

  // get title of video
  var title = $('#eow-title').attr('title');

  // check if it has the word disney in it
  if (title.toLowerCase().indexOf("disney") >= 0) {

    // generate random number
    var rand = Math.floor(Math.random() * (links.length + 1));
    
    // redirect
    window.location = links[rand];
  }
}
