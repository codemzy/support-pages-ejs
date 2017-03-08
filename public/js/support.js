/* global $ */


$(document).ready(function() {
    
    // SEARCH
    $("#searchInput").keyup(function() {
        var searchTerm = $("#searchInput").val();
        var answers = []; // to hold matching items
        if (searchTerm.length > 0) {
            $("#faqs .col-md-4").map(function(item) {
                var reg = new RegExp(searchTerm, "i"); // perform case insensitive search
                if (reg.test($(this).text())) {
                    answers.push($(this).html()); // if matches push to answers
                }
            });
        }
        if (answers.length > 0) {
            $("#answers").html("").removeClass('hidden');
            $("#faqs").addClass('hidden');
            answers.map((answer) => {
                $("#answers").append(
                    '<div class="col-md-4">' + answer + '</div>'  
                );
            });
        } else {
            $("#answers").addClass('hidden');
            $("#faqs").removeClass('hidden');
        }
        // show an error
        if (searchTerm.length > 0 && answers.length === 0) {
            $("#input-message").html('<p class="help-block"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Sorry. Please try a different search term or keyword.</p>');
            $('.search-form').addClass('has-error');
        } else {
            $("#input-message").html('');
            $('.search-form').removeClass('has-error');
        }
    });
    
});