document.getElementById('wordcontainer').style.display = "none";


let getMeaning = async () => {
    if(document.getElementById("wordinput").value == ''){
        alert("Cannot find the meaning of empty word");
    }else{
        let word = document.getElementById("wordinput").value;
        const ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
        let response = await fetch(ApiUrl);
        let data = await response.json();
    
        console.log(data);
        console.log(data[0].phonetic);
        // console.log(data[0].meanings[0]);
        console.log(data[0].word);
        console.log(data[0].meanings[0].partOfSpeech);
        console.log(data[0].meanings[0].definitions[0].definition);
        console.log(data[0].meanings[0].definitions[0].example);
    
        document.getElementById("word").innerText = data[0].word;
        document.getElementById("partofspeech").innerText = data[0].meanings[0].partOfSpeech;
        document.getElementById("phonetic").innerText = data[0].phonetic;
        document.getElementById("meaning").innerText = data[0].meanings[0].definitions[0].definition;
        // document.getElementById("example").innerText = data[0].meanings[0].definitions[0].example;
        document.getElementById("example").innerHTML = `<p id='example'>${data[0].meanings[0].definitions[0].example}</p>`;
        


    
        document.getElementById('wordcontainer').style.display = "block";

    }
}
