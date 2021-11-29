// luckywheel animation with Greensock  ---------------------------------

$(document).ready(function () {
    $("#wheel").click(function () {
        $('#wheel_section').toggleClass('wheel_center');
        $("#blur").toggleClass('blured');
        $(".arrow").toggleClass('arrow_move');
    });

    //  Setup variables
    var wheel = $(".wheel"),
        active = $(".active"),
        currentRotation,
        lastRotation,
        tolerance,
        deg,

        $btnPlay = $("#btnPlay"),
        $btnSlowMo = $("#btnSlowMo");

    // Random degree
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var deg = getRandomInt(360, 1080);
    console.log("degree: ", deg);

    // Creating the Timeline
    var indicator = new TimelineMax();
    var spinWheel = new TimelineMax();

    indicator
        .to(active, .13, { rotation: -10, transformOrigin: "65% 36%", ease: Power3.easeOut })
        .to(active, .13, { rotation: 5, ease: Power4.easeOut })
        .add("end");

    // Luckywheel animation
    spinWheel
        .to(wheel, 5, {
            rotation: deg, transformOrigin: "50% 50%", ease: Power4.easeInOut,
            onUpdate: (function () {
                currentRotation = Math.round(this.target[0]._gsTransform.rotation);    //_gsTransform: current position of the wheel
                tolerance = currentRotation - lastRotation;
                if (Math.round(currentRotation) % (360 / 12) <= tolerance) {
                    if (indicator.progress() > .2 || indicator.progress() === 0) {
                        indicator.play(0);
                    }
                }
                lastRotation = currentRotation;

                // console.log("lastRot: " + lastRotation);
                // console.log("currentRot: " + currentRotation);
                // console.log("tol: " + tolerance);
                // console.log(indicator.progress());
                // console.log("spinwheelprogress: " + spinWheel.progress());
            })
        });
    spinWheel.add("end");

    //   Buttons
    $btnPlay.click(
        function () {
            indicator.timeScale(1).seek(0);
            spinWheel.timeScale(1).seek(0);
        }
    );

    $btnSlowMo.click(
        function () {
            indicator.timeScale(.2).seek(.5);
            spinWheel.timeScale(.2).seek(.5);
        }
    );
});
