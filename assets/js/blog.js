$(window).on('load', function(){
  const height = screen.height;
  const body = $('body').height();
  console.log(height + ':' + body)
  if (body <= height){
    const sa = height - body - 40 ;
    $('.blog').css({'margin-bottom':sa});
  }
})
