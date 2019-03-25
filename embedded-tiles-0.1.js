/*
This embedded script should be called by the follwing snippet:

      <div class="tool-tile" id="tc-tile-pl"> </div>
      <script>
        (function (window, document) {
            var loader = function () {
                var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
                script.src = "https://path.to/embedded_tiles.js";
                tag.parentNode.insertBefore(script, tag);
            };
            window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
        })(window, document);
    </script>

*/

(function () {
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://yj0np4jor1.codesandbox.io/src/styles.css";
  window.onload = (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(css);

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
    var data = '<div class="tool-header"><div class="tool-icon"><img src="http://www.topcompare.be/s3/belgium/topcompare.be/production/be/images/general/icon-pl.svg"></div><span class="title" >Empruntez malin en comparant les taux du marché</span> </div><div class="tool-content" > <div class="tc-main-content-left-container"> <div class="tc-main-content-left-container-holder"> <span class="powered-by">Powered by TopCompare</span> <div>Montant</div><input class="priceHolder" type="text" id="priceHolder" value="€ 7.500"> <div class="tc-drag-slidecontainer"> <input type="range" step="500" min="0" max="100000" value="7500" class="tc-drag-slider" id="tcRange"> </div></div></div><div class="tc-main-content-left-container"> <div class="tc-main-content-left-container-holder"> <div>Durée</div><div class="tc-input-col-4"> <input type="text" value="24" id="loanDuration"> </div><div class="tc-input-col-8"> <input type="text" disabled="" value="mois"> </div></div></div></div><div class="tool-CTA" ><a href="widget_page_pl.html">Comparez les prêts</a> </div></div>';
    
    $("#tc-tile-pl").html(data);

    $(".tc-drag-slidecontainer").on("input", function () { 
      var price = $("#tcRange").val();
      $('#priceHolder').val("\u20AC " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")); 
    });

    $('.tool-CTA>a').click(function () {
      var url = $(this).attr("href") + "?loanAmount=" + $("#priceHolder").val().replace(/[^\d,-]/g, '') + "&loanDuration=" + $("#loanDuration").val(); 
      $(this).attr("href", url ); 
    });
    
  })
});
