// $.ajax({
//     url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnvBWJ8iJWrrRpRk_d2VkuZJPGzybgjN4&callback=initMap",
//     success: function(result){
//     	console.log(result)
//     }
// });


function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 38.8977, lng: -77.0365},
	zoom: 15
	});
};
