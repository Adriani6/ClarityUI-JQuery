;(function ($) {

    $.fn.ClarityModal = function (options) {

        var modal = this;

        return {
            open: function (message) {
                $(modal).each(function () {
                    $(this).html(message);
                });
                return selectedObjects; // Preserve the jQuery chainability 
            },
            close: function () {
                //...
                return selectedObjects;
            }
        };

    }

})(jQuery);
