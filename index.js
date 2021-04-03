var count = 0,secondLast = count-2;
var numclick = 0;
$(".blue").on("click", function() {
    
   
    numclick+=1;
    count+=1;
        $(this).removeClass("blue");
        console.log("w"+count);
        $(this).addClass("red w"+count);
        if(count>2)
        {
            
            $(".w"+count-2).removeClass("red").removeClass("w1").addClass("blue");
        }
    
});

   