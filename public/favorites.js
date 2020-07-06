$(function() {

    // Add background color to nav when user scrolls more than 50px down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#main-navbar').addClass('shadow-sm');
        }
        if ($(this).scrollTop() < 50) {
            $('#main-navbar').removeClass('shadow-sm');
        }
    });

    $('#menu-loader').fadeOut();
    $('.menu-grid-container').fadeIn();

    // Fetch and print all favorite-items
    $.getJSON('assets/data/favorite.json', function(data) {

        // Fetch favorite
        $.each(data.favoritePizza, function(key, value) {
            $('.favorite-grid').append('<div class="col-12 col-md-6 col-lg-4 col-xl-3 px-2"><div class="card menu-card my-2 shadow-none"><img class="card-img-top" src="images/menu/pizza/'+ value.photo +'" alt="'+ value.product +' Pizza"><div class="card-body"><h5 class="card-title text-left font-weight-bold">'+ value.product +' </h5><p class="card-text text-left">' +"<i class=\"material-icons\">format_quote</i>" + value.comment +'</p><p class="text-success text-left"><em>'+' Reviewed by</em><span class="chip"><img alt="Customer Image" class="chip-img" src="images/customers/'+ value.img +'" alt=""/>'+ value.name +' </span></p></div>');
        });


        $.each(data.favoriteDessert, function(key, value) {
            $('.favorite-grid').append('<div class="col-12 col-md-6 col-lg-4 col-xl-3 px-2"><div class="card menu-card my-2 shadow-none"><img class="card-img-top" src="images/menu/desserts/'+ value.photo +'" alt="'+ value.product +' Pizza"><div class="card-body"><h5 class="card-title text-left font-weight-bold">'+ value.product +' </h5><p class="card-text text-left">' +"<i class=\"material-icons\">format_quote</i>" + value.comment +'</p><p class="text-success text-left"><em>'+' Reviewed by</em><span class="chip"><img alt="Customer Image" class="chip-img" src="images/customers/'+ value.img +'" alt=""/>'+ value.name +' </span></p></div>');
        });


    });

});
