//
// var v = document.getElementsByTagName("video")[0];
//
// var a = document.getElementsByTagName("audio")[0];
// a.onplaying = function() {
//     v.play();
// };
//
// var v1 = document.getElementsByTagName("video")[1];
//
var a1 = document.getElementsByClassName("concha1")[0];
a1.onplaying = function() {
    v1.play();
};

//keys player

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName == 'z'){
    samplePlay(kick)
  } else
  if (keyName == 'x'){
    samplePlay(snare)
  }else
  if (keyName == 'c'){
    samplePlay(closeHat)
  }else
  if (keyName == 'v'){
    samplePlay(openHat)
  }else
  if (keyName == 'b'){
    samplePlay(bass)
  }else
  if (keyName == 'f'){
    samplePlay(aux1)
  }else
  if (keyName == 'g'){
    samplePlay(aux2)
  }
})


function samplePlay(sample){
    const sampleAudio = document.getElementById(sample.id);
    sampleAudio.src = config.audioDir + config.sampleSet[sample.id].audio;
    const sampleClone = sampleAudio.cloneNode()
    sampleClone.play().then(function() {

      console.log("played: " + sample.id);
    })

}

function samplePlay(sample){
    const sampleAudio = document.getElementById(sample.id);
    sampleAudio.src = config.audioDir + config.sampleSet[sample.id].audio;
    const sampleClone = sampleAudio.cloneNode()
    sampleClone.play().then(function() {
      console.log("played: " + sample.id);
    })

}

function videoLoad(sample){
  document.getElementsByClassName(sample)[0].src = config.videoDir + config.sampleSet[sample].video;

}

function videosLoad(){
  videos = document.getElementsByTagName('video')
  for (var video in videos) {
    if (videos.hasOwnProperty(video)) {
      videoLoad(videos[video].classList[0]);


    }
  }
}

function videoPlay(videoClass) {
  document.getElementsByClassName(videoClass)[0].play();
}
