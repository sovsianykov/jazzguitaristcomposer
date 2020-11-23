WebFont.load({google:{families:["Droid Sans","Droid Serif","Open+Sans:700&amp;subset latin","Montserrat:400 ","Noto+sans:400"]}});
//# sourceMappingURL=script.js.map

WebFont.load({
    google: {
        families: ['Droid Sans', 'Droid Serif' , 'Open+Sans:700&amp;subset latin', 'Montserrat:400 ' , 'Noto+sans:400']
    }
});


window.addEventListener("load", function () {
    let musicBtn = document.getElementById('music');
    let xhttp = new XMLHttpRequest();
    musicBtn.onmouseup = hover;

    function hover() {


        xhttp.open('GET', 'processing.php', true);
        xhttp.addEventListener('readystatechange', function () {
            if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
                let welcome = document.getElementById('welcome');
                welcome.innerHTML = xhttp.responseText;
            }
        });
        xhttp.open("GET", "https://sovsianykov.github.io/jazzguitaristcomposer/music.html", false);
        xhttp.send();
        let welcome = document.getElementById('welcome');
        welcome.innerHTML = xhttp.responseText;
    }

});

