!(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var e = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(e, function (e) {
        e.addEventListener(
          "submit",
          function (t) {
            !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated");
          },
          !1
        );
      });
    },
    !1
  );
})(),
  $(document).ready(function () {
    var e;
    $(".menu-list").length && $(".menu-list").slimScroll({ height: "100%" }),
      $(".header").length &&
        $(window).scroll(function () {
          1 < $(".header").offset().top ? $(".header").addClass("header-collapse") : $(".header").removeClass("header-collapse");
        }),
      $(".dropdown-menu a.dropdown-toggle").length &&
        $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
          return (
            $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),
            $(this).next(".dropdown-menu").toggleClass("show"),
            $(this)
              .parents("li.nav-item.dropdown.show")
              .on("hidden.bs.dropdown", function (e) {
                $(".dropdown-submenu .show").removeClass("show");
              }),
            !1
          );
        }),
      $("#scroll-nav a ").length &&
        $("#scroll-nav a").on("click", function () {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({ scrollTop: +e.offset().top }, 1500), !1;
          }
        }),
      $(".sidebar-nav-fixed a").length &&
        $(".sidebar-nav-fixed a").click(function (e) {
          var t;
          location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") ||
            location.hostname != this.hostname ||
            ((t = (t = $(this.hash)).length ? t : $("[name=" + this.hash.slice(1) + "]")).length &&
              (e.preventDefault(),
              $("html, body").animate({ scrollTop: t.offset().top - 90 }, 1e3, function () {
                var e = $(t);
                if ((e.focus(), e.is(":focus"))) return !1;
                e.attr("tabindex", "-1"), e.focus();
              }))),
            $(".sidebar-nav-fixed a").each(function () {
              $(this).removeClass("active");
            }),
            $(this).addClass("active");
        }),
      $("#program-date").length && new Litepicker({ element: document.getElementById("program-date") }),
      $("#mapid").length &&
        ((e = L.map("mapid").setView([51.505, -0.09], 13)),
        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
        }).addTo(e)),
      $(".popup-youtube").length && $(".popup-youtube").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
      $('[data-toggle="tooltip"]').length && $('[data-toggle="tooltip"]').tooltip(),
      $('[data-toggle="popover"]').length && $('[data-toggle="popover"]').popover(),
      $("#price_ranger").length && $("#price_ranger").ionRangeSlider({ type: "double", grid: !0, min: 0, max: 40, from: 5, to: 32, prefix: "$" }),
      $(".cc-inputmask").length && $(".cc-inputmask").inputmask("9999 9999 9999 9999"),
      $(".cvv").length && $(".cvv").inputmask("999"),
      $("#pageSlide").length &&
        tns({
          container: "#pageSlide",
          edgePadding: 50,
          fixedWidth: 500,
          swipeAngle: !1,
          slideBy: 1,
          autoplay: !0,
          speed: 400,
          autoplayButtonOutput: !1,
          controls: !1,
          nav: !1,
          responsive: { 1400: { items: 3, fixedWidth: 500 }, 768: { edgePadding: 15, fixedWidth: 355, items: 1 }, 1200: { items: 3 }, 375: { edgePadding: 15, fixedWidth: 315, items: 1 } },
        }),
      $("#heroSlide").length &&
        tns({
          container: "#heroSlide",
          autoplayTimeout: 4e3,
          controls: !1,
          nav: !1,
          items: 3,
          slideBy: "1",
          autoplay: !0,
          speed: 400,
          autoplayButtonOutput: !1,
          responsive: { 1400: { items: 3 }, 768: { gutter: 30 }, 1200: { items: 3 }, 375: { edgePadding: 50, items: 1 } },
        });
  });
