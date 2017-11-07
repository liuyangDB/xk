function initStyle(){
    //获取浏览器视口的高度
    var height = $(window).innerHeight();
    var ch = height-130;
    $('.content').css('height',ch+'px');
    $('.navleft').css('height',ch+'px');
}
$(function(){
    //初始化页面
    initStyle();
    //为左侧栏绑定事件
    $('.navleft dd').off();
    $('.navleft dd').on('click',function(){
        var page = $(this).attr('page');
        $('section.content').load(page);
    });
    //默认触发
    $('.navleft dd').eq(0).trigger('click');
});