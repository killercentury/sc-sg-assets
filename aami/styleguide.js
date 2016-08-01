var sg = sg || {};

/* ==========================================================================
   Typography functions
   ==========================================================================

   Usage reference

    styling class:      .sg-Type--phone
    js class:           .js-Type-phoneFallback
    data-attribute:     data-type-phonefallback
    function:           sg.Type.init
    variable:           defaultPhoneFallbackUrl

*/


(function() {

    sg.Type = {
        init: function() {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (! isMobile) {
                $(".js-Type-phoneFallback").each(function() {
                    var fallbackUrl = $(this).attr('data-type-phonefallback') || sg.Type.defaultPhoneFallbackUrl;
                    if (fallbackUrl) {
                        $(this).attr( {href:fallbackUrl, target:"_blank"} );
                    }
                });
            }
        }
    };

})();

$(function() {
    sg.Type.init();
});

var sg = sg || {};

;(function($) {
    $.fn.TableFlexPolyfill = function() {
        return this.each(function(e) {
            $masterTable = $(this);
            $masterTable.addClass("sg-Table--flexPolyfill");
            var startSlice = 0,
                endSlice = startSlice + numberColumns,
                numberItems = $masterTable.children().length,
                $items = $masterTable.find(".sg-Table--flexCell"),
                numberColumns = parseInt($masterTable.attr("data-columns"));
            for (var i = 0; i < numberItems; i += numberColumns) {
                startSlice = i;
                endSlice = startSlice + numberColumns;
                $items.slice(startSlice, endSlice).wrapAll( '<div class="sg-Table--rowPolyfill"></div>' );
            }
        });
    };
}(jQuery));


(function(){
    if (!Modernizr.flexbox) {
         $(".js-TablePolyfill").TableFlexPolyfill();
    }
}(jQuery));
var sg = sg || {};

(function ($) {
    'use strict';
    $.fn.sgFlextableResponsive = function () {
        return this.each(function () {

            var hiderClass;
            if ($(this).hasClass('sg-Flextable--collapseLarge')) {
                hiderClass = 'sg-u-mediumAndSmallHidden';
                $(this).find('.sg-Tab, .sg-Accordion').addClass('sg-u-largeHidden');
            } else if ($(this).hasClass('sg-Flextable--collapseMedium')) {
                hiderClass = 'sg-u-smallHidden';
                $(this).find('.sg-Tab, .sg-Accordion').addClass('sg-u-mediumHidden sg-u-largeHidden');
            } else {
                throw new Error('Flextable Component: Responsive Tab & Accordion tables must use either the "sg-Flextable--collapseMedium" or "sg-Flextable--collapseLarge" class.');
            }

            var toggleColumns = function ($table) {
                var selectedControls = [];
                $table.find('.sg-Accordion-label, .sg-Tab-item').each(function () {
                    selectedControls.push($(this).attr('aria-selected'));
                });
                var cellCount = 0, colCount = 0;
                var setNum = $table.find('.sg-Flextable-cell').length / Math.max($table.find('.sg-Tab-item').length, $table.find('.sg-Accordion-label').length);
                $table.find('.sg-Flextable-cell').each(function () {
                    if (selectedControls[colCount] === 'true') {
                        $(this).removeClass(hiderClass);
                    } else {
                        $(this).addClass(hiderClass);
                    }
                    cellCount++;
                    if (cellCount % setNum === 0) {
                        colCount++;
                    }
                });
            };

            $(this).each(function () {
                toggleColumns($(this));
            });

            $(this).find('.sg-Tab-item').click(function () {
                $(this).addClass('is-selected').siblings().removeClass('is-selected');
                $(this).attr('aria-selected', 'true').siblings().attr('aria-selected', 'false');
                toggleColumns($(this).parents('.sg-Flextable'));
            });

            $(this).find('.sg-Accordion-label').click(function () {
                $(this).toggleClass('is-selected');
                $(this).attr('aria-selected', $(this).attr('aria-selected') !== 'true');
                toggleColumns($(this).parents('.sg-Flextable'));
            });

        });
    };

    $.fn.sgFlextableStripe = function () {
        return this.each(function () {
            $('.js-TableStripe .sg-Flextable-cell').each(function () {
                var order = $(this).attr('style').match(/order\s*:\s*(\d+)/)[1];
                if (order % 2 === 0) {
                    $(this).addClass('is-striped');
                }
            });
        });
    };

}(jQuery));


/* IMPORTANT: Styleguide JavaScript should never run automatically on page load,
 it must be called manually on the page it intends to run on.
 *********************************************************************************/

// This code has been moved to the documentation site JS

// (function(){

//     $(document).ready(function(){
//         $(".js-TableTabs, .js-TableAccordions").sgFlextableResponsive();
//         $(".js-TableStripe").sgFlextableStripe();
//     });

// }(jQuery));

var sg = sg || {};

(function ($) {
    'use strict';
    $.fn.sgFlextableResponsive = function () {
        return this.each(function () {

            var hiderClass;
            if ($(this).hasClass('sg-Flextable--collapseLarge')) {
                hiderClass = 'sg-u-mediumAndSmallHidden';
                $(this).find('.sg-Tab, .sg-Accordion').addClass('sg-u-largeHidden');
            } else if ($(this).hasClass('sg-Flextable--collapseMedium')) {
                hiderClass = 'sg-u-smallHidden';
                $(this).find('.sg-Tab, .sg-Accordion').addClass('sg-u-mediumHidden sg-u-largeHidden');
            } else {
                throw new Error('Flextable Component: Responsive Tab & Accordion tables must use either the "sg-Flextable--collapseMedium" or "sg-Flextable--collapseLarge" class.');
            }

            var toggleColumns = function ($table) {
                var selectedControls = [];
                $table.find('.sg-Accordion-label, .sg-Tab-item').each(function () {
                    selectedControls.push($(this).attr('aria-selected'));
                });
                var cellCount = 0, colCount = 0;
                var setNum = $table.find('.sg-Flextable-cell').length / Math.max($table.find('.sg-Tab-item').length, $table.find('.sg-Accordion-label').length);
                $table.find('.sg-Flextable-cell').each(function () {
                    if (selectedControls[colCount] === 'true') {
                        $(this).removeClass(hiderClass);
                    } else {
                        $(this).addClass(hiderClass);
                    }
                    cellCount++;
                    if (cellCount % setNum === 0) {
                        colCount++;
                    }
                });
            };

            $(this).each(function () {
                toggleColumns($(this));
            });

            $(this).find('.sg-Tab-item').click(function () {
                $(this).addClass('is-selected').siblings().removeClass('is-selected');
                $(this).attr('aria-selected', 'true').siblings().attr('aria-selected', 'false');
                toggleColumns($(this).parents('.sg-Flextable'));
            });

            $(this).find('.sg-Accordion-label').click(function () {
                $(this).toggleClass('is-selected');
                $(this).attr('aria-selected', $(this).attr('aria-selected') !== 'true');
                toggleColumns($(this).parents('.sg-Flextable'));
            });

        });
    };

    $.fn.sgFlextableStripe = function () {
        return this.each(function () {
            $('.js-TableStripe .sg-Flextable-cell').each(function () {
                var order = $(this).attr('style').match(/order\s*:\s*(\d+)/)[1];
                if (order % 2 === 0) {
                    $(this).addClass('is-striped');
                }
            });
        });
    };

}(jQuery));


/* IMPORTANT: Styleguide JavaScript should never run automatically on page load,
 it must be called manually on the page it intends to run on.
 *********************************************************************************/

// This code has been moved to the documentation site JS

// (function(){

//     $(document).ready(function(){
//         $(".js-TableTabs, .js-TableAccordions").sgFlextableResponsive();
//         $(".js-TableStripe").sgFlextableStripe();
//     });

// }(jQuery));

var sg = sg || {};

;(function ( $ ) {

    sg.Accordion = {
        toggleAccordion: function(accordionLabelId) {
            var accordionGroup = $(accordionLabelId).attr("data-accordion-group");

            if ($(accordionLabelId).hasClass("is-selected")) {
                $(accordionLabelId).removeClass("is-selected").attr("aria-selected","false");
            }
            else {
                $(accordionLabelId).addClass("is-selected").attr("aria-selected","true");
            }

            if (accordionGroup !== undefined) {
               $("[data-accordion-group='" + accordionGroup + "']").each(function(){
                    if (!($(this).is($(accordionLabelId)))) {
                        $(this).removeClass("is-selected").attr("aria-selected","false");
                    }
                });
            }
        },
        openContent: function(accordionContentId) {
            var $accordionTrigger = $("#" + $(accordionContentId).attr("aria-labelledby")),
                accordionGroup = $accordionTrigger.attr("data-accordion-group");

            if ($accordionTrigger.hasClass("is-selected")) {
                $(accordionContentId).removeClass("is-closed").addClass("is-open").attr("aria-expanded","true");
            }
            else {
                $(accordionContentId).removeClass("is-open").addClass("is-closed").attr("aria-expanded","false");
            }

            if (accordionGroup !== undefined) {
                $("[data-accordion-group='" + accordionGroup + "']").each(function(){
                    var $currContent = $("#"+$(this).attr("aria-controls"));
                    if (!($currContent.is($(accordionContentId)))) {
                        $currContent.removeClass("is-open").addClass("is-closed").attr("aria-expanded","false");
                    }
                });
            }
        }
    };

    $.fn.accordion = function(options) {
        //incase options is undefined
        options = options || {};
        var settings = $.extend({
            toggleAccordionCallback : undefined,
            toggleAccordionParameters : [],
            openContentCallBack : undefined,
            openContentParameters : []
        }, options);

        return this.each (function(){
            $(this).bind("click", function(){
                var accordion = $(this),
                    content = $("#"+$(this).attr("aria-controls"));

                sg.Accordion.toggleAccordion(accordion);
                if (typeof(settings.toggleAccordionCallback) === 'function') {
                    settings.toggleAccordionCallback.call(accordion, settings.toggleAccordionParameters);
                }

                sg.Accordion.openContent(content);
                if (typeof(settings.openContentCallBack) === 'function') {
                    settings.openContentCallBack.call(content, settings.openContentParameters);
                }
            });
            $(this).bind("mouseup", function(){
                // removes focus style fom click event but not keyboard
                this.blur();
            });
            return this;
        });
    };

}( jQuery ));



var sg = sg || {};

;(function ( $ ) {

    sg.Tab = {
        selectTab: function(tabItemId) {
            var tabGroup = $(tabItemId).attr("data-tab-group");

            $("[data-tab-group='" + tabGroup + "']").each(function(){
                if ($(this).is($(tabItemId))) {
                    $(tabItemId).addClass("is-selected").attr("aria-selected","true");
                }
                else {
                    $(this).removeClass("is-selected").attr("aria-selected","false");
                }
            });
        },
        openPanel: function(tabPanelId) {
            var $tabTrigger = $("#" + $(tabPanelId).attr("aria-labelledby")),
                tabGroup = $tabTrigger.attr("data-tab-group");

             //tab group is on the triggers
             $("[data-tab-group='" + tabGroup + "']").each(function(){
                if ($("#"+$(this).attr("aria-controls")).is($(tabPanelId))) {
                    $(tabPanelId).removeClass("is-closed").addClass("is-open").attr("aria-expanded","true");
                }
                else {
                    $("#"+$(this).attr("aria-controls")).removeClass("is-open").addClass("is-closed").attr("aria-expanded","false");
                }
            });
        }
    };

    $.fn.tabs = function(options) {
        //incase options is undefined
        options = options || {};
        var settings = $.extend({
            selectTabCallback : undefined,
            selectTabParameters : [],
            openPanelCallback : undefined,
            openPanelParameters : []
        }, options);

        return this.each (function(){
            $(this).bind("click", function(){
                var tab = $(this),
                    panel = $("#"+$(this).attr("aria-controls"));

                sg.Tab.selectTab(tab);
                if (typeof(settings.selectTabCallback) === 'function') {
                    settings.selectTabCallback.call(tab, settings.selectTabParameters);
                }

                sg.Tab.openPanel(panel);
                if (typeof(settings.openPanelCallback) === 'function') {
                    settings.openPanelCallback.call(panel, settings.openPanelParameters);
                }
            });
            return this;
        });
    };

}( jQuery ));


var sg = sg || {};

(function() {


    sg.overlay = function(options) {
        options = options || {};
        var $overlay = $('.loading-overlay');
        if ($overlay.length) return;
        $overlay = $('<div class="loading-overlay"><div class="loading-overlay-bg"></div></div>');
        $('body').append($overlay);
        if (options.raise) {
            var raiseSelector = options.raise;
            $(raiseSelector).each(function() {
                if ($(this).css('position') == 'static') {
                    $(this).addClass('was-static');
                }
                $(this).addClass('raise-above-overlay');
                $(this).parents().each(function() {
                    if ($(this).css('z-index') != 'auto') $(this).addClass('raise-above-overlay');
                });
            });
            $(raiseSelector)[0].focus();
        }
        if (!options.invisible) {
            $overlay.append('<div class="loading-icon"><i></i></div>');
            $overlay.children('.loading-icon').fadeTo(300, 1);
            $overlay.children('.loading-overlay-bg').fadeTo(300, 0.6);
        } else {
            $overlay.children('.loading-overlay-bg').fadeTo(300, 0.32);
        }
    };

    sg.removeOverlay = function() {
        var $overlay = $('.loading-overlay');
        if ($overlay) {
            var overlayToRemove = $overlay;
            $overlay.children().fadeTo(300, 0, function() {
                overlayToRemove.remove();
            });
            $overlay.remove();
            $('.raise-above-overlay').removeClass('raise-above-overlay');
            $('.was-static').removeClass('was-static');
        }
    };

})();

$(function() {
    $('form').submit(sg.overlay);
});

/* ========================================================================
 * Bootstrap: modal.js & transition.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+ function($) {
    'use strict';

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false
        var $el = this
        $(this).one('bsTransitionEnd', function() {
            called = true
        })
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }

    $(function() {
        $.support.transition = transitionEnd()

        if (!$.support.transition) return

        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })

}(jQuery);

+ function($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function(element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$dialog = this.$element.find('.sg-Modal-wrapper')
        this.$backdrop = null
        this.isShown = null
        this.originalBodyPad = null
        this.scrollbarWidth = 0
        this.ignoreBackdropClick = false

        if (this.options.remote) {
            this.$element
                .find('.sg-Modal-content')
                .load(this.options.remote, $.proxy(function() {
                    this.$element.trigger('loaded.bs.modal')
                }, this))
        }
    }

    Modal.VERSION = '3.3.4'

    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    Modal.prototype.show = function(_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {
            relatedTarget: _relatedTarget
        })

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('sg-Body--modalOpen')

        this.escape()
        this.resize()

        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

        this.$dialog.on('mousedown.dismiss.bs.modal', function() {
            that.$element.one('mouseup.dismiss.bs.modal', function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
        })

        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('sg-Modal--animate')

            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move modals dom position
            }

            that.$element
                .show()
                .scrollTop(0)

            that.adjustDialog()

            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element.addClass('in')

            that.enforceFocus()

            var e = $.Event('shown.bs.modal', {
                relatedTarget: _relatedTarget
            })

            transition ?
                that.$dialog // wait for modal to slide in
                .one('bsTransitionEnd', function() {
                    that.$element.trigger('focus').trigger(e)
                })
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                that.$element.trigger('focus').trigger(e)
        })
    }

    Modal.prototype.hide = function(e) {
        if (e) e.preventDefault()

        e = $.Event('hide.bs.modal')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()
        this.resize()

        $(document).off('focusin.bs.modal')

        this.$element
            .removeClass('in')
            .off('click.dismiss.bs.modal')
            .off('mouseup.dismiss.bs.modal')

        this.$dialog.off('mousedown.dismiss.bs.modal')

        $.support.transition && this.$element.hasClass('sg-Modal--animate') ?
            this.$element
            .one('bsTransitionEnd', $.proxy(this.hideModal, this))
            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            this.hideModal()
    }

    Modal.prototype.enforceFocus = function() {
        $(document)
            .off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function(e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }

    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
        }
    }

    Modal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
        } else {
            $(window).off('resize.bs.modal')
        }
    }

    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.$body.removeClass('sg-Body--modalOpen')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')
        })
    }

    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    Modal.prototype.backdrop = function(callback) {
        var that = this
        var animate = this.$element.hasClass('sg-Modal--animate') ? 'sg-Modal--animate' : ''

        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $(document.createElement('div'))
                .addClass('sg-Modal-backdrop ' + animate)
                .appendTo(this.$body)

            this.$element.on('click.dismiss.bs.modal', $.proxy(function(e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false
                    return
                }
                if (e.target !== e.currentTarget) return
                this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide()
            }, this))

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if (!callback) return

            doAnimate ?
                this.$backdrop
                .one('bsTransitionEnd', callback)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callback()

        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function() {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('sg-Modal--animate') ?
                this.$backdrop
                .one('bsTransitionEnd', callbackRemove)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callbackRemove()

        } else if (callback) {
            callback()
        }
    }

    // these following methods are used to handle overflowing modals

    Modal.prototype.handleUpdate = function() {
        this.adjustDialog()
    }

    Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        })
    }

    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    }

    Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        this.scrollbarWidth = this.measureScrollbar()
    }

    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }

    Modal.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', this.originalBodyPad)
    }

    Modal.prototype.measureScrollbar = function() { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'sg-Modal-scrollbarMeasure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }

    // MODAL PLUGIN DEFINITION
    // =======================

    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    var old = $.fn.modal

    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal

    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function() {
        $.fn.modal = old
        return this
    }

    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())

        if ($this.is('a')) e.preventDefault()

        $target.one('show.bs.modal', function(showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
            $target.one('hidden.bs.modal', function() {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })

}(jQuery);



// $(function() {
    // $('[data-target~="#ModalExample2"]').modal('show');
// });














































(function(window, $) {
    var PLUGIN_NAME = "tooltip";

    var Tooltip = function(elem) {
        this.elem = elem;
        this.$tooltip = $(elem);
        this.$content = $(this.$tooltip.data("contentId"));

        this.$arrow = this.$content.find(".js-Arrow");
        this.settings = {
            tooltipMargin: 20
        }

        this.tooltipShown = false;

        this.init();
    };

    Tooltip.prototype = {
        init: function() {
            try {
                var $tooltip = this.$tooltip; //Need this 'cos scope reasons
                //Merge the data attributes
                $.extend(this.settings, this.$tooltip.data());

                //Move tooltips to the bottom of the body
                this.$content.appendTo("body");
                //"Read" the max-width setting.
                this.settings.tooltipWidth = parseInt(this.$content.css("max-width").replace("px", ""));

                //Gotta just bind those keys
                this.$tooltip.on("sg.tooltip.open", $.proxy(this.showTooltip, this))
                             .on("sg.tooltip.close", $.proxy(this.hideTooltip, this))
                             .on("sg.tooltip.resize", $.proxy(this.resizeTooltip, this));

                this.$tooltip.on("click", function() {
                    $(this).trigger("sg.tooltip.open");
                });
                this.$content.find(".js-closeModal").each(function() {
                    $(this).on("click", function() {
                        $tooltip.trigger("sg.tooltip.close");
                    });
                });
                $(window).on("resize", function() {
                    $tooltip.trigger("sg.tooltip.resize");
                });
            }
            catch(e) {
                if ( !this.$content.nodetype ) {
                    throw new Error('Tooltip ['+this.$content.selector+'] does not exist.');
                } else {
                    throw new Error(e.message);
                }
            }
            return this;
        },
        showTooltip: function() {
            this.tooltipShown = true;

            this.positionTooltip();

            this.$tooltip.addClass("is-activated");
            this.$content.removeClass("is-closed").addClass("is-open");

            /* this.$content.focus(); */
            /*this.positionTooltip();*/
        },
        hideTooltip: function() {
            this.tooltipShown = false;

            this.$tooltip.removeClass("is-activated");
            this.$content.removeClass("is-open").addClass("is-closed");
            // this.$content.addClass("is-animatedOut");
            // this.$content.one("webkitAnimationEnd", function (e) {
                // $(this).removeClass("is-open").addClass("is-closed");
            // });

        },
        positionTooltip: function() {

            var tooltipOffset = this.$tooltip.offset(),
                windowProperties = {
                    width: $(window).width(),
                    height: $(window).height(),
                    scrollLeft: $(window).scrollLeft(),
                    scrollTop: $(window).scrollTop()
                },
                modalContentWidthLimit = this.settings.tooltipWidth + this.settings.tooltipMargin * 2,
                enoughHorizontalSpace = modalContentWidthLimit <= windowProperties.width,
                arrowHeight = this.$arrow.outerHeight(),
                modalContentCSS = {
                    top: tooltipOffset.top + this.$tooltip.outerHeight() + arrowHeight,
                    bottom: 'auto',
                    left: 'auto',
                    right: 'auto',
                    position: 'absolute'
                };

            this.$arrow.removeClass("is-hidden");

            if (enoughHorizontalSpace) {
                this.$content.innerWidth(this.settings.tooltipWidth);
                var enoughSpaceToRight = modalContentWidthLimit <= (windowProperties.width - tooltipOffset.left);
                if (enoughSpaceToRight) {
                    modalContentCSS.left = tooltipOffset.left;
                } else {
                    modalContentCSS.right = this.settings.tooltipMargin;
                }
            } else {
                //this.$arrow.addClass("is-hidden");
                modalContentCSS.width = 'auto';
                modalContentCSS.left = this.settings.tooltipMargin;
                modalContentCSS.right = this.settings.tooltipMargin;
            }

            this.$content.css(modalContentCSS);

            var modalHeight = this.$content.outerHeight(),
                documentHeight = $(document).height(),
                bottomMargin = this.settings.tooltipMargin * 1.5,
                enoughVerticalSpace = modalHeight < (documentHeight - tooltipOffset.top - this.$tooltip.outerHeight() - arrowHeight);

            if (!enoughVerticalSpace) {
                this.$arrow.addClass("is-hidden");
                modalContentCSS.top = (windowProperties.scrollTop + windowProperties.height) - (modalHeight + bottomMargin);
            }

            this.$content.css(modalContentCSS);

            if (this.$arrow.hasClass("is-hidden")) {
                modalContentCSS.top -= arrowHeight;
            } else {
                //EWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                this.$content.css("display", "block");
                //THIS IS THE WORST
                var arrowDiameter = Math.sqrt((this.$arrow.outerWidth()*this.$arrow.outerWidth())*2);
                var left = Math.abs(this.$content.offset().left - this.$tooltip.offset().left)  + (this.$tooltip.outerWidth()/2 - 5)
                if((left + arrowDiameter) > this.$content.outerWidth()) {
                    left = this.$content.outerWidth() - arrowDiameter;
                }
                this.$content.css("display", "");
                this.$arrow.css({"left" : left});
            }


        },
        resizeTooltip: function() {
            if (this.tooltipShown) {
                this.positionTooltip();
            }
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[PLUGIN_NAME] = function(options) {
        return this.each(function() {
            $currentTrigger = $(this);

            //If tooltip has not been instantiated
            if (!$.data(this, "plugin_" + PLUGIN_NAME)) {
                var ttip = new Tooltip(this, options);
                $.data(this, "plugin_" + PLUGIN_NAME, ttip);
            }
            //If it has been instantiated, trigger a method
            else {
                var ttip = $.data(this, "plugin_" + PLUGIN_NAME);
                 $(this).trigger("sg.tooltip." + options);
            }

        });
    }

    $(document).on("mouseup keyup touchend", function (e) {
        if ((e.keyCode === 27) || ($(e.target).closest(".js-TooltipContent").length === 0)) {
            $(".js-Tooltip.is-activated").each(function(){
                $(this).trigger("sg.tooltip.close");
            });
        }
    });


    window.Tooltip = Tooltip;
})(window, jQuery);



$(function() {

    function createCheckUncheckEvents() {
        var radioInputSelector = 'input[type="radio"], input[type="checkbox"]';

        // Create 'check' and 'uncheck' events for all radios and checkboxes
        $(document).on("change", radioInputSelector, function() {
            if( $(this).is(':checked') ) {
                $(this).trigger('check');
            } else {
                $(this).trigger('uncheck');
            }
        });

        // Check & Uncheck events
        $(document).on("check", radioInputSelector, function() {
            $(this).addClass('checked');
            // Force refresh of parent in old IE hack
            if( $("html").hasClass("lt-ie9") ) $(this).parent().addClass('fake').removeClass('fake');
            if( $(this).is('[type="radio"]') ) {
                $('input[name="'+$(this).attr('name')+'"]').not($(this)).each( function() {
                    $(this).trigger('uncheck');
                    // Force refresh of parent in old IE hack
                    if( $("html").hasClass("lt-ie9") ) $(this).parent().addClass('fake').removeClass('fake');
                });
            }
        });

        $(document).on("uncheck", radioInputSelector, function(){
            $(this).removeClass('checked');
        });
    }

    /* NOTE:
     * Reason why I had to use this weird array merge instead of jQuery multiple selector in the methods below
     * is to solve the issue of IE7 throwing "permission denied", "object doesn't have method", etc.. errors
     * when using multiple selector together with input type attribute on elements added dynamically
     * Original selector was: $('input[type="radio"], input[type="checkbox"]')
     */
    function triggerCheckUncheckEvents() {
        $.merge($('input[type="radio"]'), $('input[type="checkbox"]')).each( function() {
            if( $(this).is(':checked') ) {
                $(this).trigger('check');
            } else {
                $(this).trigger('uncheck');
            }
        });
    }

    function markRadioAndCheckboxInputDisabled() {
        $.merge($('input[type="radio"]:disabled'), $('input[type="checkbox"]:disabled')).addClass('disabled');
    }

    function styleRadioAndCheckbox() {
        $.merge($('.radio-options input[type="radio"]'), $('.check-options input[type="checkbox"]')).each(function() {

            // Wrap additional tags
            $(this).add($(this).nextAll('label[for="' + $(this).attr('id') + '"]')).wrapAll("<div class='input-option-container'></div>");
            $(this).wrap("<div class='input-option-lhs'></div>");

            // Set relavent classes on container
            if ($(this).hasClass('disabled')) { $(this).parents('.input-option-container').addClass('disabled'); }
            if ($(this).hasClass('checked')) { $(this).parents('.input-option-container').addClass('checked'); }
            var sizeClass = ($(this).parent().next('label[for="' + $(this).attr('id') + '"][class^="size-"]').attr('class'));
            if( sizeClass !== undefined ) {
                $(this).parent().next('label[for="' + $(this).attr('id') + '"]').removeClass().addClass("size-auto"); // !should only remove ^="size-" classes
                $(this).parents('.input-option-container').addClass( sizeClass );
            }

            // Add additional action on Check & Uncheck events
            $(this).on('check', function(){
                $(this).parents('.input-option-container').addClass('checked');
            });
            $(this).on('uncheck', function(){
                $(this).parents('.input-option-container').removeClass('checked');
            });

        });
    }


    function initialiseRadioScaleEvents() {
        if( $('.radio-scale').length ) {
            $('.radio-scale label').prepend('<span class="circle"><span class="inner-circle"></span></span>');
            $('.radio-scale div:first-child').addClass('first-child');
            $('.radio-scale div:last-child').addClass('last-child');
            $( window ).resize( function() {
                resizeRadioScale();
            }).resize();
        }
    }
    function resizeRadioScale() {
        $('.radio-scale').each( function() {
            if( $(this).height() > 100) {
                $(this).addClass('multi-line');
            } else {
                $(this).removeClass('multi-line');
            }
        });
    }

    function initialiseRadioTableEvents() {
        $('.radio-table input[type="radio"]').each(function() {
            // Set relavent classes on tr
            if ($(this).hasClass('disabled')) { $(this).parents('.radio-table .radio-table-row').addClass('disabled'); }
            if ($(this).hasClass('checked')) { $(this).parents('.radio-table .radio-table-row').addClass('checked'); }

            // Add additional action on Check & Uncheck events
            $(this).on('check', function() {
                $(this).parents('.radio-table .radio-table-row').addClass('checked');
            });
            $(this).on('uncheck', function() {
                $(this).parents('.radio-table .radio-table-row').removeClass('checked');
            });
        });
    }

    function setTypeForInputOptionLhs() {
        $("input[type='radio']").parent().filter(".input-option-lhs").each(function() {
            $(this).addClass("input-option--radio");
        });
        $("input[type='checkbox']").parent().filter(".input-option-lhs").each(function() {
            $(this).addClass("input-option--check");
        });
    }

    function radioCheckInit() {
        // Create 'check' and 'uncheck' events for all radios
        createCheckUncheckEvents();

        // Trigger 'check' & 'uncheck' events on page load
        triggerCheckUncheckEvents();

        // Mark input as class='disabled' if input is 'disabled'
        markRadioAndCheckboxInputDisabled();

        // Radio options (radio-options) & Checkbox options (check-options) styled inputs
        styleRadioAndCheckbox();

        // Radio Scale
        initialiseRadioScaleEvents();

        // Radio Table
        initialiseRadioTableEvents();

        setTypeForInputOptionLhs();
    }


    // Run
    radioCheckInit();

    // re-initialize when new element is added
    $(document).on('radioCheckAdded', function() {
        radioCheckInit();
    });
});


// none
(function ($) {

    $.fn.handleResponsiveQuotePanel = function () {
        return this.each(function () {
            // Finding all relevant elements
            var $quotePanel = $(this);
            var $mobilePanel = $(this).find(".mobile-panel");
            var paymentOptionsWidth = 260;

            if ($mobilePanel.length > 0) {
                var $paymentOptions = $(this).find(".quote-payment-options");
                var $quoteNumber = $(this).parents().siblings(".quote-number");
                var $alternatePriceLinks = $(this).find('.alternate-price-link');
                var $alternatePriceWrapper = $("<div class='alternate-price-link-wrapper'></div>"); // wrapper required to have the button centered on the page while having max-width

                // Add placeholder/wrapper objects
                $quoteNumber.before("<h1 class='sg-u-largeHidden'>Your quote </h1>");
                $quotePanel.find('.quote-email').before($alternatePriceWrapper);

                // Record parent data to node
                $paymentOptions.each(function () {
                    var parent = $(this).parent();
                    var parentID = parent[0].id;
                    var parentDisplay = $(parent[0]).css('display');
                    var $alternatePriceLink = $(this).find('.alternate-price-link');

                    $(this).data('originalParent', parent);

                    // Record parentID and parent visibility to handle switching betwee 2 tabs from Motor
                    // Rely quite heavily on how specific handling switching between panel tab in their code
                    // TO DO: create a more generic way to handle this

                    $(this).attr('data-parentID', parentID);
                    $(this).css('display', parentDisplay);
                    $alternatePriceLink.css('display', parentDisplay);
                    $alternatePriceLink.attr('data-parentID', parentID);
                });

                $alternatePriceLinks.each(function () {
                    $(this).data('originalParent', $(this).parent());
                });

                $quoteNumber.data('originalParent', $quoteNumber.parent());
            }

            // Create custom events at the time passing through breakpoint
            var breakpoint1 = 700;
            var tmpInMobileSize = $(window).width() <= breakpoint1;
            var tmpHasSpaceForIcons = $mobilePanel.width() > paymentOptionsWidth * 2;


            // Change quote panel on page load for mobile screen
            if (tmpInMobileSize) {
                switchToSmall();
            }

            // TO DO: beter way to detect the switch between certain breakpoint for browser width
            // currently record the state before and after the resize to decide with there is a switch happening and do the reposition and transform oly at that point
            // may be can do it with event-based?

            $(window).on('resize', function () {
                if ($mobilePanel.length > 0) {
                    var inMobileSize = $(window).width() <= breakpoint1;
                    var hasSpaceForIcons = $mobilePanel.width() > paymentOptionsWidth * 2;

                    if (inMobileSize !== tmpInMobileSize) {
                        toggleMobileStyle(inMobileSize);
                        tmpInMobileSize = inMobileSize;
                    }
                    else if (hasSpaceForIcons !== tmpHasSpaceForIcons) {
                        movePaymentOptions();
                        tmpHasSpaceForIcons = hasSpaceForIcons;
                    }
                }
            });


            // Rearrange elements
            function toggleMobileStyle(inMobileSize) {
                detachElements();
                if(inMobileSize){
                    switchToSmall();
                }
                else{
                    switchToLarge();
                }
            }

            function detachElements() {
                $paymentOptions.detach();
                $quoteNumber.detach();
                $alternatePriceLinks.detach();
            }

            function switchToLarge() {
                $paymentOptions.removeClass('inline');
                $paymentOptions.each(function () {
                    if($(this).data('originalParent')){
                        $(this).data('originalParent').append($(this));
                    }
                });

                $alternatePriceLinks.each(function () {
                    if( $(this).data('originalParent')){
                        $(this).data('originalParent').append($(this));
                    }
                });

                if($quoteNumber.data('originalParent')){
                    $quoteNumber.data('originalParent').prepend($quoteNumber);
                }


                $quoteNumber.find(".text").text("Your quote number: ");
            }

            function switchToSmall() {
                $quoteNumber.appendTo($mobilePanel);
                $alternatePriceLinks.appendTo($alternatePriceWrapper);

                movePaymentOptions();
            }

            function movePaymentOptions() {
                if ($(window).width() > breakpoint1) return;

                // Move payment options inside the premium panel on mobile if there is enough space
                if ($mobilePanel.width() > paymentOptionsWidth * 2) {
                    $paymentOptions.addClass('inline');
                    $mobilePanel.append($paymentOptions);
                    $quoteNumber.find(".text").text("Quote No. ");
                }
                else {
                    $paymentOptions.removeClass('inline');
                    $mobilePanel.after($paymentOptions);
                    $quoteNumber.find(".text").text("No. ");
                }
            }
        });
    };

})(jQuery);

$(function () {
    if ($('html').hasClass('responsive')) {
        $('.mobile-enabled .quote-panel').handleResponsiveQuotePanel();
    }
});

(function ($) {

    var StickyPanel = function ($element, mobileBreakpoint) {
        this.$panelWrapper = $element;
        this.$mainPanel = this.$panelWrapper.find('.sticky-panel');
        this.$subPanel = this.$panelWrapper.find('.sticky-sub-panel');

        this.$stickyElem = this.$panelWrapper;
        this.$placeholder = $("<div class='placeholder'></div>");

        this.panelHeight = this.$panelWrapper.outerHeight(true); // record original panel height
        this.mobileBreakpoint = mobileBreakpoint;

        if ($('html').hasClass('lt-ie8')) {
            this.disableSticky();
            return;
        }

        this.topMargin = 10;

        // offsetTop is used to record offset of sticky element before it turns sticky
        // value is reset to 0 when sticky disable, required to handle the case where offset of sticky element changed dynamically
        // (Eg: other elements added or removed before it)
        this.offsetTop = 0;

        // TO DO: find better way to control whether sticky should respond to mobile version
        this.responsive = $('html').hasClass('responsive');
        this.mobileEnabled = this.$panelWrapper.hasClass('mobile-enabled');

        this.inMobileSize = this.inMobileWindow();
        this.$mobileSticky = this.$panelWrapper.find(".mobile-sticky-wrapper");

        if (this.$mobileSticky.length === 0) {
            this.$mobileSticky = this.$panelWrapper;
        }

        $(window).on('resize scroll', $.proxy(this.positioning, this)).scroll();
    };

    StickyPanel.prototype = {
        constructor: StickyPanel,

        inMobileWindow: function () {
            return ($(window).width() <= this.mobileBreakpoint);
        },

        positioning: function () {
            this.setPosition();
            if (this.$subPanel.length > 0) {
                this.toggleSubPanelVisibility();
            }
        },

        toggleSubPanelVisibility: function () {
            var subPanelFitInWindow = (this.panelHeight + this.topMargin * 2) < ($(window).outerHeight(true) - $('footer').height());
            if (subPanelFitInWindow) {
                this.$subPanel.show();
            } else {
                this.$subPanel.hide();
            }
        },

        setPosition: function () {
            // disable sticky if main sticky panel is higher than window height
            var fitInWindow = (this.$mainPanel.outerHeight(true) + this.topMargin * 2) < ($(window).outerHeight(true) - $('footer').height());
            if (!fitInWindow) {
                this.disableSticky();
                return;
            }

            // disable sticky in mobile screen if not mobile enabled
            if (this.inMobileWindow() && !this.mobileEnabled) {
                this.disableSticky();
                return;
            }

            if (this.inMobileWindow() !== this.inMobileSize) {
                this.disableSticky();
            }

            if (this.inMobileWindow() && this.responsive) {
                this.$stickyElem = this.$mobileSticky;
                this.topMargin = 0;
                this.inMobileSize = true;
            }
            else {
                this.$stickyElem = this.$panelWrapper;
                this.topMargin = 10;
                this.inMobileSize = false;
            }

            if (this.$stickyElem.offset().top !== 0 && this.offsetTop === 0) {
                this.offsetTop = this.$stickyElem.offset().top; // remember sticky panel offset before it turns sticky
            }

            //Toggle stickiness
            if (this.offsetTop - this.topMargin <= $(window).scrollTop()) {
                this.enableSticky();
            } else {
                this.disableSticky();
                this.offsetTop = 0;
            }
        },

        disableSticky: function () {
            this.$placeholder.hide();

            this.$stickyElem.css({
                position: 'relative',
                top: 0
            });
            this.$stickyElem.removeClass('StickyPanel--Enabled').addClass('StickyPanel--Disabled');
        },

        enableSticky: function () {
            this.$stickyElem.css({
                position: 'fixed',
                top: this.topMargin + 'px'
            });
            this.$stickyElem.removeClass('StickyPanel--Disabled').addClass('StickyPanel--Enabled');

            // display placeholder to prevent content following sticky element from jumping up at the time switching to being sticky
            // TO DO: how to detect if there is content following sticky element (visually) and not do this when the sidebar is outside of main content flow
            this.$placeholder.height(this.$stickyElem.outerHeight(true));
            this.$placeholder.insertAfter(this.$stickyElem);
            this.$placeholder.show();
        }
    };

    $.fn.stickyPanel = function () {
        return this.each(function () {
            var mobileBreakpoint = 700;
            new StickyPanel($(this), mobileBreakpoint);
        });
    };

})(jQuery);

// $(function () {
//     $('.sticky-panel-wrapper').stickyPanel();
// });


