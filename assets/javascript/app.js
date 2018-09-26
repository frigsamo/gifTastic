var Api = 'Ct1CFr2hbY4IsMKjjdrzj7VVPaDjuFWv';





var apiKey = 'Ct1CFr2hbY4IsMKjjdrzj7VVPaDjuFWv';
var find = 'dogs';

$.ajax({
url: "http://api.giphy.com/v1/gifs/search?q=" + find + "&api_key=" + apiKey + "&limit=15",
method: "GET"
}).then(function(response) {
console.log(response);
});
