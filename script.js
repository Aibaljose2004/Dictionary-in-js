
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("head");
const sound = document.getElementById("sound");
const btn = document.getElementById("btn");
var x = document.getElementById("sound"); 
var img =document.getElementById("img");

btn.addEventListener("click", () => {
    document.getElementById("sec").classList.add("active");
    document.getElementById("head").classList.add("display");

    let inpWord = document.getElementById("input").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            var def = data[0].meanings[0].definitions[0].definition;
            var meaning = data[0].meanings[0].partOfSpeech;
            var pho = data[0].phonetic;
            document.getElementById("t").innerHTML=inpWord;
            document.getElementById("p").innerHTML=def;
            document.getElementById("d").innerHTML=meaning;
            document.getElementById("phono").innerHTML=pho;
            

            console.log(inpWord);
            console.log(data[0].phonetics[0].audio)
            var q =data[0].phonetics[0].audio;
            img.setAttribute("src","spe.png");
            sound.setAttribute("src", q);
            
            
        

        })

      
    

   
});

function playAudio() { 
    sound.play();
}