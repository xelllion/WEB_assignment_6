$(document).ready(function () {
    // Task 5: add and remove list elements.
    let itemNumber = 3;
    $("#append-item").click(function () {
        $("#item-list").append("<li>Item " + itemNumber++ + "</li>");
    });
    $("#prepend-item").click(function () {
        $("#item-list").prepend("<li>Item " + itemNumber++ + "</li>");
    });
    $("#remove-item").click(function () {
        $("#item-list li").last().remove();
    });

    // Task 6: modify src, alt and href attributes.
    $("#change-image").click(function () {
        const image = $("#attribute-image");
        if (image.attr("src") === "images/forest-lake.jpg") {
            image.attr({ src: "images/mountains.jpg", alt: "Rocky mountains beside a blue lake" });
        } else {
            image.attr({ src: "images/forest-lake.jpg", alt: "Forest lake and sunlit peaks" });
        }
    });
    $("#change-link").click(function () {
        $("#resource-link").attr("href", "https://api.jquery.com/").text("jQuery API documentation");
    });

    // Task 7: display input as text, without interpreting it as HTML.
    $("#name").on("input", function () { $("#name-output").text($(this).val()); });
    $("#email").on("input", function () { $("#email-output").text($(this).val()); });
    $("#live-form").on("submit", function (event) { event.preventDefault(); });
});
