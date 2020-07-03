
//判断价格高到低走势
var fact = $('#move>.conest>.move>a>p>span');
for(var i=0;i<fact.length;i++){
    if($(fact[i]).text()>216){
        $(fact[i]).parent().css('color','#FF5A5F').children().css('color','#FF5A5F');
        $(fact[i]).parent().next().text('▲').css('color','#FF5A5F'); 
    }else{
        $(fact[i]).parent().css('color','#08A05C').children().css('color','#08A05C');
        $(fact[i]).parent().next().text('▼').css('color','#08A05C'); 
    }
}
//价格运动
var num = $('.move').offset().left;
var timer = setInterval(function(){
    num-=0.1;
    if(num<-3900){
        num=1200
    }
    $('.move').css('left',num)
},3)
$('.move').hover(function(){
    clearInterval(timer) 
},function(){
    timer = setInterval(function(){
        num-=0.1;
        if(num<-3900){
            num=1200
        }
        $('.move').css('left',num)
    },3)
})

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
    {
    label: "价格走势",
    fillColor: "rgb(211, 255, 145,0.5)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [800, 810,650, 590,  560, 550, 500]
    },
    ]
    };

var options = {}
var ctx = document.getElementById("currentWeekChart").getContext("2d");
var currentWeekChart = new Chart(ctx,{
    type: 'line',
    data: data,
    options:options
});
