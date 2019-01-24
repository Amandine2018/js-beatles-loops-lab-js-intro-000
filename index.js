// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (let i = 0; i < musicians.length; i++){
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat;
}
