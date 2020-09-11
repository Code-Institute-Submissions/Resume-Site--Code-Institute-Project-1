$(document).ready(function () {
    /* #region ====  jQuery Flip @ http://nnattawat.github.io/flip/ ===================================== */
    $('#card-landing-top10').flip({
        trigger: 'manual',
    });

    $('.flip-button').click(function () {
        var card = '#' + $(this).data('card');
        var direction = $(this).data('direction');
        console.log(card);
        console.log(direction);
        $(card).flip(direction);
    });

    /* #endregion */
    /* ================================================================================================== */

    /* #region ====  NanoScrollerJS @ https://github.com/jamesflorentino/nanoScrollerJS  ================ */
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
    /* ================================================================================================== */

    /* #region ====  Morphing menu @ https://www.jqueryscript.net/menu/morphing-dropdown-menu.html  ==== */
    var app = (function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass))
                element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };
        init();
    })();
    /* #endregion */
    /* ================================================================================================== */

    /* #region ==== Back button ========================================================================= */
    $('.back-btn').click(function () {
        window.history.back();
    });
    /* #endregion */
    /* ================================================================================================== */
});
