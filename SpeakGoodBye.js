
(function(window1) {
  var speakWord = "Good Bye";
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  window1.byeSpeaker = byeSpeaker;
})(window);
