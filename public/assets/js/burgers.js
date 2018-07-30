$(function () {
    $(".status").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("newstatus");

        var newDevourStatus = {
            devoured: newStatus
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourStatus
        }).then(
            function () {
                location.reload();
            }
        );
    });
    //get info on submit
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#inputBurger").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {

                location.reload();
            }
        );
    });
});