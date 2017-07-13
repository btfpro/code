(function() {
    var header = new Headroom(document.querySelector("header"), {
        tolerance: 5,
        offset : 205,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    header.init();
	



    
}());
  
$(document).ready(function(){
if ($(this).scrollTop() > 100){
            $('.navbar').addClass('navbar-shrink');
        }
        else{
            $('.navbar').removeClass('navbar-shrink');
        }
  $(window).scroll(function(){
 
        if ($(this).scrollTop() > 100){
            $('.navbar').addClass('navbar-shrink');
        }
        else{
            $('.navbar').removeClass('navbar-shrink');
        }
    }); 
  $( '.trigger-overlay').click(function(){

    $(this).toggleClass('open').promise().done(function(){
        if(  $('.trigger-overlay').hasClass( 'open' ) ) {
			$('body').css('overflow','hidden')
            var delay = 0;
            
            $('.menu > li').each(function() {
                var $li = $(this);
                setTimeout(function() {
                  $li.addClass('start_in');
                }, delay+=100); // delay 100 ms
            });
        }
        else{
			
			$('body').css('overflow','visible')
            $('.menu > li').removeClass('start_in');
            $(".list-link").removeClass('active');
			
           
        } 
    });
       $('div.overlay').toggleClass('open'); 
    });
	
	 if (Modernizr.touch) {
            // show the close overlay button
            $(".close-overlay").removeClass("hidden");
            // handle the adding of hover class when clicked
            $(".img").click(function(e){
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            // handle the closing of the overlay
            $(".close-overlay").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".img").hasClass("hover")) {
                    $(this).closest(".img").removeClass("hover");
                }
            });
        } else {
            // handle the mouseenter functionality
            $(".service-item ").mouseenter(function(){
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
        }	
		
		
		
		$('.nav-head').click(function(){
			
				
				if($(this).hasClass('expand')==true){
				$(this).removeClass('expand');
				$(this).next().slideUp();
			}else{
			$('ul.menu').slideUp();
			$('.nav-head').removeClass('expand');
			$(this).toggleClass('expand');
			$(this).next().slideToggle();
			}
			
		})
		
		
		
		$('a[href*=#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.totop').addClass('visible');
    } else {
      $('.totop').removeClass('visible');
    }
  });

});
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });