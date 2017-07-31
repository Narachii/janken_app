$(document).ready(function(){
     //ここからJSを記述Start!!!

var w_html = `<div class="balloon__right">
            <p class="message">お前の勝ちだ.....</p>
            </div>`
var l_html =  `<div class="balloon__right">
            <p class="message">出直してこい.....</p>
            </div>`

var d_html =  `<div class="balloon__right">
            <p class="message">なかなかやるな..</p>
            </div>`

    $("#gu_btn").on("click", function(){
        var humanGu = 1;
        var comp = Math.floor(Math.random()*3+1 );

    if(comp == 1 ){
        $("#pc").text("グー")
        $("#result").text("あいこ!")
        $("#message").append(d_html)
    }else if(comp == 2 ){
        $("#pc").text("チョキ")
        $("#result").text("勝ち!")
        $("#message").append(w_html)
    }else if(comp == 3 ){
        $("#pc").text("パー")
        $("#result").text("負け!")
        $("#message").append(l_html)
    }
});

    $("#cho_btn").on("click", function(){
        var humaCho = 2;
        var comp = Math.floor(Math.random()*3+1 );

    if( comp == 1 ){
        $("#pc").text("グー")
        $("#result").text("負け!")
        $("#message").append(l_html)
    }else if( comp == 2 ){
        $("#pc").text("チョキ")
        $("#result").text("あいこ!")
        $("#message").append(d_html)
    }else if( comp == 3 ){
        $("#pc").text("パー")
        $("#result").text("勝ち!")
        $("#message").append(w_html)
    }
});
    $("#par_btn").on("click", function(){
        var humaPar = 3;
        var comp = Math.floor(Math.random()*3+1 );
    if(comp==1){
        $("#pc").text("グー")
        $("#result").text("勝ち!")
        $("#message").append(w_html)
    }else if(comp==2){
        $("#pc").text("チョキ")
        $("#result").text("負け!")
        $("#message").append(l_html)
    }else if(comp==3){
        $("#pc").text("パー")
        $("#result").text("あいこ!")
        $("#message").append(d_html)
    }
 });

    $('')

});
