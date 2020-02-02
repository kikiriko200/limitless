//HTML 生成器

$(window).on('load', function(){
  $('#confirm').click(function(){
    var title = $('#title').val();
    var text = $('#editer').val();
    console.log(text);

    //初期化
    $('#result').text('');

    //ブログHTML出力

    //共通部分出力
    var temp = '<!--共通部分--><!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="author" content="dafu"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="theme-color" content="#aaa"><title>'+title+'|Limitless</title><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,800"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/css/lightbox.min.css" /><link rel="preload" as="style" href="./assets/css/style.min.css" onload="this.rel=stylesheet"><link rel="preload" as="style" href="./assets/css/plugins/swiper.min.css" onload="this.rel=stylesheet"><link rel="preload" as="style" href="./assets/css/plugins/swiper.custom.css" onload="this.rel=stylesheet"><noscript><link rel="stylesheet" href="./assets/css/style.min.css"><link rel="stylesheet" href="./assets/css/plugins/swiper.min.css"><link rel="stylesheet" href="./assets/css/plugins/swiper.custom.css"></noscript><script defer src="./assets/js/jquery-3.3.1.min.js"></script><script defer src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js"></script><script defer src="./assets/js/swiper.min.js"></script><script defer src="./assets/js/swiper_setting.js"></script></head><!--//共通部分--><body><div class="header" id="1"><div class="inner"><a href="index.html"><h1>Limitless</h1></a></div></div><div class="hero"><div class="hero-inner inner blog-title"><h1>'+title+'</h1><p class="time">日時:2020/1/12</p></div></div><div class="section" id="2"><div class="blog inner">';

    var temp2 = '</div></div><div class="footer"><div class="inner"><p>&copy;2019- DAFU</p></div></div><script defer src="./assets/js/j-1.js"></script><script defer src="./assets/js/blog.js"></script></body></html>';

    $('#result').text(temp);
    var title = "<h2>"+title+"</h2>";
    //共通部分出力ここまで

    $('#result').append(text);

    $('#result').append(temp2);
  })
})
