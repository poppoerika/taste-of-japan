$(function() {
	$('.menu-lines').click(function() {
		$('header ul').css({"width": "150px", "list-style-type": "none"});
		$('header li a ').css({"display": "block", "padding": "8px 16px", "text-decoration": "none"});
	});
    $('.skillset').fadeIn(1000);
    $('.recipes').hide()
    $('.recipes-button').on('click', function(){
        $(this).next().slideToggle(400);
        $(this).toggleClass('active');
        $(this).text("Recipe Viewed");
    });

    $('#search').click(function () {
	    var displayResults = $("#search-results");
	    var searchTitle = $("#search-result-title");
	    var recipeName = $("#recipe-name").val();
	    var apiKey = "5pZKHFy1a9LEMdB96Za2bYn7O5eI3OOi";
	    var recipeUrl = "http://api2.bigoven.com/Recipes?pg=1&rpp=25&title_kw=" + recipeName + "&api_key="+apiKey;
	    searchTitle.text('Searching recipes for ' + recipeName + '...');
	    $.ajax({
	      type: "GET",
	      dataType: 'json',
	      cache: false,
	      url: recipeUrl,
	      success: function(results)
	      {
	      	console.log(results);
	        var output="<table><thead><tr><th>Recipe Name</th><th>Recipe Image</th><th>Recipe URL</th></thead><tbody>";
	        for (var i = 0; i < 10; i++) {
	        	output+="<tr><td>" + results.Results[i].Title + "</td><td><img class='recipe-image' src='" + results.Results[i].PhotoUrl + "'></td><td><a target='_blank' href='" + results.Results[i].WebURL + "'>" + results.Results[i].WebURL + "</a>" + "</td></tr>";
	        }
	        output+= "</tbody></table>";
	        searchTitle.text('');
	        displayResults.html(output);
	        $(".recipe-image").css({"height": "100px", "width": "100px"})
	        $("table").addClass("table");
	       }
	    });
    });

    $('#send-btn').click(function() {
    		$('#contact-form').html("<h1 class='text-center col-md-12'>Thank you for the message!</h1><div class='row'><div class='col-md-12 text-center'><a id='main-page' href='http://nova.umuc.edu/~ct488a04/finalProject/index.html'>Back to main page</a></div></div>");

    });
});