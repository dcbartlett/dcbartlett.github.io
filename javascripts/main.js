var markdown = new showdown.Converter();
var firebaseConfig = {
  apiKey: "AIzaSyAeVy0OiiA4kci9pCEMb0u6d2ZjnFHqp5s",
  authDomain: "dcbartlett-github-io.firebaseapp.com",
  databaseURL: "https://dcbartlett-github-io.firebaseio.com",
  storageBucket: "dcbartlett-github-io.appspot.com",
  messagingSenderId: "711267652519"
};
firebase.initializeApp(firebaseConfig);

var html = $("#blogs-template").html();
console.log(html);
var blogTemplate = Handlebars.compile(html);

$(function(){
  $.ajax({
    url: 'https://ds151697.mlab.com:51697/dcbartlett_github_io/blogs',
    type: 'get',
    dataType: 'jsonp',
    jsonp: 'jsonp',
    success: function (data) {
      console.log('success', data);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('error', errorThrown);
    }
  });
});

// $("#blogView").html(blogTemplate());

Handlebars.registerHelper('blogs', function(blogEntries) {
  var out = '<div id="blogs">';

  for(var i=0, l=blogEntries.length; i<l; i++) {
    out = out + '<div class="blog">' + markdown.makeHtml(blogEntries[i].body) + '</li>';
  }

  return out + '</div>';
});
