var arr = document.querySelectorAll('.toptxt>li>a');

var mySwiper = new Swiper('.swiper-container',{
    autoplay: true,//可选选项，自动滑动
    pagination :{
      el: '.swiper-pagination',
      clickable :true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction : false,
    }
  })
  //鼠标滑过pagination控制swiper切换
  
  //如果你在swiper初始化后才决定使用clickable，可以这样设置
  mySwiper.params.pagination.clickable = false ;
  //此外还需要重新初始化pagination
  mySwiper.pagination.destroy();
  mySwiper.pagination.init();
  mySwiper.pagination.bullets.eq(0).addClass;('swiper-pagination-bullet-active');

//顶部scrolltop事件
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(t);
        if(t>100){
            document.querySelector('#top').style.background = "#ffffff";
            document.querySelector('.left>img').src = "../imgs/login2.png";
            document.querySelector('.conest>.center').style.display = "block";
            for(var i=0;i<arr.length;i++){
                arr[i].style.color = "#010110"
            }
            document.querySelector('.sell').style.borderColor = "black";

        }else{
            document.querySelector('#top').style.background = "none";
            document.querySelector('.left>img').src = "../imgs/login.png";
            document.querySelector('.conest>.center').style.display = "none";
            for(var i=0;i<arr.length;i++){
                arr[i].style.color = "#FFFFFF"
            }
            document.querySelector('.sell').style.borderColor = "#FFFFFF";
        }
}

//nav点击跟换图片事件
$(".navlist li").click(function(){
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    console.log($(this).index);
    //跟换图片
    switch($(this).index()){
        case 0 :
            $('#banner .conest').css("background","url('../imgs/banner.jpg')");
            $('#banner .conest').css("backgroundSize","100% 100%");
            $('.center>em').text("Authentic Sneakers");
        break;
        case 1 :
            $('#banner .conest').css("background","url('../imgs/banner2.jpg')");
            $('#banner .conest').css("backgroundSize","100% 100%");
            $('.center>em').text("Authentic Streetwear");
        break;
        case 2 :
            $('#banner .conest').css("background","url('../imgs/banner3.jpg')");
            $('#banner .conest').css("backgroundSize","100% 100%");
            $('.center>em').text("Authentic Collectibles");
        break;
        case 3 :
            $('#banner .conest').css("background","url('../imgs/banner4.jpg')");
            $('#banner .conest').css("backgroundSize","100% 100%");
            $('.center>em').text("Authentic Handbags");
        break;
        case 4 :
            $('#banner .conest').css("background","url('../imgs/banner5.jpg')");
            $('#banner .conest').css("backgroundSize","100% 100%");
            $('.center>em').text("Authentic Watches");
        break;
    }
})

//判断价格高到低走势
var fact = $('.conest>.move>a>p>span')
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
var num = ($('.move').offset().left);
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

