$(document).ready(function () {
    let previewBtns = $('.c-snippet__header');
    let previewMobileBtn = $('#header-mobile');
    let previewDesktopBtn = $('#header-desktop');
    let snippetDesktop = $('#snippet-desktop');
    let snippetMobile = $('#snippet-mobile');
    let description = $('.c-snippet__description');
    let url = $('.c-snippet__url');
    let desktopTitle = $('#desktop-title');
    let desktopDescription = $('#desktop-description');
    let mobileDescription = $('#mobile-description');
    let mobileTitle = $('#mobile-title');
    let counterUrlMobile = $('#counter-url-mobile');
    let counterUrlDesktop = $('#counter-url-desktop');
    let counterDescriptionMobile = $('#counter-description-mobile');
    let counterDescriptionDesktop = $('#counter-description-desktop');
    let counterTitle = $('#counter-title');
    let desktopUrlPreview = $('#desktop-url-preview');
    let mobileUrlPreview = $('.c-snippet__url--mobile');
    let defaultTitle = desktopTitle.text();
    let defaultDescription = description.first().text();
    let defaultUrl = url.first().text();
    let title = $('.c-snippet__title');
    let titleInput = $('#title');
    let descriptionInput = $('#description');
    let urlInput = $('#url');
    let titlePxRemaining = $('#title-px-remaining');
    let titleCharRemaining = $('#title-char-remaining');
    let descriptionPxRemaining = $('.description-px-remaining');
    let descriptionCharRemaining = $('.description-char-remaining');
    let urlPxRemaining = $('#url-px-remaining');
    let urlCharRemaining = $('#url-char-remaining');
    let titleBar = $('#title-bar');
    let descriptionBarMobile = $('#description-bar-mobile');
    let descriptionBarDesktop = $('#description-bar-desktop');
    let urlBarMobile = $('#url-bar-mobile');
    let urlBarDesktop = $('#url-bar-desktop');
    let hiddenDescriptionDesktop = $('#hidden-description-desktop');
    let hiddenDescriptionMobile = $('#hidden-description-mobile');
    let hiddenUrl = $('.c-form__hidden-url');
    let hiddenTitle = $('.c-form__hidden-title');
    let mobileActive = false;

    function toggleMobile() {
        if (mobileActive) {
            snippetMobile.css('visibility', 'visible');
            snippetMobile.css('height', 'auto');
            snippetDesktop.css('height', '0');
            snippetDesktop.css('visibility', 'hidden');
            previewDesktopBtn.addClass('c-snippet__header--inactive');
            previewMobileBtn.removeClass('c-snippet__header--inactive');
            counterUrlDesktop.addClass('c-form__counter--inactive');
            counterUrlMobile.removeClass('c-form__counter--inactive');
            urlBarDesktop.addClass('c-form__progress-bar--inactive');
            urlBarMobile.removeClass('c-form__progress-bar--inactive');
            counterDescriptionDesktop.addClass('c-form__counter--inactive');
            counterDescriptionMobile.removeClass('c-form__counter--inactive');
            descriptionBarDesktop.addClass('c-form__progress-bar--inactive');
            descriptionBarMobile.removeClass('c-form__progress-bar--inactive');

        } else {
            snippetMobile.css('height', '0');
            snippetMobile.css('visibility', 'hidden');
            snippetDesktop.css('visibility', 'visible');
            snippetDesktop.css('height', 'auto');
            previewDesktopBtn.removeClass('c-snippet__header--inactive');
            previewMobileBtn.addClass('c-snippet__header--inactive');
            counterUrlDesktop.removeClass('c-form__counter--inactive');
            counterUrlMobile.addClass('c-form__counter--inactive');
            urlBarDesktop.removeClass('c-form__progress-bar--inactive');
            urlBarMobile.addClass('c-form__progress-bar--inactive');
            counterDescriptionDesktop.removeClass('c-form__counter--inactive');
            counterDescriptionMobile.addClass('c-form__counter--inactive');
            descriptionBarDesktop.removeClass('c-form__progress-bar--inactive');
            descriptionBarMobile.addClass('c-form__progress-bar--inactive');
        }
    }

    function liveEdit(input, output) {
        output.text(input);
    }

    function addEllipsis(element, widthWithoutEllipsis) {
        let lastIndex = element.text().lastIndexOf(" ");
        element.text(element.text().substr(0, lastIndex));

        let i = 0;

        while (i < 1) {
            if (Math.round(element.width(), 0) > widthWithoutEllipsis) {
                let latestIndex = element.text().lastIndexOf(" ");
                element.text(element.text().substr(0, latestIndex));
            } else {
                i = 1;
                element.text(element.text() + ' ...');
            }
        }
    }

    if ($(window).width() < 722) {
        mobileActive = true;
        toggleMobile();
    }

    $(window).resize(function (e) {
        if ($(window).width() < 722) {
            mobileActive = true
        }
        toggleMobile()
    });

    previewBtns.click(function (e) {
        previewBtns.addClass('c-snippet__header--inactive');
        $(this).removeClass('c-snippet__header--inactive');

        if ($(this).attr('id') === 'header-mobile') {
            mobileActive = true;
        } else {
            mobileActive = false;
        }

        toggleMobile();
    });

    titleInput.keyup(function (e) {
        liveEdit(titleInput.val(), title);
        liveEdit(titleInput.val(), hiddenTitle);
        let width = Math.round(hiddenTitle.width(), 0);
        let charCount = titleInput.val().length;
        titlePxRemaining.text(width);
        titleCharRemaining.text(charCount);
        titleBar.width((width / 590) * 100 + "%");
        if (titleInput.val() === "") {
            desktopTitle.text(defaultTitle);
            mobileTitle.text(defaultTitle);
        }

        if ((width >= 590 || width <= 284)) {
            addEllipsis(desktopTitle, 590);
            mobileTitle.text(desktopTitle.text());
            titleBar.addClass('c-form__progress-bar--error');
            counterTitle.addClass('c-form__counter--error');
        } else {
            titleBar.removeClass('c-form__progress-bar--error');
            counterTitle.removeClass('c-form__counter--error');
        }

    });

    descriptionInput.keyup(function (e) {
        liveEdit(descriptionInput.val(), desktopDescription);
        liveEdit(descriptionInput.val(), mobileDescription);
        liveEdit(descriptionInput.val(), hiddenDescriptionDesktop);
        liveEdit(descriptionInput.val(), hiddenDescriptionMobile);

        let width = Math.round(hiddenDescriptionDesktop.width(), 0);
        let charCount = descriptionInput.val().length;

        descriptionCharRemaining.text(descriptionInput.val().length);
        descriptionPxRemaining.text(width);

        descriptionBarDesktop.width((width / 920) * 100 + '%');
        descriptionBarMobile.width((width / 600) * 100 + '%');

        if (descriptionInput.val() === "") {
            description.text(defaultDescription);
        }

        if ((width >= 920 || width <= 430)) {
            addEllipsis(hiddenDescriptionDesktop, 925);
            desktopDescription.text(hiddenDescriptionDesktop.text());
            descriptionBarDesktop.addClass('c-form__progress-bar--error');
            counterDescriptionDesktop.addClass('c-form__counter--error');
        } else {
            descriptionBarDesktop.removeClass('c-form__progress-bar--error');
            counterDescriptionDesktop.removeClass('c-form__counter--error');
        }

        if (width >= 600) {
            addEllipsis(hiddenDescriptionMobile, 665);
            mobileDescription.text(hiddenDescriptionMobile.text());
            descriptionBarMobile.addClass('c-form__progress-bar--error');
            counterDescriptionMobile.addClass('c-form__counter--error');
        } else {
            descriptionBarMobile.removeClass('c-form__progress-bar--error');
            counterDescriptionMobile.removeClass('c-form__counter--error');
        }

    });

    urlInput.keyup(function (e) {
        liveEdit(urlInput.val(), hiddenUrl);
        liveEdit(urlInput.val(), url);

        let width = Math.round(hiddenUrl.width(), 0) + 13;
        let charCount = urlInput.val().length;

        urlPxRemaining.text(width);
        urlCharRemaining.text(charCount);

        urlBarDesktop.width((width / 600) * 100 + "%");
        urlBarMobile.width((charCount / 42) * 100 + "%");

        if (urlInput.val() === "") {
            url.text(defaultUrl);
        }

        // if (charCount > 42) {
        //     urlBarMobile.addClass('c-form__progress-bar--error');
        //     urlBarMobile.width('100%');
        //     mobileUrlPreview.text(mobileUrlPreview.text().substr(0, 42) + '...');
        //     counterUrlMobile.addClass('c-form__counter--error')
        // } else {
        //     urlBarMobile.removeClass('c-form__progress-bar--error');
        //     counterUrlMobile.removeClass('c-form__counter--error')
        // }

        if (width >= 600) {
            while (hiddenUrl.width() + 13 > 588) {
                hiddenUrl.text(hiddenUrl.text().slice(0, -1));
            }

            desktopUrlPreview.text(hiddenUrl.text() + "...");

            urlBarDesktop.addClass('c-form__progress-bar--error');
            counterUrlDesktop.addClass('c-form__counter--error')
        } else {
            urlBarDesktop.removeClass('c-form__progress-bar--error');
            counterUrlDesktop.removeClass('c-form__counter--error');
        }
    });

});
