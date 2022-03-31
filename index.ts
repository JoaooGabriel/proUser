const list = [
  "Anakin Skywalker",
  "Obiwan Kenobi",
  "Dart Vader",
  "Mandalorian"
]

list.forEach((name: string) => {
  const splittedName = name.toLowerCase().split('')
  let biggestNumberRepeatedLetter = ''
  let aux = 0
  
  splittedName.forEach((l) => {
    const letter = new RegExp(l, 'g')
    const numberLatter = name.match(letter)?.length ?? 0 
    
    if (numberLatter > aux) {
      biggestNumberRepeatedLetter = l
      aux = numberLatter
    }
  })

  console.log("letra", biggestNumberRepeatedLetter, "número de aparições", aux)
})