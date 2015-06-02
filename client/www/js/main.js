'use strict';


(function($) {

    var sammy = $.sammy( function() {

        function nastaviStran(data) {
            alert("Zacetek!!");
          //  var template = Handlebars.compile(data)
           // var context = {izpis: "mojTestniIzpis"};
            //var html = template(context);
            //$("#stran").html(html);
           // $("#stran").trigger('create');
        }


        this.get('#login', function (context) {
                alert("Preveri ce je prijavljen");
            /*console.log("---------MENI-----------");
            $.get('hbs/index.hbs', function (data) {
                nastaviStran(data);
            });*/
        });

        this.get('#main', function (context) {
                alert("Glavno");
            /*console.log("---------MENI-----------");
            $.get('hbs/index.hbs', function (data) {
                nastaviStran(data);
            });*/
        });

        this.get('#activities', function (context) {
                alert("Aktivnosti");
            /*console.log("---------MENI-----------");
            $.get('hbs/index.hbs', function (data) {
                nastaviStran(data);
            });*/
        });

        this.get('#findWalk', function (context) {
            console.log("---------FIND WALK-----------");
            $.get('hbs/findWalk.hbs', function (data) {
                nastaviStran(data);
            });
        });    

    });

    $(function() {
        sammy.run('#index');
    });

})(jQuery);
