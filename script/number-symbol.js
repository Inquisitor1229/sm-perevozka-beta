$(document).ready(function() {
    $(".only_num-js").keydown(function(event) {
      if ( event.keyCode == 187 || event.keyCode == 107 || event.keyCode == 109 || event.keyCode == 189 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        (event.keyCode == 65 && event.ctrlKey === true) ||
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        return;
      } else {
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 ) ) {
          event.preventDefault();
        }
      }
    });
  });