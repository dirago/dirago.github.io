$(document).ready(function(){
    $('#form').submit(function(){
        name = $(this).find('#name').val();
        firstname = $(this).find('#firstname').val();
        email = $(this).find('#email').val();
        phone = $(this).find('#phone').val();
        message = $(this).find('#message').val();

        $.post('contact.php',{
            name:name,
            firstname:firstname,
            email:email,
            phone:phone,
            message:message
        },function(data){
            if (data.error === 'ok'){
                $('#form').fadeOut('fast');
                $('#msgOk').fadeIn('slow');
            } else {
                alert('entrez un mail valide');
            }
        },"json");
        return false;
    });

});
