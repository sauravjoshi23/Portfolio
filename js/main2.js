$(".downloadButton").click(function(){
 var href = $('.downloadLink').attr('C:\Users\yogen\Desktop\fsdl_python\portfolio_website\PDF.pdf');
 window.location.href = href;
});

$(document).ready(function(){
  $("button").click(function(){
    $("#html_skill").fadeIn();
    $("#react_skill").fadeIn("slow");
    $("#ml_skill").fadeIn(3000);
    $("#java_skill").fadeIn(6000);
  });
});

$("#html_plus2").click(function(){
    if(Number($("#html_skill").text().replace("%","")) < 100){
        var $element = $("#html_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current + 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("plus"); 
        console.log(current);
        $element.html((Number($("#html_skill").text().replace("%","")) + 2).toString() + "%"); 
        console.log("plus");
    }
});

$("#html_minus2").click(function(){
    if(Number($("#html_skill").text().replace("%","")) > 0){
        var $element = $("#html_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current - 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("minus"); 
        console.log(current);
        $element.html((Number($("#html_skill").text().replace("%","")) - 2).toString() + "%");
        console.log("minus");
    }
});

$("#react_plus2").click(function(){
    if(Number($("#react_skill").text().replace("%","")) < 100){
        var $element = $("#react_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current + 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("plus"); 
        console.log(current);
        $element.html((Number($("#react_skill").text().replace("%","")) + 2).toString() + "%"); 
        console.log("plus");
    }
});

$("#react_minus2").click(function(){
    if(Number($("#react_skill").text().replace("%","")) > 0){
        var $element = $("#react_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current - 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("minus"); 
        console.log(current);
        $element.html((Number($("#react_skill").text().replace("%","")) - 2).toString() + "%");
        console.log("minus");
    }
});

$("#ml_plus2").click(function(){
    if(Number($("#ml_skill").text().replace("%","")) < 100){
        var $element = $("#ml_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current + 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("plus"); 
        console.log(current);
        $element.html((Number($("#ml_skill").text().replace("%","")) + 2).toString() + "%"); 
        console.log("plus");
    }
});

$("#ml_minus2").click(function(){
    if(Number($("#ml_skill").text().replace("%","")) > 0){
        var $element = $("#ml_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current - 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("minus"); 
        console.log(current);
        $element.html((Number($("#ml_skill").text().replace("%","")) - 2).toString() + "%");
        console.log("minus");
    }
});

$("#java_plus2").click(function(){
    if(Number($("#java_skill").text().replace("%","")) < 100){
        var $element = $("#java_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current + 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("plus"); 
        console.log(current);
        $element.html((Number($("#java_skill").text().replace("%","")) + 2).toString() + "%"); 
        console.log("plus");
    }
});

$("#java_minus2").click(function(){
    if(Number($("#java_skill").text().replace("%","")) > 0){
        var $element = $("#java_skill");
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        current = Number(current)
        updated = current - 2;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); 
        console.log("minus"); 
        console.log(current);
        $element.html((Number($("#java_skill").text().replace("%","")) - 2).toString() + "%");
        console.log("minus");
    }
});
