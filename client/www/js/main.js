'use strict';



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

      this.post('#/loginPOST', function (context) {
        if(this.params['username']!=='' || this.params['password']!==''){
            alert('y');
            $.ajax({
              url: 'http://localhost:3000/user/login?username='+this.params['username']+'&password='+this.params['password']+'',
              type: 'GET',
              dataType: 'json',         
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},         
              error: function (xhr, status) {
                 alert('Napačni podatki');
                window.location.hash = 'login';
             },
              success: function (data) {
               
                localStorage.setItem('username', data['username']);
                localStorage.setItem('password', data['password']);
                localStorage.setItem('id', data['id']);
                window.location.hash = 'index';
               }
            
            });
        }
        return false;
    });

      this.get('#logout', function (context) {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.hash = 'login';
    });

      this.get('#login', function (context) {
        if(localStorage['username']){
          window.location.hash = 'index';
      }
  });

      this.get('#my_activity', function (context) {
        localStorage.setItem('username', 'urban');
        localStorage.setItem('password', 'urban');
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




  });

$(function() {
    sammy.run('#index');
});

})(jQuery);
