let counter = document.querySelectorAll(".counter");
let counterArr = Array.from(counter);

counterArr.map((item) => {

    function isInViewPort() {
        let viewPort = item.getBoundingClientRect();
        return (viewPort.top >= 0 && viewPort.left >= 0 && viewPort.bottom <= (window.innerHeight || document.documentElement.clientHeight) && viewPort.right <= (window.innerWidth || document.documentElement.clientWidth))
    }

    let oneTimeRun = true;
    document.addEventListener("scroll", function () {
        let count = 0;
        if (isInViewPort() && oneTimeRun) {
            oneTimeRun = false
            function counterUp() {
                count++
                item.innerHTML = count;
                if (count == item.dataset.count) {
                    clearInterval(stopCount);
                }
            }

            let stopCount = setInterval(() => {
                counterUp()
            }, 1000 / item.dataset.count);
        }

    });
});


