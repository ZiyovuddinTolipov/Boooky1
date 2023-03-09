let navbar_wrapper = document.getElementById("navbar_wrapper");
let navbar = `
<header class="header mf1-position-relative js-header ">
<div class="header__container mf1-container mf1-max-width-lg">
  <div class="header__logo">
	<a href="#0">
	<img src="/assets/LogoBox.png" style="width:50px;height: 50px;" alt="Boooky Logo">
	</a>
  </div>

  <button class="mf1-btn mf1-btn--subtle header__trigger js-header__trigger" aria-label="Toggle menu" aria-expanded="false" aria-controls="header-nav">
	<i class="header__trigger-icon" aria-hidden="true"></i>
	<span>Menu</span>
  </button>

  <nav class="header__nav js-header__nav" id="header-nav" role="navigation" aria-label="Main">
	<div class="header__nav-inner">
	  <div class="header__label">Main menu</div>
	  <ul class="header__list">
		<li class="header__item"><a href="#0" class="header__link">Biz Haqimizda</a></li>
		<li class="header__item"><a href="#0" class="header__link">Blog</a></li>
		<li class="header__item"><a href="#0" class="header__link" aria-current="page">Reyting</a></li>
		<li class="header__item"><a href="#0" class="header__link">Kitoblar vs Ijodkorlar</a></li>
		<li class="header__item"><a href="#0" class="header__link">Contact</a></li>
		<li class="header__item header__item--divider" aria-hidden="true"></li>
		<li class="header__item"><a href="#0" class="header__nav-btn mf1-btn mf1-btn--primary">Register</a></li>
	  </ul>
	</div>
  </nav>
</div>
</header>`;

// utility functions
if (!Util) function Util() {}

Util.hasClass = function (el, className) {
  return el.classList.contains(className);
};

Util.addClass = function (el, className) {
  var classList = className.split(" ");
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(" "));
};

Util.removeClass = function (el, className) {
  var classList = className.split(" ");
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(" "));
};

Util.toggleClass = function (el, className, bool) {
  if (bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

// File#: _1_main-header
// Usage: codyhouse.co/license
(function () {
  var mainHeader = document.getElementsByClassName("js-header");
  if (mainHeader.length > 0) {
    var trigger = mainHeader[0].getElementsByClassName("js-header__trigger")[0],
      nav = mainHeader[0].getElementsByClassName("js-header__nav")[0];

    // we'll use these to store the node that needs to receive focus when the mobile menu is closed
    var focusMenu = false;

    //detect click on nav trigger
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      toggleNavigation(!Util.hasClass(nav, "header__nav--is-visible"));
    });

    // listen for key events
    window.addEventListener("keyup", function (event) {
      // listen for esc key
      if (
        (event.keyCode && event.keyCode == 27) ||
        (event.key && event.key.toLowerCase() == "escape")
      ) {
        // close navigation on mobile if open
        if (
          trigger.getAttribute("aria-expanded") == "true" &&
          isVisible(trigger)
        ) {
          focusMenu = trigger; // move focus to menu trigger when menu is close
          trigger.click();
        }
      }
      // listen for tab key
      if (
        (event.keyCode && event.keyCode == 9) ||
        (event.key && event.key.toLowerCase() == "tab")
      ) {
        // close navigation on mobile if open when nav loses focus
        if (
          trigger.getAttribute("aria-expanded") == "true" &&
          isVisible(trigger) &&
          !document.activeElement.closest(".js-header")
        )
          trigger.click();
      }
    });

    // listen for resize
    var resizingId = false;
    window.addEventListener("resize", function () {
      clearTimeout(resizingId);
      resizingId = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
      if (
        !isVisible(trigger) &&
        Util.hasClass(mainHeader[0], "header--expanded")
      )
        toggleNavigation(false);
    }
  }

  function isVisible(element) {
    return (
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    );
  }

  function toggleNavigation(bool) {
    // toggle navigation visibility on small device
    Util.toggleClass(nav, "header__nav--is-visible", bool);
    Util.toggleClass(mainHeader[0], "header--expanded", bool);
    trigger.setAttribute("aria-expanded", bool);
    if (bool) {
      //opening menu -> move focus to first element inside nav
      nav
        .querySelectorAll(
          "[href], input:not([disabled]), button:not([disabled])"
        )[0]
        .focus();
    } else if (focusMenu) {
      focusMenu.focus();
      focusMenu = false;
    }
  }
})();


navbar_wrapper.innerHTML = navbar;