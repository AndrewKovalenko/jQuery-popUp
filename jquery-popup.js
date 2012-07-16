(function ($) {

    var template = '<div class="triangle-container"><div class="triangle"></div></div><div class="text"><a class="close" href="#"></a><span class="message-text"></span></div>';

    function showPopUp(options, element) {
        element.css('display', 'block');
        element.css('width', options.width);
        element.css('heigth', options.height);
        if (options.left != undefined) {
            element.css('right', options.right);
        } else {
            element.css('left', options.left);
        }

        if (options.bottom != undefined) {
            element.css('bottom', options.bottom);
        } else {
            element.css('top', options.top);
        }

    }

    function hidePopUp(element) {
        element.css('display', 'none');
    }

    var methods = {
        init: function (options) {
            var $this = $(this);
            var content = $this.html();
            $this.empty();
            var userClasses = $this.attr('class');

            if (userClasses != '' || userClasses != null) {
                $this.attr('class', userClasses + ' ' + 'pop-up');
            } else {
                $this.attr('class', 'pop-up');
            }

            $this.append(template);
            var contentContainer = $this.find("div.text span.message-text");
            contentContainer.append(content);

            $this.find('div.text a.close').click(function (e) {
                e.preventDefault();
                hidePopUp($this);
            });


            showPopUp(options, $this);

            return $this;
        },

        hide: function () {
            hidePopUp($(this));
        },

        show: function (options) {
            showPopUp(options, $(this));
        }
    };

    $.fn.popUp = function (options, method) {
        var settings = $.extend({
            'top': 0,
            'left': 0,
            'width': 200,
            'height': 50
        }, options);

        if (methods[method]) {
            return methods[method].call(this, settings);
        } else if (typeof method === 'object' || !method) {
            return methods.init.call(this, settings);
        } else {
            $.error('There is no method with name' + method + ' in jQuery.popUp');
            return undefined;
        }
    };
})(jQuery)