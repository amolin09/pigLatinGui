const pigLatin = (word) => {
  word = word.toLowerCase().trim()
  let firstLetter = word[0]
  let vowels = ['a', 'e', 'i', 'o', 'u']
  // let newArr = word.split('')
  if(vowels.includes(firstLetter)){
    return word + "yay"
  }
  else{
    let consonantLength = 0
    for(let index = 0; index < word.length; index ++){
      if(!vowels.includes(word[index])){
        consonantLength++
      }
     else{
        break
      }

    }
    
    let consonantString = word.substr(0, consonantLength)
    let cutWord = word.slice(consonantLength)
    let finalAnswer = cutWord + consonantString + "ay"
    return finalAnswer
  }

}

let userInput = " "
const displayP = document.getElementById('output') 

function updateWord(input){
  userInput = input.value
}

const convertToPigLatin = () => {
  const convertedWord = pigLatin(userInput)
  displayP.innerText = "Your pig lating translation: " + convertedWord
  document.getElementById("pig-Latin-Form").reset()
}