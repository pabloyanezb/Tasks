$('.btn-secondary').on('click', function (){
    var x = $('textarea').val(); 
    $('.panel').html('<div class="tarea">'+x+'</div>');
})