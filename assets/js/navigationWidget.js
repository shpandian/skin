'use strict';
var $ = require('jquery');

var NavigationWidget = function () {
    var HEADER_HEIGHT = 100;
    var docked = false;
    var $navigation = $('.left-nav');
    var $sectionLevelNavItems = $('.left-nav > ul > li');
    var sections;

    function dockNavigation() {
        docked = true;
        $navigation.addClass('docked');
    }

    function releaseDock() {
        docked = false;
        $navigation.removeClass('docked');
    }

    function isScrollBelowHeader(currentPosition) {
        return currentPosition > HEADER_HEIGHT;
    }

    function updateHighlightedSection(scrollTop) {
        var i, currentSectionId;

        function isElementInViewport($element) {
            var elementHeight = $element.height();
            return ($element.offset().top + elementHeight) > (scrollTop);
        }

        for (i = 0; i < sections.length; i++) {
            if (isElementInViewport($('#' + sections[i].id))) {
                $sectionLevelNavItems.removeClass('active');
                currentSectionId = sections[i].id;
                $('[href="#' + currentSectionId + '"]').parent().addClass('active');
                break;
            }
        }
    }

    function scrollHandler() {
        var currentPosition = $(window).scrollTop();

        if (isScrollBelowHeader(currentPosition)) {
            dockNavigation();
        } else {
            releaseDock();
        }

        updateHighlightedSection(currentPosition);
    }

    function findSections() {
        return $('section').map(function (index, element) {
            return {
                id: element.id,
                offsetTop: element.offsetTop
            };
        }).sort(function (a, b) {
            if (a === b) {
                return 0;
              } else if (a.offsetTop > b.offsetTop) {
                return 1;
              } else {
                return -1;
              }
        });
    }

    (function initialize() {
        sections = findSections();
        $(window).scroll(scrollHandler);
    })();


    return {
        isDocked: function () {
            return docked;
        },
        findSections: findSections,
        isScrollBelowHeader: isScrollBelowHeader,
        dockNavigation: dockNavigation,
        releaseDock: releaseDock
    };
};

module.exports = NavigationWidget;
