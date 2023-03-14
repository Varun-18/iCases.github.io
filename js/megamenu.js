function megamenu(){
    let mega = document.getElementById('dropdown-content');
    let btn = document.getElementById('drp-btn');
    let megaopt = document.getElementById('mega-opt');
    
        // console.log(btn.classList);
        // btn.classList.add("btnstyle");
        // console.log(btn.classList);
        // console.log(btn)
        btn.style.background = "white";
        btn.style.borderRadius = '20px'
        megaopt.style.color = 'black'
        mega.style.display = 'block';
        flag = !flag;
    
}


function closemegamenu () {
    let mega = document.getElementById('dropdown-content');
    let btn = document.getElementById('drp-btn');
    let megaopt = document.getElementById('mega-opt');
    btn.style.background = "black"; 
    megaopt.style.color = 'white'
    mega.style.display = 'none';
    flag = !flag;

}
