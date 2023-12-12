const names = ["Gabriel", "Felipe", "João", 10, false];
const joao = names[0];

names.push("Pedro");
names.unshift(20);

names.pop()
names[3] = "Gustavo";

console.log(names.indexOf("Felipe"));
const sortedNames = names.sort();