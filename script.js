$(document).ready(function () {

    
    $("#btn_change_mode").click(function(){
        $("body").toggleClass("darkMode")
        if ($("body").hasClass("darkMode")) {
            $(this).text("dark mode")
            $(".title").text("kat volteo")
            $(".img").attr("src","./gatoVolteo.png")
            $("body").attr("background","./gatoVolteo.png")
            $("#content").css("background","rgb(43, 47, 63)")
          } else {
            $(this).text("light mode")
            $(".title").text("kat")
            $(".img").attr("src","./gato.png")
            $("body").attr("background","./gato.png")
            $("#content").css("background","rgb(255, 255, 255)")

          }
    })
    
    
})