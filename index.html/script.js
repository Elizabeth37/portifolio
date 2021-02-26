$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function)
});

/*window.onscroll = function() { myfunction(){;
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= stiky) {
        navbar.classList.add("sticky")
    
    }else{
        navbar.classList.remove("sticky");
    }
}*/