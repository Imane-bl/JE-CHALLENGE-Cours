//70 challenge:)

/*   let names = function (...prmtr){

    return  `[${prmtr.join("], [")}] => done`;
}
console.log(names("osma","mohamed","ali","ibrahim"));
/////////////////////
let names =  (...prmtr)=> `[${prmtr.join("], [")}]  => done`;

console.log(names("osma","mohamed","ali","ARRRAYY"));



 let nmbr=[20,50,10,60];
let calc = (one,two,...nums)=> one + two+ +nums;//le restt
console.log(calc(10,nmbr.shift(),nmbr.shift()));//80 

//shift elimine li premier argum
//donc nhina 1 et 2 il rest 10,60 avec 10 -80
//any fon
let nmbr=[20,50,10,60];
function calc (one,two,...nums){
    return  one + two+ +nums;//le restt
}
console.log(calc(10,nmbr.shift(),nmbr.shift()));//80 */
//____________________________________________________________________

//ass 64 -70
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
 return `${zName.slice(0, zName.indexOf(" "))} ${zName.charAt(zName.indexOf(" ") + 1).toUpperCase()}`;
      // Osama Mohamed => Osama M.
   
    }
   // namePattern("ahmed kodai");
    function ageWithMessage() {
     return  `Your Age Is ${parseInt(zAge)}`; 
      // 32 Is The Age => Your Age Is 32
    }
   ageWithMessage();
    function countryTwoLetters() {
      return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
      // Syria => You Live In SY
    }
    countryTwoLetters();

    function fullDetails() {
  return `${namePattern("aa hi")} ,
      ${ageWithMessage()},
       ${countryTwoLetters()}`
    }

    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG 
  //____________________________________________________________________
  //ass2 TRABSFER ////////////////////////////////////////////////
  let itsMe=() =>   `Iam A Normal Function`;
  console.log(itsMe()); // Iam A Normal Function
//____________________________________________________________________

  let urlCreate=(protocol, web, tld)=> 
    `${protocol}://www.${web}.${tld}`;
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//____________________________________________________________________

  //ASS3
  let checker=(zName)=> (status) => (salary) =>
     status +salary + status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
//____________________________________________________________________
//ASS4

function specialMix(...data) {
    var res=0;
    
        for(let i=0;i<data.length;i++){
            if (typeof data[i] === 'number'){
            res=res+data[i];
        }if(typeof data[i] === 'string'){
            if (isNaN(parseInt(data[i])) === false) {
            res=res+parseInt(data[i]);
        }}
    }
    
         if (res === 0) {
      return `All Is Strings`;

        }
         return res;
  
}
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings