var y=document.getElementById("times");
var time=0;
$(window).ready(function () {
    $(".jump-action2").hide();
    $(".jump-action3").hide();
  
});

function jump(){
    $(".jump-action").hide();
    $(".jump-action2").show().delay(200).promise().done(function(){
        $(".jump-action2").hide();
        $(".jump-action3").show().delay(200).promise().done(function () {
            $(".jump-action3").hide();
            $(".jump-action").show();
          });
    });
    time=time+1;
}
y.innerHTML="今日已跨次";
