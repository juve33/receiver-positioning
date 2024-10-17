function toggleDrag() {
    $('.dragging').not($(this)).trigger('click');

    $(this).off('dblclick');
    $(this).toggleClass("dragging");

    $(this).on('mousemove', function(event) {
        $(this).css({
            "left": "calc(" + event.clientX + "px - 125px)",
            "top": "calc(" + event.clientY + "px - 125px)"
            });
        $(this).next().css({
            "left": "calc(" + event.clientX + "px - var(--range))",
            "top": "calc(" + event.clientY + "px - var(--range))"
            });
    });

    $(this).on('click', function() {
        $(this).toggleClass("dragging");

        $(this).off('mousemove');

        $(this).off('click');
        
        $(this).on('dblclick', toggleDrag);
    });
}

$(document).ready(function() {

	$('.player').on('dblclick', toggleDrag);

});