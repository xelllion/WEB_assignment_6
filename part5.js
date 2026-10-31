$(document).ready(function () {
    // Task 11: fade the thumbnails and open a larger image on click.
    $("#gallery-show").click(function () { $(".gallery figure").stop(true, true).fadeIn(500); });
    $("#gallery-hide").click(function () { $(".gallery figure").stop(true, true).fadeOut(500); });
    $("#gallery-toggle").click(function () { $(".gallery figure").stop(true, true).fadeToggle(500); });

    const lightbox = $("#lightbox")[0];
    $(".thumbnail").click(function () {
        const image = $(this).find("img");
        $("#large-image").attr({ src: image.attr("src"), alt: image.attr("alt") });
        $("#image-caption").text(image.attr("alt"));
        lightbox.showModal();
    });
    $("#close-lightbox").click(function () { lightbox.close(); });
    $("#lightbox").click(function (event) {
        const bounds = lightbox.getBoundingClientRect();
        if (event.target === lightbox && (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom)) {
            lightbox.close();
        }
    });
    // The native dialog supports Escape and restores keyboard focus.
});
