let index = 0;

while (index < 10) {
    console.log ("Index é menor do que 10!");
    index++;
}

const person = {
    name: "Jane",
    age: 21,
}

for (property in person){
    console.log(person[property]);
}