AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.getElementById("globo");
         
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(){
            window.location.href = "https://linkedin.com/in/jusanmagno/"; 
        },false);
}});
