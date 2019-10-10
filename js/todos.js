//check off specific 2dos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete 2dos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//create a new <li> based on the input text
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var tudu = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + tudu + "</li>");
  }
});

$(".fa-plus-circle").click(function(){
  $("input[type='text']").fadeToggle()
})
