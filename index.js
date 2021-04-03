var count = 0;
var numclick = 0;
$(".blue").on("click", function() {
    
   
    numclick+=1;
    count+=1;
    if(count>2)
    {
        var  last =count -2;
    };
        $(this).removeClass("blue");
        console.log("w"+count);
        console.log("w"+last);
        $(this).addClass("red w"+count);
        if(count>2)
        {
            
            $(".w"+last).removeClass("red").removeClass("w"+last).addClass("blue");
        }
    
});

   