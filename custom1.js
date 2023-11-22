flag="0"
function theme() {
    if(flag==="0"){
        $("body").css({"backroundcolor":"lawngreen"})
        flag="1"
    }
    else{
        $("body").css({"backroundcolor":"white"})
        flag="0"
    }
    
}

$ (document). ready(()=>{
    left_value=0; 
    top_value=0;
    $ (document). keyup((e) =>{
    console.log(e. keyCode);
    k=e. keyCode
    if(k===39){
        left_value=left_value+20;
        $("img").css ({"left" :left_value})
    }
    if(k===37){
        left_value=left_value-20;
        $("img") .css ({"left": left_value})
    }
    if(k===40){
        top_value=top_value+20;
        $ ("img") .css ({"top": top_value})
    }
    if(k===38){
        top_value=top_value-20;
        $("img") .css ({"top": top_value})
    }
})
})