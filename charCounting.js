function countLetters(str){
  var newString = str.split(" ").join("").toLowerCase();
  var resultObj = {};
  for(var x = 0; x < newString.length; x++){
    if(!(newString[x] in resultObj)){
      resultObj[newString[x]] = 1;
    }else{
      resultObj[newString[x]] += 1;
    }
   }
  return resultObj;
}

console.log(countLetters("Lighthouse in the house"));