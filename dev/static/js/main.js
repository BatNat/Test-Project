
// Начинать писать отсюда!!!!
$(document).ready(function(){
	$('.bxslider').bxSlider({
   pager: true,
   captions: true,
   nextText: '',
   prevText: '',
   useCSS: true,
   easing: 'jswing',
   speed: 500
   });
	
	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});
//   
  $(".accordion-title:first").addClass("active");
	$(".accordion-body:not(:first)").hide();

	$(".accordion-title").click(function(){
		$(this).next(".accordion-body").slideToggle("slow")
		.siblings(".accordion-body:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings(".accordion-title").removeClass("active");
	});
$('input:checkbox:checked').each(function(){
alert($(this).val());
});
// $('.checkbox').click(function(){
//   var total = 0;
//   $('.checkbox:checked').each(function(){
    
//     total += parseInt($(this).val());
  
//   });
//   $("#total-price").text(total); 
//   alert(total);
//  });
$('.button__add').on('click', addItem);
 $('.deleteItem').on('click', removeItem);
                       
function addItem(){
    var newTodoText = $('#ListItem').val();
    if(!newTodoText){
      alert('Введите задачу');
      return false;
}
    $('#list').append('<li class="item">'+ newTodoText + '<span><i class="fa fa-pencil" aria-hidden="true"></i></span><span><i class="fa fa-times" id="deleteItem" aria-hidden="true"></i></span></li>');
    $('#ListItem').val("");
  }
    
function removeItem(){
   $('.item').click(function(){
     $(this).parent('.deleteItem').remove();
     alert('jdksj');
   }); 
 }   
 



 

  
  
});