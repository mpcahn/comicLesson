console.log("Hey I am connected", $);

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Gets a random number between 1 and 2020 (The number of XKCD comics in existence at the time of this writing)
// and returns a link to the JSON of that comic
function randomComic() {
  var comicNumber = Math.floor(Math.random() * 2020);
  var link = 'https://galvanize-cors.herokuapp.com/https://xkcd.com//info.0.json';
  link = link.insert(54, comicNumber);
  return link
}



$(document).ready(function(){

console.log("Hey I am ready")

// Fills website with info from the randomComic JSON
$.get(randomComic())
  .then(function(data){
    console.log(data);
    $('h1').text(data.title);
    $('p').text(data.alt);
    $('img').attr('src',data.img);

    var pSafeTitle = $('<p></p>').text(data.safe_title);
    var pComicNum = $('<p></p>').text(data.num)

    $('body').append(pSafeTitle, pComicNum);
  })
})

$('#navi').click(function() {
  window.alert('hey are you listening?');
})

$('#wallPaper').click(function() {
  console.log('Wallpaper Clicked');
  $("body").css("background-color", getRandomColor);
})

