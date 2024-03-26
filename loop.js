const animals = [
    { name: "monkey", size: "medium", isAggressive: false, weight: 20},
    { name: "lion", size: "big", isAggressive: true, weight: 100},
    { name: "tiger", size: "big", isAggressive: true, weight: 200},
    { name: "hippo", size: "big", isAggressive: true, weight: 1000},
    { name: "cat", size: "small", isAggressive: false, weight: 10},
]

console.log(animals)

//옛날 반복문
// for(i=0; i<animals.length; i++){
//     console.log(animals[i])
// }

//최신 반복문
// for(let animal of animals){
//     console.log(animal)
// }

//forEach, map, reduce, filter

animals.forEach(function(animal, index){
    console.log(animal, index)
})

//map은 재정의
const mappedAnimal = animals.map(function(animal){
    return animal
})

console.log(mappedAnimal)

//filter
const filteredAnimal = animals.filter(animal => {
    return animal.weight > 200
})

console.log(filteredAnimal)

//reduce 배열의 합 / 배열의 값을 새로운 결과로 도출
const reduceAnimal = animals.reduce((arr, cur)=>{
    return arr + cur.weight
},0)

console.log(reduceAnimal)