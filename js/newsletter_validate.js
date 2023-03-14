function news_ltr_validate(){
    var txt = document.getElementById('newsletter');
    var exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(txt.value==''){
        txt.style.setProperty('--c','red');
        txt.placeholder = 'You must enter email to subscribe'
        txt.focus();
    }
    else{
        if(txt.value.match(exp)){
        }else{
            txt.value='';
            txt.style.setProperty('--c','red');
            txt.placeholder = 'Enter email in proper format';
            txt.focus();
        }
    }
}