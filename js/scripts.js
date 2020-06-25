$(document).ready(function(){
   $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }else{
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    $("#login").click(function(){
    // $("#login").attr('data-toggle','modal');
    // $("#login").attr('data-target','#loginModal');
    $('#loginModal').modal('toggle')
    $('#loginModal').modal('show')
    });
    $("#reserveButton").click(function(){
    // $("#reserveButton").attr('data-toggle','modal');
        //$("#reserveButton").attr('data-target','#reservation');
        $('#reservation').modal('toggle')
    $('#reservation').modal('show')

    });
});
