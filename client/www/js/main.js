'use strict';

localStorage.setItem('username', 'urban');
localStorage.setItem('Ô', 'urban');
/*(function($) {

    var sammy = $.sammy( function() {

        function nastaviStran(data) {
            alert("Zacetek!!");
        
        }

//<!-- LOGIN -->
        this.get('#login', function (context) {
            alert("Preveri ce je prijavljen");
               alert("INDEC");
        
        });
//<!-- MAIN -->
        this.get('#main', function (context) {
         $( '.activities' ).show();
            $( '.new_activity' ).hide();
        $('.activity').hide();


           $.ajax({
            url: 'http://localhost:3000/activity/?username='+localStorage.username+'&password='+localStorage.password,
          // url:'http://localhost:3000/activity/?username=urban&password=urban',
            type: 'GET',
            dataType: 'json', 
            contentType: 'application/json; charset=utf-8',           
            success: function (data) {                
    var activities = {
      'title':'Aktivnosti',
      'list_of_activites': data                                 

    };
    loadActivities(activities);
  }});
});

function loadActivities(data)
{  
  var source = $('#articles-template').html(); 
  var template = Handlebars.compile(source);
  var html = template(data);
 // $('.content2').html(html); 
   $("#articleHandlebars").html(html);  
  $("#listview-content").trigger('create');  
  $("#listview-page").trigger('pagecreate');
  $("#content2 ul").listview('refresh');
  $("#content2 ul").listview().listview('refresh'); 

}
    

this.get('#index', function (context) {
            alert("INDEC");
   
/*
    $.get('hbs/index.hbs', function (data) {
     var template = Handlebars.compile(data)
    var context = {izpis: "mojTestniIzpis"};
    var html = template(context);
    $("#stran").html(html);
    $("#stran").trigger('create');
    });
       $.ajax({
            url: 'http://localhost:3000/activity/?username='+localStorage.username+'&password='+localStorage.password,
          // url:'http://localhost:3000/activity/?username=urban&password=urban',
            type: 'GET',
            dataType: 'json', 
            contentType: 'application/json; charset=utf-8',           
            success: function (data) {                
    var activities = {
      'title':'Aktivnosti',
      'list_of_activites': data                                 

    };
    loadActivities(activities);
  }});

        });



$(function() {
     alert("Preveri ce je prijavljen");
        sammy.run('#index');
    });

})(jQuery);*/





(function($) {

    var sammy = $.sammy( function() {



        this.get('#login', function (context) {
                alert('login');
                $.ajax({
                url: 'http://localhost:3000/activity/?username='+'urban'+'&password='+'urban',
                type: 'GET',
                dataType: 'json', 
                contentType: 'application/json; charset=utf-8',           
                success: function (data) { alert(data[1]['name'])  }
            });
            /*console.log("---------MENI-----------");
            $.get('hbs/index.hbs', function (data) {
                nastaviStran(data);
            });*/
        });

        this.get('#my_activity', function (context) {
           $.ajax({
            url: 'http://localhost:3000/activity/?username='+localStorage.username+'&password='+localStorage.password,
            // url:'http://localhost:3000/activity/?username=urban&password=urban',
            type: 'GET',
            dataType: 'json', 
            contentType: 'application/json; charset=utf-8',           
            success: function (data) {                
                var activities = {
                    'title':'Aktivnosti',
                    'entries': data                                 
                };
            loadActivities(activities);
            }});
        });

        function loadActivities(data)
        {  
          var source   = $("#articles-template").html();
          var template = Handlebars.compile(source);
          var html = template(data);
          $("#articleHandlebars").html(html);           
          $("#listview-content").trigger('create');  
          $("#my_activity").trigger('pagecreate');
          $("#articleHandlebars ul").listview('refresh');
          $("#articleHandlebars ul").listview().listview('refresh');

        }


        this.get('#activities', function (context) {
                alert("aktivnosti");
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
