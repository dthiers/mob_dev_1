function init(){
  alert();
  // Button
  $("#button").on("click", function(){
    alert("Test");
  });

  $("ul.swipelist").on("swiperight", "li", function(event) {
    $(event.target).addClass("swiped");
    //console.log(event);
  });
  $("ul.swipelist").on("swipeleft", "li", function(event) {
    $(event.target).removeClass("swiped");
    //console.log(event);
  });

  /*$("ul.swipelist").on("swipe", "li", {
    swiperight:function(event){
      $(event.target).addClass("swiped");
    },
    swipeleft:function(event){
      $(event.target).removeClass("swiped");
    }
  })*/


}
