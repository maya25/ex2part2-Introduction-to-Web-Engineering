$("document").ready(function () {
    var $total = 36;
    var i;

    for (i = 0; i < $total; i++) {
        $("#page3 aside").append(newArticle());
    }
    $(".square:last").addClass("last"); //change .plus class to something else

    $(".square.last").click(function () {
        $("#page3 aside").prepend(newArticle());
    })
    $("#page3 aside").on("click", ".square:not(.last)", function () {
        $(this).toggleClass("star");
    })
})

function newArticle() {
    var new_article = $("<article></article>");
    new_article.css("background-color", getRandomColor());
    new_article.addClass("square"); //change .obj class to something else    
    return new_article;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}