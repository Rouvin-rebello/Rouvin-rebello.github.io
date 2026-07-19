/* ==========================================================================
   Rouvin Rebello — Portfolio interactions
   ========================================================================== */
(function () {
    'use strict';

    /* ----- Certificate / project buttons (data-url) ----- */
    document.querySelectorAll('.certificate-button[data-url]').forEach(function (button) {
        button.addEventListener('click', function () {
            var url = button.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank', 'noopener');
            }
        });
    });

    /* ----- Theme toggle (persisted) ----- */
    var root = document.documentElement;
    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) {}
        });
    }

    /* ----- Mobile menu ----- */
    var menuToggle = document.getElementById('menu-toggle');
    var navLinks = document.getElementById('nav-links');
    function closeMenu() {
        if (!navLinks) return;
        navLinks.classList.remove('open');
        if (menuToggle) {
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            var open = navLinks.classList.toggle('open');
            menuToggle.classList.toggle('active', open);
            menuToggle.setAttribute('aria-expanded', String(open));
        });
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }

    /* ----- Smooth scroll for in-page anchors ----- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var id = this.getAttribute('href');
            if (id === '#') return;
            var target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ----- Header: shadow + hide-on-scroll-down ----- */
    var header = document.getElementById('site-header');
    var toTop = document.getElementById('to-top');
    var lastScroll = 0;
    function onScroll() {
        var y = window.pageYOffset;

        if (header) {
            header.classList.toggle('scrolled', y > 20);
            if (y > lastScroll && y > 300 && !(navLinks && navLinks.classList.contains('open'))) {
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
        }

        if (toTop) {
            toTop.classList.toggle('show', y > 500);
        }

        lastScroll = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toTop) {
        toTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ----- Scroll reveal ----- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ----- Active nav link highlighting ----- */
    var sections = document.querySelectorAll('main section[id]');
    var navMap = {};
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        navMap[link.getAttribute('href')] = link;
    });
    if ('IntersectionObserver' in window && sections.length) {
        var navObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var link = navMap['#' + entry.target.id];
                    if (link) {
                        Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove('active'); });
                        link.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (s) { navObserver.observe(s); });
    }

    /* ----- Footer year ----- */
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
})();
