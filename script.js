$(document).ready(function () {

    
    $("#btn_change_mode").click(function(){
        $("body").toggleClass("darkMode")
        if ($("body").hasClass("darkMode")) {
            $(this).text("dark mode")
            $(".title").text("kat volteo")
            $(".img").attr("src","./gatoVolteo.png")
            $("body").attr("background","./gatoVolteo.png")
          } else {
            $(this).text("light mode")
            $(".title").text("kat")
            $(".img").attr("src","./gato.png")
            $("body").attr("background","./gato.png")
          }
    })
    
    
})