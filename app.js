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

function randomComic() {
  var comicNumber = Math.floor(Math.random() * 2018);
  var link = 'https://galvanize-cors.herokuapp.com/https://xkcd.com//info.0.json';
  link = link.insert(54, comicNumber);
  return link
}

randomComic()


$(document).ready(function(){

  console.log("Hey I am ready")

    $.get(randomComic())
      .then(function(data){
        console.log(data);
        $('h1').text(data.title);
        $('p').text(data.alt);
        $('img').attr('src',data.img);

        var pSafeTitle = $('<p></p>').text(data.safe_title);
        var pComicNum = $('<p></p>').text(data.num)

        $('body').append(pSafeTitle, pComicNum);
        
        
        //var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
        //$("body").append(txt1, txt2, txt3);      // Append the new elements 
        
      })
})

$('#navi').click(function() {
  window.alert('hey are you listening?');
})

$('#wallPaper').click(function() {
  console.log('Wallpaper Clicked');
  $("body").css("background-color", getRandomColor);
})

