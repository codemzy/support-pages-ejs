/* global $ */


$(document).ready(function() {
    
    // SEARCH
    $("#searchInput").keyup(function() {
        var searchTerm = $("#searchInput").val();
        var answers = [];
        if (searchTerm.length > 0) {
            $('#faqs div:contains("' + searchTerm + '")').closest('.col-md-4').each(function() {
                answers.push($(this).html());
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
            $("#input-message").addClass('has-error').html('<p class="help-block"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Sorry. Please try a different search term or keyword.</p>');
        } else {
            $("#input-message").removeClass('has-error').html('');
        }
    });
    
});