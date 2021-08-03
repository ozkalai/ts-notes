const personTuple: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number , string]  // this marks a tuple type here
} =  {
    name: "Melih",
    age: 25,
    hobbies: ["Sports" , "Cooking"],
    role: [2 , "author "]
}

// the cases TS doesn't allow 

// personTuple.role[1] = 10  -> yelling 
// personTuple.role = [0 , "admin" , "user"] -> yelling because of the fixed lenght of array

