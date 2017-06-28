function newUser(a,b,c,d) {
    return '<tr><td>' + a +'</td><td>' + b + '</td><td>' + c + '</td><td>' + d + '</td></tr>';
}

$(document).ready(function () {

    $('form').submit(function (event) {
      event.preventDefault();
    });

    $('#add').click( function() {
 
        var fn = $('#first-name').val();
        var ln = $('#last-name').val();
        var em = $('#email').val();
        var num = $('#phone').val();
        $('tbody').append(newUser(fn, ln, em,num)); 
        $('.info').val("");
    });

});