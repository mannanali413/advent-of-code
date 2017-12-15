function computeSum(str){
  let sum = 0;
  let currPointer = 0;
  let end = str.length - 1;
  while(currPointer < end){
    let comparePointer = currPointer + 1;
    let currNumber = parseInt(str.charAt(currPointer), 10);
    let compareNumber = parseInt(str.charAt(comparePointer), 10);
    if(currNumber == compareNumber){
      sum += currNumber;
    }
    currPointer = comparePointer;
  }
  if(parseInt(str.charAt(0), 10) === parseInt(str.charAt(end), 10)){
    sum += parseInt(str.charAt(0), 10);
  }
  return sum;
}