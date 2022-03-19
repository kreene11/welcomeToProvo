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
      results += '<img src="' + json.url + '"/>';

      document.getElementById("dogPicResults").innerHTML = results;
    })
});