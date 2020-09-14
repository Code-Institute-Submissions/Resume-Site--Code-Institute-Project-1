$(document).ready(function () {
    /* #region ====  jQuery Flip @ http://nnattawat.github.io/flip/ ===================================== */
    $('#card-landing-top10').flip({
        trigger: 'manual',
    });

    $('.flip-button').click(function () {
        var card = '#' + $(this).data('card');
        var direction = $(this).data('direction');
        $(card).flip(direction);
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

    /* #region ==== Look Forward - Page transitions ===================================================== */
    /* ============ @ https://www.jqueryscript.net/animation/smooth-page-transitions-lookforward.html === */
    /* (To be implemented later) */
    /* #endregion */
    /* ================================================================================================== */
});
