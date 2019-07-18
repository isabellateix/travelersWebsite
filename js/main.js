function initMap() {
  const isabellas = [
    {lat: 53.320405, lng: -7.71496}, 
    {lat: 31.956109, lng: -6.368833}, 
    {lat: 19.440489, lng: -99.125706},  
  ];

  const marilias = [
    {lat: -16.816867, lng: -64.335284}, 
    {lat: 40.713569, lng: -74.023582}, 
  ];

  const victors = [   
    {lat: -22.909079, lng: -43.162836}, 
    {lat: -42.738835, lng: 172.074744}, 
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

    $('#id-marilia').click(function(){
      console.log(marilias);
      marilias.map(function(marilia){
        const marker  = new google.maps.Marker({position: marilia, map: map});
      });
    });

    $('#id-victor').click(function(){
      console.log(victors);
      victors.map(function(victor){
        const marker  = new google.maps.Marker({position: victor, map: map});
      });
    });
  });
  
  
  const centroMundo = {lat: 8.649249, lng: -26.086845}
  // The location of Uluru
  // The map, centered at Uluru
  const map = new google.maps.Map(
     document.getElementById('map'), {zoom: 2, center: centroMundo}
  );

}	

