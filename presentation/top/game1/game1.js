$(function() {
    $('#a').click(function(){
        $('#two').css('background-color','yellow');
        $('#three').css('background-color','green');
        $('#four').css('background-color','blue');
    });
    $('#b').click(function(){
        $('#one').css('background-color','yellow');
        $('#seven').css('background-color','yellow');
        $('#two').css('background-color','green');
    });
    $('#c').click(function(){
        $('#five').css('background-color','red');
        $('#six').css('background-color','yellow');
        $('#three').css('background-color','red');
    });
    $('#d').click(function(){
        $('#seven').css('background-color','green');
        $('#eight').css('background-color','yellow');
    });
    $('#e').click(function(){
        $('#five').css('background-color','blue');
        $('#six').css('background-color','red');
        $('#four').css('background-color','green');
    });
    $('#f').click(function(){
        $('#one').css('background-color','red');
        $('#eight').css('background-color','blue');
    });$('#answer').click(function(){
        $('#answer-main').show();
    });



});




