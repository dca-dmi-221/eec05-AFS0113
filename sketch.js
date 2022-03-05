console.log("Ejercicio 1");

let testWord = "esternocleidomastoideo";

function wordCutter(word) {
     word = word.split("");
    console.log(word);

    /* let random = word
        .map(item => ({item, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)
    
    console.log(random)*/

    function wordCutter(word) {
        word = word.split("");
       console.log(word);
    
       let random = word
           .map(item => ({item, sort: Math.random()}))
           .sort((a,b) => a.sort - b.sort)
           .map(({item}) => item)
       
       console.log(random)
    
    }
    
  }

wordCutter(testWord);

console.log("Ejercicio 2");


let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

function wordSearcherIgnoreCase(targetWord, wordsList) {
    let minusList = wordsList.map(element => element.toLowerCase());
    targetWord= targetWord.toLowerCase();
    targetWord= normalizeString(targetWord);
    console.log(minusList)
    console.log(minusList.some(element => targetWord.toLowerCase() === element ))
}

function normalizeString (targetWord) {
    return targetWord = targetWord.normalize ("NFD").replace(/[\u0300-\u036f]/g,"");
}
wordSearcherIgnoreCase(testTargetWordA,testWordsList);
wordSearcherIgnoreCase(testTargetWordB,testWordsList);
wordSearcherIgnoreCase(testTargetWordC,testWordsList);

console.log("Ejercicio 3");
let testSampleList = [
  "Capitan",
  "Comandante",
  "Teniente",
  "Cabo",
  "Brigadier",
  "Coronel",
  "Zar",
];

function wordLengthClassifier(wordsList) {
  let totalLetters = 0;
  wordsList.forEach(word => totalLetters += word.length);
  const averageSize = totalLetters / wordsList.length;

  const sortedWords = wordsList.sort((a, b) => {
      if(a.length < b.length) {
          return -1;
      } else if(a.length > b.length) {
          return 1;
      } else {
          return 0;
      }
  })

  return {
      averageSize,
      shortest: sortedWords[0],
      longest: sortedWords[sortedWords.length - 1],
  }
}
console.log(wordLengthClassifier(testSampleList))

console.log("Ejercicio 4");


let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(palabra) {
let poliWord = palabra.toLowerCase().split("").reverse().join("");
if (poliWord === palabra) {
    console.log("The Word" + palabra + "is ppolidrome")} 
    else {
        console.log("The Word" + word + "in not polindrome")
    }
}

console.log("Ejercicio 5");


let containerTestObject = {
  list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
}

console.log("Ejercicio 6");

let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const lists = listA.concat(listB);
    console.log(lists);
}
arrayJoiner(wordArrayA, wordArrayB);

console.log("Ejercicio 7");


let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
}

console.log("Ejercicio 8");


let testObjMultiContainer = {
  listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
  listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));







