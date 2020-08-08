$(document).ready(function () {
    /*Показ модального окна*/
    $('#open').on('click',
            function () {
                $('.overlay,.window').show();
            }
    );
    /*Закрытие модального окна*/
    $('.overlay,.close').on('click',function(){
        $('.overlay,.window').hide();
    });
});