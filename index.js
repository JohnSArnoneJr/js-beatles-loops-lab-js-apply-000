// add solution here
const musicians = ["John", "Paul", "George", "Ringo"];
const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var allBandMembers = [];
  for (var i=0; i<musicians.length; i++) {
    allBandMembers.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return allBandMembers;
}

function johnLennonFacts() {
  const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  
}