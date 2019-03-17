(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("tc_display_widget").innerHTML = xhttp.responseText;
        }
    };
    var prov_attr = document.getElementById("tc_display_widget").getAttribute("data-provider");
    var domain = "https://topcompare.dash.ba/";//document.getElementById("tc_display_widget").getAttribute("data-domain");

    gtmTCWidget = document.getElementById("tc_display_widget").getAttribute("data-gtm");
    if(!gtmTCWidget)
        gtmTCWidget = 'GTM-K9LSPW3';

    css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = domain + "/css/_widget_css_code.css";
    window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(css);

    googleTagManager = document.createElement("script");
    googleTagManager.type = "text/javascript";
    googleTagManager.src = domain + "/js/googleTag.js";
    window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(googleTagManager);

    EQCSS = document.createElement("script");
    EQCSS.type = "text/javascript";
    EQCSS.src = domain + "/js/EQCSS.min.js"
    window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(EQCSS);


    //eqcss = document.createElement("script");
    //eqcss.type = "text/javascript";
    //eqcss.src =window.location.origin+"/js/EQCSS.min.js"
    //window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(eqcss);

    xhttp.open("GET", domain + "/w/" + prov_attr, true);
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


        //$("#tc_display_widget").on("click", '.apply-now', function () {
        //    window.open($(this).data('href'), '_blank');
        //});

        $("#tc_display_widget").on("click", ".tc-mobile-hamburger", function () {
            $('.tc-main-content-left').slideToggle()


        });
        $("#tc_display_widget").on("click", "#tc-close-hamburger", function () {
            $('.tc-main-content-left').slideToggle()

        });

        //GREEN RADIO BUTTON CHANGE COLOR

        $("#tc_display_widget").on("click", ".tc-green-radio-button", function () {
            $('.tc-green-radio-button').removeClass('tc-green-radio-button-check')
            $(this).addClass('tc-green-radio-button-check')

        });


        //desktop
        $("#tc_display_widget").on("click", ".tc-more-info", function () {
            $('.tc-more-info-holder' + $(this).data('index')).slideToggle()

            var indexInfo = $('.tc-more-info' + $(this).data('index'))
            var titleNew = $(this).text();
            indexInfo.text(indexInfo.data('title'));
            indexInfo.data('title', titleNew)
            return false;
        });

        $("#tc_display_widget").on("click", ".tc-more-info-sponsored", function () {
            $('.tc-more-info-holder-sponsored' + $(this).data('index')).slideToggle()

            var indexInfo = $('.tc-more-info-sponsored' + $(this).data('index'))
            var titleNew = $(this).text();
            indexInfo.text(indexInfo.data('title'));
            indexInfo.data('title', titleNew)
            return false;
        });
        //mobile
        $("#tc_display_widget").on("click", ".tc-more-info-sponsored-mobile", function () {
            $('.tc-more-info-holder-sponsored' + $(this).data('index')).slideToggle()

            var indexInfo = $('.tc-more-info-sponsored-mobile' + $(this).data('index'))
            var titleNew = $(this).text();
            indexInfo.text(indexInfo.data('title'));
            indexInfo.data('title', titleNew)
            return false;

        });
        $("#tc_display_widget").on("click", ".tc-more-info-mobile", function () {
            $('.tc-more-info-holder' + $(this).data('index')).slideToggle()

            var indexInfo = $('.tc-more-info-mobile' + $(this).data('index'))
            var titleNew = $(this).text();
            indexInfo.text(indexInfo.data('title'));
            indexInfo.data('title', titleNew)
            return false;
        });

        //arrow
        $("#tc_display_widget").on("click", ".tc-arrow-up-sponsored", function () {
            $('.tc-more-info-pros-cons-description-sponsored' + $(this).data('index')).slideToggle()

            if ($(this).hasClass('tc-arrow-down-sponsored')) {
                $(this).removeClass('tc-arrow-down-sponsored')
            } else {
                $(this).addClass('tc-arrow-down-sponsored')
            }
            return false;
        });

        $("#tc_display_widget").on("click", ".tc-arrow-up", function () {
            $('.tc-more-info-pros-cons-description' + $(this).data('index')).slideToggle()

            if ($(this).hasClass('tc-arrow-down')) {
                $(this).removeClass('tc-arrow-down')
            } else {
                $(this).addClass('tc-arrow-down')
            }

            return false;
        });

        $("#tc_display_widget").on("mouseup touchend", ".tc-drag-slidecontainer", function () {
            callAjax(false);
        })
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
        //$("#tc_display_widget").on("change", "#priceHolder", function () {
        //    console.log('usao')
        //    var price = $(this).val().replace(/[^0-9]/gi, '');
        //    $("#tcRange").val(price);
        //    $('#priceHolder').val("\u20AC " + price);
        //    callAjax(false);
        //
        //
        //});

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
        //$("#tc_display_widget").on("change", "#loanDuration", function () {
        //    callAjax(false);
        //});

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
                    "inputChangedResult" : "success"
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
            $(".tc-loader-content").show()
            $.ajax({

                url: url,
                data: data,
                success: function (data) {
                    $(".tc-loader-content").hide();
                    if (fullLoad) {
                        $("#tc_display_widget").html(data);

                        $('.tc-language-change').removeClass('tc-language-active')
                        $('.tc-language-' + lang).addClass('tc-language-active')
                    } else {

                        $("#tc-data-show").show();
                        $("#tc-data-show").html(data);
                    }
                },
            });
        }
    })
});
