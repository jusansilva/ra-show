AFRAME.registerComponent('markerhandler', {

    init: function () {
        const animatedMarker = document.getElementById("globo");

        // toda vez que clicar redireciona para uma ação)
        animatedMarker.addEventListener('click', function () {
            //window.location.href = "https://linkedin.com/in/jusanmagno/"; 
            window.open('https://linkedin.com/in/jusanmagno/', '_blank');
        });
    }
});