$(document).ready(function () {
    // Task 0: jQuery is loaded and the page is ready.
    console.log("jQuery is ready!");

    // Task 1: ID, class and tag selectors.
    $("#change-text").click(function () {
        $("#id-example").text("The ID selector changed this text.");
    });
    $("#change-html").click(function () {
        $(".class-example").html("The class selector added <strong>bold text</strong>.");
    });
    $("#change-style").click(function () {
        $("span").css({ color: "#1b5e20", backgroundColor: "#c8e6c9", fontSize: "22px" });
    });
});
