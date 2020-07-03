

// $(".go").click(function(){
//     var password = $("#password").val();
//     var name = $("#name").val();
//     pAjax({
//         url:"./php/enter.php",
//         data:{
//             username:name,
//             password:password
//         },
//         type:"post",
//     }).then(function(res){
//         if(res.status==200){
//             //设置cookie
//             setCookie("username",name,7200);
//             alert(res.mag);
//             location.href = "page.html";
//         }else{
//             alert(res.mag);
//             location.href = "enter.html";
//         }
//     })

// })
//登录注册切换
$('.ditailed>div').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    // console.log($(this).text());
    if($(this).text() == '注册'){
        $('.login-lon').css('display','none');
        $('.reg-reg').css('display','block');
        //判断登录注册按钮颜色改变
        if($('#reg-name').val() == '' || $('#reg-min').val() == '' || $('#reg-password').val() == ''  || $('#reg-hao').val() == '' ){
            $('.go').css('background','#c7c7c7');          
        }else{
            $('.go').css('background','#08A05C')
        }
        $('input').on('input',function(){
            if($('#reg-name').val() != '' && $('#reg-min').val() != '' && $('#reg-password').val() != ''  && $('#reg-hao').val() != '' ){
                $('.go').css('background','#08A05C')
            }else{
                $('.go').css('background','#c7c7c7')
            }
        })
    }else if($(this).text() == '登录'){
        $('.reg-reg').css('display','none');
        $('.login-lon').css('display','block');
        //判断登录注册按钮颜色改变
        var $name = $('#name').val();
        var $password = $('#password').val();
        console.log($name,$password);
        if($('#name').val() != '' && $('#password').val() != ''){
            $('.go').css('background','#08A05C')
            $('input').on('input',function(){
                if($('#name').val() != '' && $('#password').val() != ''){
                    $('.go').css('background','#08A05C')
                }else{
                    $('.go').css('background','#c7c7c7')
                }
            })
        }
    }
})

//得到焦点 lable上移
// $('.item').click(function () {
//     $(this).children("label").stop().animate({ "fontSize": "10px","top": "3px","left":'10px'},300,'linear');
//     $(this).children('input').focus();
// }).hover(function(){
//   $(this).attr('style','cursor: text;')
// })
// //label动态下降，恢复大小
// $("input").blur(function() {   
//     if($(this).val() == ''){
//         $(this).prev("label").stop().animate({ "fontSize": "16px","top": "16px","left":'22px'},300,'linear');
//     } else{
//         $(this).prev("label").css('fontSize','10px')
//     }
// })
$('input').focus(function () {
        $(this).prev("label").stop().animate({ "fontSize": "10px","top": "3px","left":'10px'},300,'linear');
        // $(this).children('input').focus();
    }).hover(function(){
      $(this).attr('style','cursor: text;')
    })
$('label').click(function () {
    $(this).stop().animate({ "fontSize": "10px","top": "3px","left":'10px'},300,'linear');
    $(this).next('input').focus();
}).hover(function(){
    // $(this).next().attr('style','cursor: text;')
})
$("input").blur(function() {   
    if($(this).val() == ''){
        $(this).prev("label").stop().animate({ "fontSize": "16px","top": "16px","left":'22px'},300,'linear');
    } else{
        $(this).prev("label").css('fontSize','10px')
    }
})

//眼睛改变
var num = 1;
$('.item').click(function(e){
    if(e.target.nodeName == 'I'){
        num++;
        if(num%2==0){
            $('.item>i').attr('class','iconfont icon-yanjing');
            $('.item>#password').attr('type','text');
            $('.item>#reg-password').attr('type','text');
        }else{
            $('.item>i').attr('class','iconfont icon-biyan');
            $('.item>#reg-password').attr('type','password');
        }    
    }
})

//登录注册按钮颜色改变
$('input').on('input',function(){
    if($('#name').val() != '' && $('#password').val() != ''){
        $('.go').css('background','#08A05C')
    }else{
        $('.go').css('background','#c7c7c7')
    }
})