let person= {}
console.log(person)

person.name="ruksad"
console.log(person)

person.age=18,
console.log(person)


person.gender="male"
console.log(person)

console.log(person.gender)
console.log(person.gender)
console.log(person.gender)

delete person.gender
console.log(person)


for (const key in person){

    console.log(key,":",person[key])
}


let car={
brand:"hummer",
model:"thar",
year:1999

}
let hasColour=Object.hasOwn(car,"colour")
console.log(hasColour)
let hasModel=Object.hasOwn(car,"model")

console.log(hasModel)

const {model, brand} = car
let studentArray=["ashfaq", "ruksad"]

const [first, second] = studentArray
console.log(first, second)
console.log(model)
console.log(brand)
console.log(brand, model)


let car2={

}
Object.assign(car2,car)
console.log(car2)


car2.price=100
console.log(car2)

