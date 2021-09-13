let btn2 = document.querySelector('button#btn-2');


    btn2.addEventListener("click", function (event) {
    event.target.textContent = "Ew";
    })

document.querySelector('#nacho-btn').addEventListener("click", function changeImage() {
    var image = document.getElementById('nacho');
    if (image.src.match("https://m.media-amazon.com/images/I/51hc-naaJuL._AC_SL1059_.jpg")) {
        image.src = "https://pbs.twimg.com/profile_images/461737379116503040/CaYA3y6e.png";
    }
    else {
        image.src = "https://m.media-amazon.com/images/I/51hc-naaJuL._AC_SL1059_.jpg";
    }
});
