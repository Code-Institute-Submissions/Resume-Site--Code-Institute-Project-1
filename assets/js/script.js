$(document).ready(function () {
    /* #region ====  jQuery Flip @ http://nnattawat.github.io/flip/ ==== */
    $('#card').flip({
        trigger: 'manual',
    });

    $('.top-10-btn').click(function () {
        $('#card').flip('toggle');
    });
    /* #endregion */
    /* ================================================================ */
});
