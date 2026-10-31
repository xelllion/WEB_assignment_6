$(document).ready(function () {
    // Task 2: visibility.
    $("#hide").click(function () { $("#visibility-text").hide(); });
    $("#show").click(function () { $("#visibility-text").show(); });
    $("#toggle").click(function () { $("#visibility-text").toggle(); });

    // Task 3: stop clears pending animations before the next effect.
    $("#fade-in").click(function () { $("#fade-image").stop(true, true).fadeIn(500); });
    $("#fade-out").click(function () { $("#fade-image").stop(true, true).fadeOut(500); });
    $("#fade-toggle").click(function () { $("#fade-image").stop(true, true).fadeToggle(500); });

    // Task 4: slide effects.
    $("#slide-up").click(function () { $("#slide-panel").stop(true, true).slideUp(500); });
    $("#slide-down").click(function () { $("#slide-panel").stop(true, true).slideDown(500); });
    $("#slide-toggle").click(function () { $("#slide-panel").stop(true, true).slideToggle(500); });
});
