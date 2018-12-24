

$(document).ready(function(){
  $("#accordion").accordion();

  // autocomplete
  var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $("#tags").autocomplete({
      source: availableTags
    });

    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").click( function(event){
      event.preventDefault();
    });
    // checkbox start
    $(".widget input[type=radio], .widget input[type=checkbox]").checkboxradio();

    $( ".controlgroup" ).controlgroup()
        $( ".controlgroup-vertical" ).controlgroup({
          "direction": "vertical"
        });

    $("#datepicker").datepicker();

    $("#dialog").dialog();

    $("#menu").menu();

    $( "#progressbar" ).progressbar({
      value: 37
    });

    $( "#speed" ).selectmenu();
     
        $( "#files" ).selectmenu();
     
        $( "#number" )
          .selectmenu()
          .selectmenu( "menuWidget" )
            .addClass( "overflow" );
     
        $( "#salutation" ).selectmenu();

      $( "#slider" ).slider();

      var spinner = $( "#spinner" ).spinner();
      
         $( "#disable" ).on( "click", function() {
           if ( spinner.spinner( "option", "disabled" ) ) {
             spinner.spinner( "enable" );
           } else {
             spinner.spinner( "disable" );
           }
         });
         $( "#destroy" ).on( "click", function() {
           if ( spinner.spinner( "instance" ) ) {
             spinner.spinner( "destroy" );
           } else {
             spinner.spinner();
           }
         });
         $( "#getvalue" ).on( "click", function() {
           alert( spinner.spinner( "value" ) );
         });
         $( "#setvalue" ).on( "click", function() {
           spinner.spinner( "value", 5 );
         });
      
         $( "button" ).button();

         $( "#tabs" ).tabs();

         $( document ).tooltip();


});

