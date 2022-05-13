function oddSum(xxx: number[]): number {
    let result: number = 0;
    for(let i = 0; i < xxx.length; i = i + 1) {
        if(xxx[i] % 2 === 1 ) {
         result = result + xxx[i];
        }
    }
     return result;
 }