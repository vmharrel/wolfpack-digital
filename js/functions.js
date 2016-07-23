$(document).ready(function(){

	/* ==================================
	   Contact Form Validation
	=====================================*/
    $('#submit').click(function(e){

        // Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

     	// Form field validation
        if(name.length == 0){
            var error = true;
            $('#name').parent('div').addClass('field-error');
        }else{
            $('#name').parent('div').removeClass('field-error');
        }
        if(email.length == 0 || email.indexOf('@') == '-1'){
            var error = true;
            $('#email').parent('div').addClass('field-error');
        }else{
            $('#email').parent('div').removeClass('field-error');
        }
        if(subject.length == 0){
            var error = true;
            $('#subject').parent('div').addClass('field-error');
        }else{
            $('#subject').parent('div').removeClass('field-error');
        }
        if(message.length == 0){
            var error = true;
            $('#message').parent('div').addClass('field-error');
        }else{
            $('#message').parent('div').removeClass('field-error');
        }

        if(error == true){
        	$('#error-notification').addClass('show-up');
        }else{
           $('#error-notification').removeClass('show-up');
        }

        if(error == false){
            $.post("contact.php", $("#contact-form").serialize(),function(result){
                if(result == 'sent'){
                    $('#success-notification').addClass('show-up');
                    $('.submit-btn').addClass('disabled');
                }
            });
        }
    });

});



