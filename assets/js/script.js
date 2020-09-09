$(document).ready(function () {
    /* #region ====  jQuery Flip @ http://nnattawat.github.io/flip/ ===================== */
    $('#card').flip({
        trigger: 'manual',
    });

    $('.flip-button').click(function () {
        $('#card').flip('toggle');
    });

    /* #endregion */
    /* ================================================================================== */

    /* #region ====  NanoScrollerJS @ https://github.com/jamesflorentino/nanoScrollerJS  ==== */
    $(window).on('resize scroll', function () {
        $('.top-10-box').each(function () {
            if ($(this).inViewport('-220')) {
                $(this).removeClass('flip-hide');
            } else {
                $(this).addClass('flip-hide');
            }
        });
    });

    $(window).on('resize scroll', function () {
        $('.top-10-box').each(function () {
            if ($(this).inViewportTop('-400')) {
                $(this).addClass('flip-hide');
            } else {
                $(this).emoveClass('flip-hide');
            }
        });
    });

    /* #endregion */
    /* ================================================================================== */
});
