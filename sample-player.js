var v = document.getElementsByTagName("video")[0];

var a = document.getElementsByTagName("audio")[0];
a.onplaying = function() {
    v.play();
};

var v1 = document.getElementsByTagName("video")[1];

var a1 = document.getElementsByClassName("concha1")[0];
a1.onplaying = function() {
    v1.play();
};

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName == 'c'){
    a1.play()
  } else
  if (keyName == 'v'){
    a.play()
  }


});
