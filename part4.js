$(document).ready(function () {
    const original = { left: 0, top: 0, width: 60, height: 60, opacity: 1 };

    // Task 8: size and position.
    $("#basic-start").click(function () {
        $("#basic-box").stop(true).css(original).animate({ left: 100, width: 100, height: 100 }, 800);
    });

    // Task 9: chained animations run one after another.
    $("#sequence-start").click(function () {
        $("#sequence-box").stop(true).css(original)
            .animate({ left: 140 }, 500)
            .animate({ top: 110 }, 500)
            .animate({ width: 30, height: 30 }, 500)
            .animate(original, 500);
    });

    // Task 10: all properties change in a single animate call.
    $("#combined-start").click(function () {
        $("#combined-box").stop(true).css(original)
            .animate({ left: 100, top: 60, width: 100, height: 100, opacity: 0.35 }, 1000);
    });

    $("#basic-reset").click(function () { $("#basic-box").stop(true).css(original); });
    $("#sequence-reset").click(function () { $("#sequence-box").stop(true).css(original); });
    $("#combined-reset").click(function () { $("#combined-box").stop(true).css(original); });
});
