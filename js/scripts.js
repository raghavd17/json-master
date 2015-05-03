$(document).ready(function() {
	$.getJSON( "json/user.json", function( data ) {
	  //optional stuff to do after success
	  var foodItems = '<ul class="items">';

		for(var i = 0; i < data.user.length; i++ ) {
			
			var itemId = data.user[i].id;
			var itemName = data.user[i].name;
			var itemPlace = data.user[i].place;
			var itemUserProfile = data.user[i].user_image;
			var itemFoodImg = data.user[i].food_image;
			var itemDesc = data.user[i].description;


			foodItems += '<li><div class="food_item" id="food_item_'+itemId+'"><div class="image" id="'+itemId+'"><ul class="user_review"><li> 101 Likes</li> <li> 50 Discuss</li></ul>'
					+'<img src=" '+itemFoodImg+' " alt=" '+ itemName +' " /> </div>'
					+'<div class="author clearfix"> <img src=" '+itemUserProfile+' " alt="profile" class="profile" />'
					+'<h1 class="title"> '+itemName+' <cite> '+itemPlace +' </cite></h1></div>' 
					+'<div class="description"><p>'+itemDesc+'</p></div></div></li>';			

			// console.log("Id: " + itemId + "\n Name: " + itemName + "\n Place:" +itemPlace + "\n User Profile" +itemUserProfile+ "\n Food Img" + itemFoodImg + "\n Item description" + itemDesc);
			// console.log (foodItems);
		}
		foodItems+='</ul>';
		$('#main_container').html(foodItems);
		$('#main_container').append('<div class="product_info"></div>');


		$('div.image').on('click',  function(event) {
			var itemId = $(this).attr("id");
				itemId = "food_item_"+itemId;
			var positionLft = $('.product_info').width();

			$('.product_info').html('<div class="arrow_close"><img src="img/arrow_close.png" alt="Close"></div>'); 
			$('#'+itemId).clone().appendTo('.product_info');

			$('.product_info').append('<form  method="get" accept-charset="utf-8">'
							+'<input type="text" name="" value="" placeholder="Name">'
							+'<input type="email" name="" value="" placeholder="Email Address">'
							+'<textarea name="" placeholder="Comments"></textarea>'
							+'<input type="button" name="" value="Submit" class="btn btn-primary">'
							+' <input type="Reset" name="" value="Cancel" class="btn btn-inverse"></form>');
				
			
			$('ul.items').css('left', - (positionLft + 20));
			// alert('width' + positionLft);
			$('.product_info').css('right','0');
			

			$('.arrow_close').on('click',  function(event) {
				$('ul.items').removeAttr('style');
				// alert('width' + positionLft);
				$('.product_info').removeAttr('style');
				/* Act on the event */
			});
			/* Act on the event */

		});


	




	});


	
	// alert('hello');
	
	
});