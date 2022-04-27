const students=[
   {
      studentName: "joy",
      roll : 3,
      age : 9,
      class : "four",
      gender : "male",
      location : "bogura",
      admissionFee : 560 
   },
   {
      studentName: "juli",
      roll : 5,
      age : 8,
      class : "four",
      gender : "female",
      location : "sylhet",
      admissionFee : 560 
   },
   {
      studentName: "alo",
      roll : 4,
      age : 18,
      class : "five",
      gender : "female",
      location : "dhaka",
      admissionFee : 620 
   },
   {
      studentName: "basir",
      roll : 8,
      age : 22,
      class : "four",
      gender : "male",
      location : "uttora",
      admissionFee : 560 
   },
   {
      studentName: "jamela",
      roll : 6,
      age : 25,
      class : "four",
      gender : "female",
      location : "bogura",
      admissionFee : 560 
   },
   {
      studentName: "rifa",
      roll : 13,
      age : 28,
      class : "five",
      gender : "female",
      location : "bogura",
      admissionFee : 620 
   },
   {
      studentName: "shuvo",
      roll : 9,
      age : 19,
      class : "four",
      gender : "male",
      location : "pabna",
      admissionFee : 560 
   },
   {
      studentName: "sweki",
      roll : 17,
      age : 28,
      class : "six",
      gender : "female",
      location : "pabna",
      admissionFee : 660 
   },
   {
      studentName: "rahim",
      roll : 19,
      age : 24,
      class : "six",
      gender : "male",
      location : "dhaka",
      admissionFee : 660 
   },
   {
      studentName: "mumin",
      roll : 21,
      age : 19,
      class : "six",
      gender : "male",
      location : "uttora",
      admissionFee : 660 
   },
   {
      studentName: "shohagi",
      roll : 24,
      age : 18,
      class : "seven",
      gender : "female",
      location : "uttora",
      admissionFee : 710 
   },
   {
      studentName: "tunir",
      roll : 27,
      age : 16,
      class : "seven",
      gender : "male",
      location : "rangpur",
      admissionFee : 710 
   },
   {
      studentName: "akash",
      roll : 29,
      age : 23,
      class : "seven",
      gender : "male",
      location : "rangpur",
      admissionFee : 710 
   },
   {
      studentName: "somrat",
      roll : 31,
      age : 23,
      class : "five",
      gender : "male",
      location : "uttora",
      admissionFee : 620 
   },
   {
      studentName: "mina",
      roll : 33,
      age : 18,
      class : "four",
      gender : "female",
      location : "rangpur",
      admissionFee : 560 
   },
   {
      studentName: "jamil",
      roll : 35,
      age :24,
      class : "four",
      gender : "male",
      location : "dhaka",
      admissionFee : 560 
   },
   {
      studentName: "polok",
      roll : 37,
      age : 29,
      class : "five",
      gender : "male",
      location : "rajshahi",
      admissionFee : 620 
   },
   {
      studentName: "isha",
      roll : 38,
      age : 8,
      class : "five",
      gender : "female",
      location : "rajshahi",
      admissionFee : 620
   },
   {
      studentName: "arnob",
      roll : 41,
      age : 18,
      class : "six",
      gender : "male",
      location : "rajshahi",
      admissionFee : 660 
   },
   {
      studentName: "ohee",
      roll : 42,
      age : 15,
      class : "three",
      gender : "female",
      location : "uttora",
      admissionFee : 550 
   },
   {
      studentName: "zami",
      roll :45,
      age : 7,
      class : "three",
      gender : "male",
      location : "dhaka",
      admissionFee : 550 
   },
   {
      studentName: "rumi",
      roll :47,
      age : 22,
      class : "three",
      gender : "female",
      location : "rajshahi",
      admissionFee : 550 
   },
   {
      studentName: "shadhin",
      roll :49,
      age : 10,
      class : "four",
      gender : "male",
      location : "pabna",
      admissionFee : 560 
   },
   {
      studentName: "kahar",
      roll :51,
      age : 9,
      class : "four",
      gender : "male",
      location : "bogura",
      admissionFee : 560 
   },
   {
      studentName: "arman",
      roll :53,
      age : 11,
      class : "seven",
      gender : "male",
      location : "rajshahi",
      admissionFee : 710 
   },
   {
      studentName: "deen",
      roll :59,
      age : 11,
      class : "six",
      gender : "male",
      location : "dhaka",
      admissionFee : 660
   },
   {
      studentName: "nainai",
      roll :61,
      age : 24,
      class : "seven",
      gender : "male",
      location : "rangpur",
      admissionFee : 660 
   },
   {
      studentName: "munna",
      roll :64,
      age : 11,
      class : "six",
      gender : "male",
      location : "uttora",
      admissionFee : 660 
   },
   {
      studentName: "mohini",
      roll :69,
      age : 11,
      class : "five",
      gender : "female",
      location : "pabna",
      admissionFee : 620
   },
   {
      studentName: "salam",
      roll :71,
      age : 29,
      class : "five",
      gender : "male",
      location : "bogura",
      admissionFee : 620
   }
]


 let total_amount= 0 ;
 console.log(`
 
 1.Total admision Fees :

 `)
 students.sort().forEach((data)=>{
    console.log(` Student-name :${data.studentName}      fees : ${data.admissionFee} Tk `)
    total_amount += +data.admissionFee
 })

 console.log(`
-------------------------------------------------------------------------------------------
   total amount :       ${total_amount }  Tk
  
   `)
  


console.log(`................................................................................................................................................................................`)

let total_famale= 0 ;
console.log(`

2.Total famele Students :

`)
students.sort().forEach((data)=>{
   if(  data.gender==="female"){
       console.log(`     Student-name: ${data.studentName}        gender: ${data.gender}`)
       total_famale = total_famale + 1;
   }
} 
)

console.log(` 
------------------------------------
      total Famale     =     ${total_famale}      
  
  `)

console.log(`................................................................................................................................................................................`)
console.log(`

3.Class wise Students List  
 
 
 `)
// Class three students list:
 let three=0;
 console.log(`Class three students list:`)
 students.map((data) =>{
    if(data.class ==="three" ){
            console.log(`Student-name : ${data.studentName}      class:  ${data.class}`)
            three+=1;
    } 
 })
 console.log(`-----------------------------------------------
total students of class Three = ${three}
 `)


// Class four students list:
 let four=0;
 console.log(`Class Four students list: `)
 students.map((data) =>{
    if(data.class ==="four" ){
            console.log(`Student-name : ${data.studentName}      class:  ${data.class}`)
            four+=1;
    }
 })
 console.log(`-----------------------------------------------
total students of class four = ${four}
 `)



//Class three students list:
 let five=0;
 console.log(`Class Five students list:`)
 students.map((data) =>{
    if(data.class ==="five" ){
            console.log(`Student-name : ${data.studentName}      class:  ${data.class}`)
            five+=1;
    }
 })
 console.log(`-----------------------------------------------
total students of class Five = ${five}
 `)


 //Class Six students list:
 let six=0;
 console.log(`Class six students list:`)
 students.map((data) =>{
    if(data.class ==="six" ){
            console.log(`SAtudent-name : ${data.studentName}      class:  ${data.class}`)
            six+=1;
    }
 })
 console.log(`-----------------------------------------------
total students of class Six = ${six}
 `)

  //Class Six students list:
  let seven=0;
  console.log(`Class seven students list:`)
  students.map((data) =>{
     if(data.class ==="seven" ){
             console.log(`SAtudent-name : ${data.studentName}      class:  ${data.class}`)
             seven+=1;
     }
  })
  console.log(`-----------------------------------------------
 total students of class Six = ${seven}
  `)
console.log(`................................................................................................................................................................................`)

console.log(`

4.Location wise Students List
     
     
`)
//     List of bogura students :
let bogura=0;
console.log(`List of Bogura Students : `)
students.map((data) =>{
   if(data.location ==="bogura" ){
           console.log(`name : ${data.studentName}       location:  ${data.location}`)
           bogura+=1;
   } 
})
console.log(`-----------------------------------------------
total students of Bogura = ${bogura}
`)



//      List of Dhaka students :
let dhaka=0;
console.log(`List of Dhaka Students : `)
students.map((data) =>{
   if(data.location ==="dhaka" ){
           console.log(`name : ${data.studentName}       location:  ${data.location}`)
           dhaka+=1;
   } 
})
console.log(`-----------------------------------------------
total students of Dhaka = ${dhaka}
`)



//      List of Pabna students :
let pabna=0;
console.log(`List of Pabna Students : `)
students.map((data) =>{
   if(data.location ==="pabna" ){
           console.log(`name : ${data.studentName}       location:  ${data.location}`)
           pabna+=1;
   } 
})
console.log(`-----------------------------------------------
total students of Pabna = ${pabna}
`)


//      List of Sylhet students :
console.log(`List of Sylhet Students : `)
let sylhet=0;
students.map((data) =>{
   if(data.location ==="sylhet" ){
           console.log(`name : ${data.studentName}       location:  ${data.location}`)
           sylhet+=1;
   } 
})
console.log(`----------------------------------------------
total students of Sylhet = ${sylhet}
`)


//      List of Rajshahi students :
let rajshahi=0;
console.log(`List of Rajshahi Students : `)
students.map((data) =>{
   if(data.location ==="rajshahi" ){
           console.log(`name : ${data.studentName}       location:  ${data.location}`)
           rajshahi+=1;
   } 
})
console.log(`-----------------------------------------------
total students of Rajshahi = ${rajshahi}
`)


//      List of Rangpur students :
let rangpur=0;
console.log(`List of rangpur Students : `)
students.map((data) =>{
   if(data.location ==="rangpur" ){
           console.log(`name : ${data.studentName}       location:  ${data.location}`)
           rangpur+=1;
   } 
})
console.log(`-----------------------------------------------
total students of Rangpur = ${rangpur} 
`)


//      List of Uttora students :
let uttora=0;
console.log(`List of Uttora Students : `)
students.map((data) =>{
  if(data.location ==="uttora" ){
          console.log(`name : ${data.studentName}      location:  ${data.location}`)
          uttora+=1;
  } 
})
console.log(`-----------------------------------------------
total students of Uttora = ${uttora} 
`)



console.log(`................................................................................................................................................................................`)

     // total students between 10 to 25 years
     console.log(`
     
     
   5.Total students between 10 to 25 years
     
     `)
     let number=0;
     students.map((data) =>{
        if(+data.age >=10 && +data.age <= 25){
                console.log(`name : ${data.studentName}      Age:  ${data.age}`)
                number+=1;
        }
     })
     console.log(`-----------------------------------------------
total students between 10 to 25 years = ${number}
     `)
