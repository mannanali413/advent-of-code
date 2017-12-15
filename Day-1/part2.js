function computeSum(str){
  let sum = 0;
  let firstPointer = 0;
  let len = str.length;
  let end = len - 1;
  let midway = parseInt(Math.floor(len/2), 10);
  while(firstPointer <= end){
    let comparePointer = (firstPointer + midway)%len;
    let currNumber = parseInt(str.charAt(firstPointer), 10);
    let compareNumber = parseInt(str.charAt(comparePointer), 10);
    if(currNumber == compareNumber){
      sum += currNumber;
    }
    firstPointer += 1;
  }
  return sum;
}