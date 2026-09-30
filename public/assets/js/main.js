/************************************************************
 * Ayra - Doctor & Medical HTML5 Template
 * Main JavaScript File
 * Clean ThemeForest Approved Version
 ************************************************************/

(function ($) {
    "use strict";

    /* ==============================
       DOM READY INIT
    ============================== */
    $(function () {

        initMenuActive();
        initCounters();
        initTabs();
        initFadeUp();
        initTestimonialSlider();
        initMarquee();
        initProductGallery();
        initCountdown();

        /* ==============================
           MENU INIT (SUBMENU ICON + CLASSES)
        ============================== */

        $(".mainmenu ul li:has(ul)").addClass("has-submenu small-submenu");

        $(".mainmenu ul li:has(ul)").each(function () {
            if (!$(this).children("span").length) {
                $(this).prepend("<span></span>");
            }
        });

        $(".mainmenu ul li ul").addClass("sub-menu");

        /* ==============================
           AOS INIT
        ============================== */
        if (typeof AOS !== "undefined") {
            AOS.init({
                duration: 900,
                offset: 120,
                easing: "ease-in-out",
                once: false,
                disable: () => window.innerWidth < 768
            });
        }
    });

    /* ==============================
       MENU ACTIVE STATE
    ============================== */
    function initMenuActive() {
        const menuLinks = document.querySelectorAll('#navigation_menu > li > a');
        if (!menuLinks.length) return;

        menuLinks.forEach(link => {
            link.addEventListener('click', function () {
                menuLinks.forEach(item =>
                    item.parentElement.classList.remove('active')
                );
                this.parentElement.classList.add('active');
            });
        });
    }

    /* ==============================
       COUNTERS
    ============================== */
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        const section = document.querySelector('.counter-section');
        if (!counters.length || !section) return;

        const running = new Map();

        const formatValue = (value, format) => {
            if (format === 'k' && value >= 1000) {
                return Math.floor(value / 1000) + 'K';
            }
            return value.toLocaleString();
        };

        const animateCounters = () => {
            counters.forEach(counter => {
                if (running.get(counter)) return;

                const target = Number(counter.dataset.target || 0);
                const suffix = counter.dataset.suffix || '';
                const format = counter.dataset.format || '';
                const duration = 1200;
                const start = performance.now();

                running.set(counter, true);

                const update = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const value = Math.floor(progress * target);

                    counter.textContent = formatValue(value, format) + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = formatValue(target, format) + suffix;
                    }
                };

                requestAnimationFrame(update);
            });
        };

        const resetCounters = () => {
            counters.forEach(counter => {
                counter.textContent = '0';
                running.delete(counter);
            });
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.isIntersecting ? animateCounters() : resetCounters();
            });
        }, { threshold: 0.6 });

        observer.observe(section);
    }

    /* ==============================
       TABS
    ============================== */
    function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const panels = document.querySelectorAll('.tab-panel');

        if (!tabBtns.length) return;

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {

                tabBtns.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');

                const panel = document.getElementById(btn.dataset.tab);
                if (panel) panel.classList.add('active');
            });
        });
    }

    /* ==============================
       FADE UP
    ============================== */
    function initFadeUp() {
        const items = document.querySelectorAll('.fade-up');
        if (!items.length) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.2 });

        items.forEach(item => observer.observe(item));
    }

    /* ==============================
       TESTIMONIAL SLIDER
    ============================== */
    function initTestimonialSlider() {
        const $slider = $('.testimonial-box');
        if (!$slider.length || !$.fn.slick) return;

        $slider.slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            arrows: true,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 1 } },
                { breakpoint: 991, settings: { slidesToShow: 2 } },
                { breakpoint: 767, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } }
            ]
        });
    }

    /* ==============================
       MARQUEE
    ============================== */
    function initMarquee() {
        const track = document.getElementById('marquee');
        if (!track || !track.children.length) return;

        let offset = 0;
        const speed = 0.4;
        const gap = 80;

        function animate() {
            offset -= speed;

            const first = track.children[0];
            const width = first.offsetWidth + gap;

            if (Math.abs(offset) >= width) {
                offset += width;
                track.appendChild(first);
            }

            track.style.transform = `translateX(${offset}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    }

    /* ==============================
       PRODUCT GALLERY
    ============================== */
    function initProductGallery() {
        const mainImage = document.getElementById("mainProductImage");
        const thumbs = document.querySelectorAll(".thumb");
        const zoomLink = document.querySelector(".zoom-img");

        if (!mainImage || !thumbs.length) return;

        const title = document.getElementById("productTitle");
        const price = document.getElementById("productPrice");
        const desc = document.getElementById("productDesc");

        thumbs.forEach(thumb => {
            thumb.addEventListener("click", function () {

                thumbs.forEach(t => t.classList.remove("active"));
                this.classList.add("active");

                const img = this.querySelector("img");

                if (img) {
                    mainImage.src = img.src;
                    if (zoomLink) zoomLink.setAttribute("href", img.src);
                }

                if (title && this.dataset.title) title.textContent = this.dataset.title;
                if (price && this.dataset.price) price.textContent = this.dataset.price;
                if (desc && this.dataset.desc) desc.textContent = this.dataset.desc;
            });
        });
    }

    /* ==============================
       COUNTDOWN
    ============================== */
    function initCountdown() {
        const secondsEl = document.querySelector(".seconds");
        if (!secondsEl) return;

        let seconds = 59;

        setInterval(() => {
            secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
            seconds = seconds <= 0 ? 59 : seconds - 1;
        }, 1000);
    }

    /* ==============================
       MENU TOGGLE (MOBILE)
    ============================== */
    $(document).on('click', '#menu-toggle', function (e) {
        e.preventDefault();

        $('#menu').toggleClass('active');
        $('#menu_handler').toggleClass('active');
        $('.header-area').toggleClass('active');
        $('body').toggleClass('active');
    });

    /* ==============================
       SUBMENU TOGGLE
    ============================== */
    $(document).on('click', '.has-submenu > span', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $parent = $(this).parent();

        $parent.toggleClass("active");
        $parent.children("ul.sub-menu").first().toggleClass("active");
    });

    /* ==============================
       MEGA MENU
    ============================== */
    $(document).on('click', '.megamenu > li > span', function (e) {
        e.preventDefault();

        $(this).next('.mega-submenu').toggleClass('active');
    });

    /* ==============================
       SEARCH CLOSE MENU
    ============================== */
    $(document).on('click', '.searchToggle', function () {
        $('#menu, #menu_handler, #menu-toggle, .header-area, body').removeClass('active');
    });

    /* ==============================
       HOVER EFFECT (DESKTOP)
    ============================== */
    $(document).on('mouseenter', '.mainmenu ul.dropdown li', function () {
        $(this).addClass('hover');
    });

    $(document).on('mouseleave', '.mainmenu ul.dropdown li', function () {
        $(this).removeClass('hover');
    });

    /* ==============================
       MAGNIFIC POPUP
    ============================== */
    $('.zoom-img').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function () {
                return $('#mainProductImage');
            }
        }
    });

    /* ==============================
       OUTSIDE CLICK CLOSE MENU (IMPORTANT UX FIX)
    ============================== */
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#menu, #menu-toggle').length) {
            $('#menu, #menu_handler, #menu-toggle, .header-area, body')
                .removeClass('active');
        }
    });

})(jQuery);