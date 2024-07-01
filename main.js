document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("mySlides");

    function plusSlides(n) {
        showSlides(slideIndex += n);
        restartAutoSlideInterval(); 
    }

    function showSlides(n) {
        var i;
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    function restartAutoSlideInterval() {
        clearInterval(autoSlideInterval); 
        autoSlideInterval = setInterval(function() {
            plusSlides(1);
        }, 3000); 
    }

   
    showSlides(slideIndex);

    
    var autoSlideInterval = setInterval(function() {
        plusSlides(1);
    }, 3000); 

    
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev-arrow");
    const nextButton = document.querySelector(".next-arrow");
    const cardContainer = document.querySelector(".card-container");

    
    prevButton.addEventListener("click", function() {
        cardContainer.scrollBy({
            left: -310, 
            behavior: "smooth"
        });
    });

    
    nextButton.addEventListener("click", function() {
        cardContainer.scrollBy({
            left: 310, 
            behavior: "smooth"
        });
    });
});






    document.addEventListener('DOMContentLoaded', function () {
        var horarioToggle = document.getElementById('horario-toggle');
        var horarioPanel = document.getElementById('horario-panel');

        horarioToggle.addEventListener('click', function () {
            horarioPanel.classList.toggle('visible');
        });
    });

