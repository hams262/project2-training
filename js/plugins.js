$(document).ready(function(){
  $(".carousel").carousel({
      interval:6000
  });
  $(".gear-check").click(function()
  {
    $(".color-option").fadeToggle();
  });

  //change theme color
  var colorLi=$(".color-option ul li");

      colorLi
  .eq(0).css("backgroundColor","#ec1b5e").end()
  .eq(1).css("backgroundColor","#e426d5").end()
  .eq(2).css("backgroundColor","#009aff").end()
  .eq(3).css("backgroundColor","#3c763d");
  colorLi.click(function()
  {
      $("link[href*='theme']").attr("href",$(this).attr("data-value"));
  });

  var scrollButton=$("#scroll-top");

  $(window).scroll(function()
  {

    if($(this).scrollTop()>=700)
    {
      scrollButton.show();
    }
    else
    {
      scrollButton.hide();
    }
    });

    scrollButton.click(function(){
      $("html,body").animate({scrollTop:0},600);    
  });
});
