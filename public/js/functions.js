$(document).ready(function(){
    $('.navbar-brand').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated fadeInDown');
    });

    //Elements which we want to animate
    $('h1.first').animated('fadeInUp', 'fadeOutDown');
    $('img.image').animated('flipInY', 'fadeOutDown');

    $('.logout').on('click', function(){
        $.ajax({
            type: "POST",
            url: "/logout",
            success: function(html) {
                console.log('name changed');
            }
        });
    });

});