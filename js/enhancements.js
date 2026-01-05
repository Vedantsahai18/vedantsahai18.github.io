/**
 * Simple enhancements for Vedant Sahai Portfolio
 * Safe client-side improvements for GitHub Pages
 */

(function() {
    'use strict';

    // Wait for everything to load
    window.addEventListener('load', function() {

        // Ensure loader is removed (backup to main.js)
        setTimeout(function() {
            var loader = document.getElementById('ftco-loader');
            if (loader) {
                loader.classList.remove('show');
                loader.style.display = 'none';
            }
        }, 500);

        // Create and add scroll progress bar
        createScrollProgress();

        // Create and add back to top button
        createBackToTop();

        // Add smooth scroll to navigation
        enhanceNavigation();

        // Add external link security
        secureExternalLinks();

    });

    // Scroll Progress Bar
    function createScrollProgress() {
        var progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = 'position: fixed; top: 0; left: 0; width: 0%; height: 3px; background: linear-gradient(90deg, #007bff, #00d4ff); z-index: 9999; transition: width 0.1s;';
        document.body.insertBefore(progressBar, document.body.firstChild);

        window.addEventListener('scroll', function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Back to Top Button
    function createBackToTop() {
        var button = document.createElement('button');
        button.innerHTML = '<i class="fa fa-arrow-up"></i>';
        button.id = 'back-to-top';
        button.setAttribute('aria-label', 'Back to top');
        button.style.cssText = 'position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; border-radius: 50%; background: #007bff; color: white; border: none; cursor: pointer; opacity: 0; transition: opacity 0.3s, transform 0.3s; z-index: 9998; font-size: 20px; box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);';

        button.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.6)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.4)';
        });

        document.body.appendChild(button);

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
    }

    // Enhance Navigation
    function enhanceNavigation() {
        var navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                var href = this.getAttribute('href');
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    var offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Secure External Links
    function secureExternalLinks() {
        var links = document.querySelectorAll('a[target="_blank"]');
        links.forEach(function(link) {
            if (!link.getAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

})();
