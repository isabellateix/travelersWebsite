function initMap() {
  const isabellas = [
    {lat: -22.342, lng: 170.032}, 
    {lat: -21.341, lng: 190.032}, 
    {lat: -22.352, lng: 110.032},  
    {lat: -20.325, lng: 151.032},
    {lat: -21.325, lng: 150.032}
  ];

  $(document).ready(function(){
  	$('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
    	fullWidth: true
    });

    $('#id-isabella').click(function(){
      console.log(isabellas);
      isabellas.map(function(isabella){
        const marker  = new google.maps.Marker({position: isabella, map: map});
      });
      // const marker  = new google.maps.Marker({position: isabellas[0], map: map});
      // const marker1 = new google.maps.Marker({position: isabellas[1], map: map});
      // const marker2 = new google.maps.Marker({position: isabellas[2], map: map});
      // const marker3 = new google.maps.Marker({position: isabellas[3], map: map});
    });
  });
  
  const centroMundo = {lat: 8.649249, lng: -26.086845}
  // The location of Uluru
  // The map, centered at Uluru
  const map = new google.maps.Map(
     document.getElementById('map'), {zoom: 2, center: centroMundo}
  );

}	

