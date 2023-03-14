function validate() {

    var name_ex = /^[A-Za-z]+$/;
    var name = document.getElementById('name');
    var name_err = document.getElementById('name_err');
    if (name.value == '') {
        name_err.innerHTML = "This is a required feild";
        return name.focus();
    } else {
        if (name.value.match(name_ex)) {
            name_err.innerHTML = ' '
        }
        else {
            name_err.innerHTML = 'You can only enter charecters in name feild';
            return name.focus();
        }
    }






    var mail_ex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = document.getElementById('mail');
    var mail_err = document.getElementById('email_err');
    if (mail.value == '') {
        mail_err.innerHTML = 'This is a required feild'
        return mail.focus();
    } else {
        if (mail.value.match(mail_ex)) { 
            mail_err.innerHTML = ' '
        }
        else {
            mail_err.innerHTML = 'Enter valid email address';
            return mail.focus();
        }
    }




    var phone_ex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var phno = document.getElementById("phno");
    var phone_err = document.getElementById('phone_err');
    if(phno.value==''){
        phone_err.innerHTML  = 'This is a required feild';
        return phno.focus();
    }else{
        if (phno.value.match(phone_ex)) {
            phone_err.innerHTML = ' ';
        } else {
            phone_err.innerHTML = 'Phone number not validated';
            return phno.focus();
        }
    }



    // var select = document.getElementById("issue");
    
    // if (select.value === '') {
    //     'please select an option';
    //     return select.focus();
    // }

    var sel = document.getElementById("options");
    var sel_err = document.getElementById("sel_err");
    if(sel.value==''){
        sel_err.innerHTML = 'Please choose an option'
        sel.focus();
    }else{
        sel_err.innerHTML = ' ';
    }

    var msg = document.getElementById("textarea");
    var msg_err = document.getElementById("msg_err");
    if(msg.value==''){
        msg_err.innerHTML = 'This is a required feild';
        msg.focus();
    }else{
        msg_err.innerHTML = ' ';
    }


    event.preventDefault();
}