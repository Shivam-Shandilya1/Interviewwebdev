var count = 0
$(".blue").on("click", function() {
    $(this).removeClass("blue");
    $(this).addClass("red");
});
$(".blue").on("click",function()
    {
        count+=1;
    });
    if(count>2)
    {
        
    }