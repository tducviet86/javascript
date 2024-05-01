var stringValue = "Deserunt mollit magna do dolor anim cupidatat id";
var word = stringValue.split(" ");
for (var i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
}
console.log(word.join(" "));
