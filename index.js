// add solution here
const musicians = ["John", "Paul", "George", "Ringo"];
const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var allBandMembers = [];
  for (var i=0; i<musicians.length; i++) {
    allBandMembers.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
  return allBandMembers;
}