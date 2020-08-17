var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i< names.length; i++) {
  var c = names[i][0];
  if (c === 'J' || c === 'j') {
    byeSpeaker.speak(names[i]);
  }
  else {
    helloSpeaker.speak(names[i]);
  }
}
