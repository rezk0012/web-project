function initMap() {
    const loc = { lat: 40.705598, lng: -74.013703 };

    const map = new google.maps.Map(document.querySelector(".map"), {
            zoom: 14,
            center: loc
        }

    );

    const marker = new google.maps.Marker({ position: loc, map: map }

    );
}



$("#navbar a, #navbar.btn").click(function(event) {
    if (this.hash !== "") {
        // event.preventDefault();
        const hash = this.hash;

        $("html, body").animate({
                scrollTop: $(hash).offset().top - 65
            },
            100
        );
    }
});


$(window).scroll(function() {
    if (window.scrollY > 150) {
        $("#navbar").css('opacity', '0.8');

    } else {
        $("#navbar").css('opacity', '1');

    }
})

// window.addEventListener('scroll', function() {
//     if (window.scrollY > 150) {
//         document.querySelector('#navbar').style.opacity = 0.8;
//     } else {
//         document.querySelector('#navbar').style.opacity = 1;
//     }
// })