let x = 1;
function open_minicart(){
    var mini = document.getElementById('cart-opt');
    if(x==1){
        mini.style.display = 'block';
        x = 0;
    }else{
        mini.style.display = 'none';
        x = 1;
    }
    console.log('mini cart open')
}

let j = 1;
function removeitem(){
    var close =  document.getElementById('item1');
    if(j==1){
        close.style.display = 'none';
        j = 0
    }else{
        j = 1
    }
}

var z =1;
function removeitem2(){
    var close =  document.getElementById('item2');
    if(z==1){
        close.style.display = 'none';
        z = 0
    }else{
        z = 1
    }
}



let v = 1;
function open_minicart2(){
    var mini = document.getElementById('cart-opt2');
    if(v==1){
        mini.style.display = 'block';
        v = 0;
    }else{
        mini.style.display = 'none';
        v = 1;
    }
    console.log('responsive mini cart open')
}