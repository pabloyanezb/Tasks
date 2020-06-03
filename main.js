$(document).ready(function(){
    $('.btn-secondary').on('click', function (){
        var tarea = $('textarea').val();
        if (tarea == ''){
            return;
        }
        $('.list').append('<li class="tarea"><input type="checkbox"><span>'
                            +tarea+ 
                            '</span><a href="#"></a></li>'
                        );
        $('textarea').val('');
    })
    $(document).on('click', 'a', function(){
        $(this).hide();
        $(this).parent().slideUp(100,function(){
            $(this).remove();
        });
    })
    $(document).on('change', 'input:checkbox', function(){
        var input = $(this).next('span');
        // input.classList.add('align-middle');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    })
})

