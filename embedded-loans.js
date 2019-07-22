(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("tc_display_widget").innerHTML = xhttp.responseText;
		// change the default values on filter UI
		if (greenOrClassicCar_attr != "classic") {
			document.querySelectorAll(".tc-green-radio-button")[0].classList.remove("tc-green-radio-button-check");
			document.querySelectorAll(".tc-green-radio-button")[1].classList.add("tc-green-radio-button-check");
		}
		document.getElementById("carAge").value = "3-4";
    }
  };

  // Funtion to retrieve the paramters from the URL. Should be more cross-browser compatible than the URL() object
  function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
      } else {
        query_string[key].push(decodeURIComponent(value));
      }
    }
    return query_string;
  }
  
  var query = window.location.search.substring(1);
  var qs = parse_query_string(query);

  var domain = "https://topcompare.dash.ba/", prov_attr;
  if (typeof qs.w !== "undefined") { 
    prov_attr = qs.w;
  }else{
    prov_attr = document.getElementById("tc_display_widget").getAttribute("data-provider");
  }
  var amount_attr = 7500;
  var duration_attr = 24;
  var carAge_attr = "new";
  var greenOrClassicCar_attr = "classic";
  if (typeof qs.loanAmount !== "undefined") { 
    amount_attr = qs.loanAmount;
  } else if (document.getElementById("tc_display_widget").getAttribute("data-loan-amount") !== null) {
    amount_attr = document.getElementById("tc_display_widget").getAttribute("data-loan-amount");
  }
  if (typeof qs.loanDuration !== "undefined") { 
    duration_attr = qs.loanDuration;
  } else if (document.getElementById("tc_display_widget").getAttribute("data-loan-duration") !== null){
    duration_attr = document.getElementById("tc_display_widget").getAttribute("data-loan-duration");
  }
  if (typeof qs.carAge !== "undefined") { 
    carAge_attr = qs.carAge;
  } else if (document.getElementById("tc_display_widget").getAttribute("data-car-age") !== null){
    carAge_attr = document.getElementById("tc_display_widget").getAttribute("data-car-age");
  }
  if (typeof qs.greenOrClassicCar !== "undefined") { 
    greenOrClassicCar_attr = qs.greenOrClassicCar;
  } else if (document.getElementById("tc_display_widget").getAttribute("data-car-type") !== null){
    greenOrClassicCar_attr = document.getElementById("tc_display_widget").getAttribute("data-car-type");
  }

  gtmTCWidget = document.getElementById("tc_display_widget").getAttribute("data-gtm");
  if (!gtmTCWidget)
    gtmTCWidget = 'GTM-K9LSPW3';

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = domain + "/css/_widget_css_code.css";
  if (document.getElementById("tc_display_widget").getAttribute("data-stylesheet") !== null) {
    let css_attr = document.getElementById("tc_display_widget").getAttribute("data-stylesheet");
    css.href = "https://cdn.jsdelivr.net/gh/topcompare/widgets/stylesheet-"+css_attr+".css";
  }
  window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(css);

  var googleTagManager = document.createElement("script");
  googleTagManager.type = "text/javascript";
  googleTagManager.src = domain + "/js/googleTag.js";
  window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(googleTagManager);

  var EQCSS = document.createElement("script");
  EQCSS.type = "text/javascript";
  EQCSS.src = domain + "/js/EQCSS.min.js";
  window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(EQCSS);

  xhttp.open("GET", domain + "/w/" + prov_attr + "?price=" + amount_attr + "&duration=" + duration_attr + "&carAge=" + carAge_attr+ "&greenOrClassicCar=" + greenOrClassicCar_attr, true);
  xhttp.send();
})();

(function (window, document, version, callback) {

  var j, d;
  var loaded = false;
  if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    script.onload = script.onreadystatechange = function () {
      if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
        callback((j = window.jQuery).noConflict(1), loaded = true);
        j(script).remove();
      }
    };

    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);

  }
})(window, document, "1.3", function ($, jquery_loaded) {
  $(function () {
    $("#tc_display_widget").on("change", '#googleTagManagerCode', function () {
    });

    $("#tc_display_widget").on("click", ".tc-mobile-hamburger", function () {
      $('.tc-main-content-left').slideToggle();
    });
    $("#tc_display_widget").on("click", "#tc-close-hamburger", function () {
      $('.tc-main-content-left').slideToggle();
    });

    //GREEN RADIO BUTTON CHANGE COLOR
    $("#tc_display_widget").on("click", ".tc-green-radio-button", function () {
      $('.tc-green-radio-button').removeClass('tc-green-radio-button-check');
      $(this).addClass('tc-green-radio-button-check');

    });

    //desktop
    $("#tc_display_widget").on("click", ".tc-more-info", function () {
      $('.tc-more-info-holder' + $(this).data('index')).slideToggle();
      var indexInfo = $('.tc-more-info' + $(this).data('index'));
      var titleNew = $(this).text();
      indexInfo.text(indexInfo.data('title'));
      indexInfo.data('title', titleNew);
      return false;
    });

    $("#tc_display_widget").on("click", ".tc-more-info-sponsored", function () {
      $('.tc-more-info-holder-sponsored' + $(this).data('index')).slideToggle();
      var indexInfo = $('.tc-more-info-sponsored' + $(this).data('index'));
      var titleNew = $(this).text();
      indexInfo.text(indexInfo.data('title'));
      indexInfo.data('title', titleNew);
      return false;
    });
    
    //mobile
    $("#tc_display_widget").on("click", ".tc-more-info-sponsored-mobile", function () {
      $('.tc-more-info-holder-sponsored' + $(this).data('index')).slideToggle();
      var indexInfo = $('.tc-more-info-sponsored-mobile' + $(this).data('index'));
      var titleNew = $(this).text();
      indexInfo.text(indexInfo.data('title'));
      indexInfo.data('title', titleNew);
      return false;

    });
    $("#tc_display_widget").on("click", ".tc-more-info-mobile", function () {
      $('.tc-more-info-holder' + $(this).data('index')).slideToggle();
      var indexInfo = $('.tc-more-info-mobile' + $(this).data('index'));
      var titleNew = $(this).text();
      indexInfo.text(indexInfo.data('title'));
      indexInfo.data('title', titleNew);
      return false;
    });

    //arrow
    $("#tc_display_widget").on("click", ".tc-arrow-up-sponsored", function () {
      $('.tc-more-info-pros-cons-description-sponsored' + $(this).data('index')).slideToggle();
      if ($(this).hasClass('tc-arrow-down-sponsored')) {
        $(this).removeClass('tc-arrow-down-sponsored');
      } else {
        $(this).addClass('tc-arrow-down-sponsored');
      }
      return false;
    });

    $("#tc_display_widget").on("click", ".tc-arrow-up", function () {
      $('.tc-more-info-pros-cons-description' + $(this).data('index')).slideToggle();
      if ($(this).hasClass('tc-arrow-down')) {
        $(this).removeClass('tc-arrow-down');
      } else {
        $(this).addClass('tc-arrow-down');
      }
      return false;
    });

    $("#tc_display_widget").on("mouseup touchend", ".tc-drag-slidecontainer", function () {
      callAjax(false);
    });
    $("#tc_display_widget").on("input", ".tc-drag-slidecontainer", function () {
      var price = $("#tcRange").val();
      $('#priceHolder').val("\u20AC " + price);
    });
    $("#tc_display_widget").on("change", "#carAge", function () {
      callAjax(false);
    });
    $("#tc_display_widget").on("click", ".tc-green-radio-button", function () {
      $('.tc-green-radio-button').removeClass('tc-green-radio-button-check');
      $(this).addClass('tc-green-radio-button-check');
      callAjax(false);
    });

    var delay = (function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();

    $("#tc_display_widget").keyup("#priceHolder", function () {
      var price = $('#priceHolder').val().replace(/[^0-9]/gi, '');
      $("#tcRange").val(price);
      $('#priceHolder').val("\u20AC " + price);
      delay(function () {
        callAjax(false);
      }, 500);
    });

    $("#tc_display_widget").keyup("#loanDuration", function () {
      delay(function () {
        callAjax(false);
      }, 500);
    });

    $("#tc_display_widget").on("click", ".tc-language-change", function (e) {
      e.preventDefault();
      var lang = $(this).data("lang");
      $("#lang").val(lang);
      callAjax(true);
    });

    function callAjax(fullLoad) {
      var url = $('#ajaxUrl').val();
      if (fullLoad)
        url = $('#ajaxUrlFull').val();

      var price = $("#tcRange").val();
      var duration = $("#loanDuration").val();
      var lang = $("#lang").val();

      //if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        'event': 'inputChanged',
        "inputChangedResult": "success"
      });
      //}
      var data = {
        'price': price,
        'lang': lang,
        'duration': duration
      };

      if ($("#carAge").length) {
        data.carAge = $("#carAge").val();
      }
      if ($(".tc-green-radio-button").length) {
        var greenVal = $(".tc-green-radio-button.tc-green-radio-button-check").data('val');
        data.greenOrClassicCar = greenVal;
      }

      $("#tc-data-show").hide();
      $(".tc-loader-content").show();
      $.ajax({

        url: url,
        data: data,
        success: function (data) {
          $(".tc-loader-content").hide();
          if (fullLoad) {
            $("#tc_display_widget").html(data);
            $('.tc-language-change').removeClass('tc-language-active');
            $('.tc-language-' + lang).addClass('tc-language-active');
          } else {

            $("#tc-data-show").show();
            $("#tc-data-show").html(data);
          }
        },
      });
    }
  });
});
