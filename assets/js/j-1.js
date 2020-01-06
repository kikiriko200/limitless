$(window).on('load', function(){
  //modal

  // $('.garaly-thumb').on('click',function(){
  //   $('.modal-img').attr('src',$(this).data('target'));

  //   $('.img-modal').show();
  //   let mheight = $('.modal-img').height();
  //   let mwidth = $('.modal-img').width();
  //   $('.modal-img').css({
  //     'top': ($('.img-modal').height() - mheight) / 2 + 'px',
  //     'bottom': ($('.img-modal').height() - mheight) / 2 + 'px',
  //     'left': ($('.img-modal').width() - mwidth) / 2 + 'px',
  //     'right': ($('.img-modal').width() - mwidth) / 2 + 'px',
  //   })
  // })

  // $('.modal-bg').on('click',function(){
  //   $('.img-modal').hide();
  // })
  //window.open($(this).data('target'));
  // });

  //garaly
  $.getJSON("./data/img.json",function(data){
    let garaly = $("#garaly");
    let length = data.length;

    for(var i = 0; i < length; i++) {
      let path = data[i].path;
      garaly.append("<div class='col-3 col-tb-4'><a href="+path+" data-lightbox='garaly'><img class='garaly-thumb' loading='lazy' src='"+path+"'></div>")
    }
  })

  //menu
  $('.menu-content').on('click',function(){
    location.href = $(this).data('target');
  })
});
