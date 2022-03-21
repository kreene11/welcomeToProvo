document.getElementById("dogPicSubmit").addEventListener("click", function(event) {
  event.preventDefault();

  const url = "https://random.dog/woof.json"
  fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);

      let results = "";
      results += "<h2>Please enjoy this picture of a dog :)</h2>";

      let imgUrl = json.url;
      let imgEnd = imgUrl.substring(imgUrl.length - 4, imgUrl.length);
      if ( imgEnd == ".mp4") {
        // imgUrl = url("photos/doggie.jpg");
        results += "<img src=" + "photos/doggie.jpg" + ">"; 
      } else {
        results += '<img src="' + json.url + '"/>';
      }

      document.getElementById("dogPicResults").innerHTML = results;
    })
});