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
    // setlocalStorageAnimalList(animals);
    
   
        $(".cont").on('click','.animalButtonClass', function () { 
            console.log("estoy");
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
                
                response.data.forEach(function(element,index){
                   
                  url = element.images.fixed_height.url;
                  urlList.push(element.images.fixed_height.url);
                  urlStatic = element.images.fixed_height_still.url;
                  urlStaticList.push(element.images.fixed_height_still.url);
                
                 imges = $("<img src=" + urlStatic + " id='"+index + "'" + ">");
                 $(".imagesPosition").append(imges);
                
                })
               
               
            });
        }); 
    
    
    var time = () => {
        setTimeout(function(){
            $("img").on("click",function(){
               
                if($(this).attr('src') == urlStaticList[$(this).attr('id')] ){
                    console.log("entro a estatic");
                 $(this).attr('src',urlList[$(this).attr('id')]);
              }else if($(this).attr('src') == urlList[$(this).attr('id')]){
                  
                 $(this).attr('src',urlStaticList[$(this).attr('id')]);
              }
            }) 
         }, 1000);
    }

    $("#add-animal").on('click',function(){
        event.preventDefault();
        
      var animalAdded = $('#animal-input').val().toLowerCase();
      if(animals.indexOf(animalAdded) == -1 && $('#animal-input').val().toLowerCase() != "" ){
        animals.push(animalAdded);
        
      $('#buttonsPosition').empty();
      animalButton(animals);
      }
     
    });

    // Delete Animal

    $("#delete-animal").on('click',function(){
        event.preventDefault();
        var animalAdded = $('#animal-input').val().toLowerCase();
        var myIndex = animals.indexOf(animalAdded);
        if(myIndex != -1){
            animals.splice(myIndex, 1);
        }
        
        $('#buttonsPosition').empty();
        animalButton(animals);
    });
   
    var setlocalStorageAnimalList = (listOfAnimals) => {
        localStorage.setItem('animalList', JSON.stringify(listOfAnimals));
    }

    var getLocalStorageAnimalList = () => {
        var storedList = localStorage.getItem('animalList');
        if(animalList == null){
            storedList = [];
        }else{
            storedList = JSON.parse(animalList);
        }
    }
   
});







