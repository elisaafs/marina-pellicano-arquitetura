(function() {
    var pictures = document.getElementsByClassName("picture");
    var dots = document.getElementsByClassName("dot");
    var current = 0;
    var isTransitioning;
    var timer;

    function movePictures(next) {
        dots[current].classList.remove("highlight");
        pictures[current].classList.remove("onscreen");
        pictures[current].classList.add("exit");
        isTransitioning = true;

        if (typeof next != "undefined") {
            current = next;
        } else {
            current++;
        }

        if (current >= pictures.length) {
            current = 0;
        }

        pictures[current].classList.add("onscreen");
        dots[current].classList.add("highlight");
    }
    document.addEventListener("transitionend", function(event) {
        if (event.target.classList.contains("exit")) {
            event.target.classList.remove("exit");
            isTransitioning = false;
            timer = setTimeout(movePictures, 4000);
        }
    });
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", eventHandler(i));
        console.log(i);
    }

    function eventHandler(index) {
        return function(event) {
            if (event.target.classList.contains("hightlight")) {
                return;
            }
            if (isTransitioning) {
                return;
            }

            clearTimeout(timer);
            movePictures(index);
        };
    }
    timer = setTimeout(movePictures, 4000);
})();
