import axios from "axios";
function getgif(term){
    var res=axios.get("https://api.giphy.com/v1/gifs/translate?api_key=d8arQdw9M5Q210MyY3vOf6phKE9WSrrU&s="+`${term}`).then(function (response) {
    console.log(res['data']['images']['original']);
    return res['data']['images']['original'];
      })
        
     }
