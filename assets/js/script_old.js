$(document).ready(function () {
    /* #region ====  jQuery Flip @ http://nnattawat.github.io/flip/ ==== */
    $('#card').flip({
        trigger: 'manual',
    });

    $('.top-10-btn').click(function () {
        $('#card').flip('toggle');
    });
    /* #endregion */
    /* ================================================================= */
});

/* #region ====  jQuery Flip @ http://nnattawat.github.io/flip/ ==== */
/* https://www.jqueryscript.net/menu/Creative-Morphing-Menu-with-jQuery-CSS3.html */
$(document).delegate('.open', 'click', function (event) {
    $(this).addClass('oppenned');
    event.stopPropagation();
});
$(document).delegate('body', 'click', function (event) {
    $('.open').removeClass('oppenned');
});
$(document).delegate('.cls', 'click', function (event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
});
/* #endregion */
/* ================================================================= */
