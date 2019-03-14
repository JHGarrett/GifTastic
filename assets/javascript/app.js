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





});