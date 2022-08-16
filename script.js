let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

for(let data of object){
    console.log (data)
   }
   
   object.forEach(function(item){
    console.log (item)
  });

  
 for(let key in object){
    console.log(`
person: ${object[key].person}
age   : ${object[key].age}   
company: ${object[key].company} 
    
    `)
 }

 for(let i=0;object.length;i++){
    console.log(`
    
    Person : ${object[i].person}
    Age    : ${object[i].age}
    Company: ${object[i].company}
   
    `)
 }





