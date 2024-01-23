let featureIndex = 0;
showFeatures();

function showFeatures() {
    let i,
    features = document.getElementsByClassName("feature");
    
    for (i = 0; i < features.length; i++) {
        features[i].style.display = "none";
    }

    featureIndex++;

    if (featureIndex > features.length) {
        featureIndex = 1;
    }

    features[featureIndex-1].style.display = "block";
    setTimeout(showFeatures, 5000);
}

let d = new Date();
let year = d.getFullYear();

footYear = document.querySelector(".current-year");
footYear.innerHTML = year;

// Scroll-to-top function
let topButton = document.querySelector(".top-btn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20 ) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}