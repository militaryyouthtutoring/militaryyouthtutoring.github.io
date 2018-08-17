$(document).ready(function() {
    $("#aboutus").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: $("#intro").offset().top + 250
                }, 800);
        return false;
    });
});

$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slideup");
        }
    });
  });

 $(window).scroll(function() {
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slideleft");
        }
    });
  });

 $(document).ready(function() {
    $("#logo").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
                    scrollTop: 0
                }, 800);
        return false;
    });
});
