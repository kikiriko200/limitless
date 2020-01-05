//img.js
//(c) 2019- DAFU(https://github.com/kikiriko200/img.js)
//MIT License(https://github.com/kikiriko200/img.js/blob/master/LICENSE)

const scale = 0.8; // 倍率
const classname = $('.as'); //クラス名
let counter = 0; //個別番号
$(window).on('load', function(){
  classname.each(function(){
    let rheight = $(this).parent();
    rheight = rheight.height();
    let rwidth = $(this).parent();
    rwidth = rwidth.width();
    let height = rheight;
    let width = rwidth;
    if (height < width){ //小さい方に合わせる
      width = height;
    }else{
      height = width;
    }
    $(this).css({ //CSS制御
      'height': height*scale,
      'width' : width*scale,
      'object-fit': 'cover'
    });
    counter++;
    console.log('Before Image#'+counter+'\nwidth:'+rwidth+'px;\nheight:'+rheight+'px');
    console.log('Resize Image#'+counter+'\nwidth:'+width*scale+'px;\nheight:'+height*scale+'px');
  });


  //modal

  // $('.garaly-thumb').on('click',function(){
  // //   $('.modal-img').attr('src',$(this).data('target'));

  // //   $('.img-modal').show();
  // //   let mheight = $('.modal-img').height();
  // //   let mwidth = $('.modal-img').width();
  // //   $('.modal-img').css({
  // //     'top': ($('.img-modal').height() - mheight) / 2 + 'px',
  // //     'bottom': ($('.img-modal').height() - mheight) / 2 + 'px',
  // //     'left': ($('.img-modal').width() - mwidth) / 2 + 'px',
  // //     'right': ($('.img-modal').width() - mwidth) / 2 + 'px',
  // //   })
  // // })

  // // $('.modal-bg').on('click',function(){
  // //   $('.img-modal').hide();
  // // })
  // //window.open($(this).data('target'));
  // });

  //garaly
  $.getJSON("../data/img.json",function(data){
    let garaly = $("#garaly");
    let length = data.length;

    for(var i = 0; i < length; i++) {
      let path = data[i].path;
      garaly.append("<div class='col-3 col-tb-4'><a href="+path+" data-lightbox='garaly'><img class='garaly-thumb' src='"+path+"'></div>")
    }
  })

  //menu
  $('.menu-content').on('click',function(){
    location.href = $(this).data('target');
  })
});
