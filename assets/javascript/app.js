var animals = ["bull", "horse", "goat", "whale", "eagle", "owl", "crow"];
var animalButton;
var imagePosition = $(".imagesPosition");
var api = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=Ct1CFr2hbY4IsMKjjdrzj7VVPaDjuFWv";
var query = "";
var url = "";
var urlList = [];
var urlStaticList = [];
var urlStatic = "";
var imges = "";
limit = "&limit=10";

$(function () {



    animalButton = (array) => {
        array.forEach(element => {
            button = $("<button class='btn btn-primary animalButtonClass'" + "id=" + element + ">" + element + "</button>");
            $('#buttonsPosition').append(button);
        });
    }
    animalButton(animals);
    

    $(".animalButtonClass").on('click', function () { 
        time();  
        urlList = []; 
        urlStaticList = [];  
        url = "";
        urlStatic = ""; 
        query = $(this).attr('id');
        $(".imagesPosition").empty();
            $.ajax({
            url:  api + query  +   apiKey  +  limit,
            method: "GET"
        }).then(function (response) {
            console.log(response.data);
            response.data.forEach(function(element,index){
               // console.log(index);
              url = element.images.fixed_height.url;
              urlList.push(element.images.fixed_height.url);
              urlStatic = element.images.fixed_height_still.url;
              urlStaticList.push(element.images.fixed_height_still.url);
             console.log(url);
             console.log(urlStatic);
             imges = $("<img src=" + urlStatic + " id='"+index + "'" + ">");
             $(".imagesPosition").append(imges);
            
            })
           
           
        });
    });
    var time = () => {
        setTimeout(function(){
            $("img").on("click",function(){
                console.log($(this).attr('src'));
                console.log($(this).attr("id"));
                if($(this).attr('src') == urlStaticList[$(this).attr('id')] ){
                    console.log("entro a estatic");
                 $(this).attr('src',urlList[$(this).attr('id')]);
              }else if($(this).attr('src') == urlList[$(this).attr('id')]){
                  console.log("entro a la gif");
                 $(this).attr('src',urlStaticList[$(this).attr('id')]);
              }
            }) 
         }, 2000);
    }

   

   
});







