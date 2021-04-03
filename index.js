var count = 0;
var numclick = 0;
$(".blue").on("click", function() {
    $(this).removeClass("blue");
    $(this).addClass("red");
    numclick+=1;
});
$(".blue").on("click",function()
    {
        count+=1;
        if(count>2)
        {
            $(".red").removeClass("red").addClass("blue");
        }
    });
   