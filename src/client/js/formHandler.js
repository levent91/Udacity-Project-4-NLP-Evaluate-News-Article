import axios from 'axios'; //axios for post requests
const validUrl = require('valid-url');  //valid-url to check url

function handleSubmit(event) {
    event.preventDefault()
    var inputText = document.getElementById('name').value;
    if (validUrl.isUri(inputText)){
        axios.post('http://localhost:9000/note', {articleUrl: inputText}, {timeout:0})
        .then(function(res) {
            console.log(res);
            const data = res.data;
            document.getElementById('polarity').innerText = "POLARITY: "+ data.polarity.toUpperCase();
            document.getElementById('polarity_confidence').innerText = "P CONFIDENCE: %"+ data.polarity_confidence.toFixed(2)*100;
            document.getElementById('subjectivity').innerText = "SUBJECTIVITY: "+ data.subjectivity.toUpperCase();
            document.getElementById('subjectivity_confidence').innerText = "S CONFIDENCE: %"+ data.subjectivity_confidence.toFixed(2)*100;
            document.getElementById('excerpt').innerText = data.text;
        })
    } else {
        alert("Invalid URL. Please enter a valid URL") ;
        document.getElementById('name').value = ""
    }; 
};

export { handleSubmit }
