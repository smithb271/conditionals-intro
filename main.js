if(1+1 >= 5){
 console.log("True fact!");
} else {
    console.log("Lies!")
}

if(4+5 <= 20){
    console.log("True fact!");
} else {
    console.log("Lies!")
}

if(6-2 >= 0){
    console.log("True fact!");
} else {
    console.log("Lies!")
}

var likesDogs = true; 
if (likesDogs === true){
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!")
}

let greetings = ["Hi!", "Hola", "Bonjour"]
let personObject ={
    firstName: "Brianna", 
    language: "English",
}
console.log(`${greetings[0]} ${personObject.firstName}`)
let personObject1 ={
    firstName: "Haleigh",
    language: "Spanish",
}
console.log(`${greetings[1]} ${personObject1.firstName}`)
let personObject2 = {
    firstName: "Maria",
    language: "French",
}
console.log(`${greetings[2]} ${personObject2.firstName}`)

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 72]
for(let i = 0; i < grades.length; i++){
    if(grades[i] <= 69){
        console.log("You got a F!")
    
    } else if(grades[i] >= 70 && grades[i] <= 76){
    console.log("You got a D!")
    }

else if(grades[i] >= 77 && grades[i] <= 84){
    console.log("You got a C!")
    }
else if(grades[i] >= 85 && grades[i] <= 93){
    console.log("You got a B!")
}
else if(grades[i] >= 94 && grades[i] <= 100){
    console.log("You got an A!")
}
}