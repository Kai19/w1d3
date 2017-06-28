function countLetters(str){
  var newString = str.split(" ").join("").toLowerCase();
  var resultObj = {};
  for(var x = 0; x < newString.length; x++){
    if(!(newString[x] in resultObj)){
      resultObj[newString[x]] = [x];
    }else{
      resultObj[newString[x]].push(x);
    }
   }
  return resultObj;
}

console.log(countLetters("Lighthouse in the house"));