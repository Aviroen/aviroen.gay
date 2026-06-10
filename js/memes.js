// Source - https://stackoverflow.com/a/50013750
// Posted by Josh Bradley
// Retrieved 2026-06-10, License - CC BY-SA 3.0

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

document.writeMemes('<img src="img/memes' + getRandomInt(1, 2) + '.jpg">')
