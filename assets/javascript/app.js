$(document).ready(function(){ 

    var movies = ["Step Brothers", "The 40 Year Old Virgin", "Napoleon Dynamite"];
    GIFArea = " ";  
    
    //function to add movie buttons
    function renderButtons() {                        
      $("#movies-view").empty(); 
      for (var i = 0; i < movies.length; i++) {  
      var alpha = $("<button>");  
      alpha.addClass("movie");  
      alpha.attr("data-name", movies[i]);  
      alpha.text(movies[i]);  
      $("#movies-view").append(alpha);
      }  
      //end for 
      $("#movie-input").focus();  
    }  
    //end function render buttons


    renderButtons();  

    //function to add buttons for textbox submits
    $("#add-movie").on("click", function(event) {   
      event.preventDefault();                       
      var movie = $("#movie-input").val().trim();
       //to disable the submit button if no text in textbox
      if(movie != ""){                             
      movies.push(movie);        
      renderButtons(); 
      } //end if
  });  //end add movie

  $(document).on("click", "button",  function() {    //function to add the gifs to page
    $("#GIFArea").empty(); 
    var bravo = $(this).attr("data-name");		
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  //giphy api and key
    bravo + "&limit=10&api_key=0FnbNPcG1Lzj9psz13MK4jRCLnbib1m3"; 
 
           
    $.ajax ({                                        //ajax to get gifs
    url: queryURL,
    method: "GET"
    })  //end ajax

    //function to make the gifs still until clicked on 
    .done(function(response) { 
      var results = response.data;                       
          for (var i = 0; i < results.length; i++) {           
            var gifDiv = $("<div class='item'>");           
            var rating = results[i].rating;             
            var otherRating = $("<p>").text("Rating: " + rating);         
            var gifImage = $("<img>");          
            gifImage.attr("src", results[i].images.fixed_height_still.url)
            .attr("data-still", results[i].images.fixed_height_still.url)
            .attr("data-animate", results[i].images.fixed_height.url)
            .attr("data-state", "still")
            .addClass("showImage");          
            gifDiv.append(otherRating)
            .append(gifImage);       	  
            $("#GIFArea").prepend(gifDiv);
          }  //end for
        });  //end function response
      });  //end on click buttons
      

      //function to animate the gifs when clicked on
      $(document).on("click", ".showImage",  function() {   
        var state = $(this).data("state");      
        if (state == "still") {               
          $(this).attr("src", $(this).data("animate"))
          .data("state", "animate");
        } //end if
        else {              
          $(this).attr("src", $(this).data("still"))
          .data("state", "still");               
        }  //end else
      });  //end shwo image function
    });  //end ready function

