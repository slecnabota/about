$(document).ready(function(){
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function(){
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")){
            $(".expand-btn").html("Hide");
        }
        else {
            $(".expand-btn").html("More");
        }
    });
    $(".play-button").click(function(){
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function(){
        $(".modal-canvas").toggleClass("hidden");
    });
});