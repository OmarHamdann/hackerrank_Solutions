//dataFinder

function dataFinder(data) {
    // Write your code here
    return function find(minRange,maxRange,value){
        if(maxRange >data.length-1)
        throw new Error("Invalid range");
   

   for (let index = minRange; index <= maxRange; index++) {
      if (value==data[index]) {
          return true
      }
     
       
   }
   return false
    }
}