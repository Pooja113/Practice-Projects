let randomNumber = Math.random()
let firstname, secondname, lastname;
if(randomNumber < 0.33) {
  firstname="penguine"
  
} else if(randomNumber > 0.33 && randomNumber < 0.66) {
  firstname="loris"

}else {
  firstname="shark"

}
 randomNumber = Math.random()


if(randomNumber < 0.33) {
  secondname="learn"
  
} else if(randomNumber > 0.33 && randomNumber < 0.66) {
  secondname="mountain"

}else {
  secondname="happy"

}

randomNumber = Math.random()

if(randomNumber < 0.33) {
  thirdname="shop"
  
} else if(randomNumber > 0.33 && randomNumber < 0.66) {
  thirdname="store"

}else {
  thirdname="brand"

}

console.log(`${firstname} ${secondname} ${thirdname}`)