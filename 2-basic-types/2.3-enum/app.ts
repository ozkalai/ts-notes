// enum has a custom type 

enum Role { ADMIN , READ_ONLY , AUTHOR } 
// you can also assign custom number or string for roles like this 
// ->  enum Role { ADMIN = 5 , READ_ONLY = 100  , AUTHOR = "AUTHOR"} 

 const personEnum = {
     name: "Melih",
     age: 25,
     hobbies: ["Sports", "Cooking"],
     role: Role.ADMIN
 }

 console.log(personEnum.role);

 if(personEnum.role === 0) {
     console.log("hello admin");
     
 }


 