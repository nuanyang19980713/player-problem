$(function() {
    // 抽屉的切换
    let inst = new mdui.Drawer('#drawer');
    $('.drawer').click(function () {
        inst.toggle()
    })
    let col = new mdui.Collapse('#collapse');
     $('#open-1').click(function(){
         col.toggle('#item-1')
     })
    let count = 1; // 计算子栏目的切换
    $('.change').click(function () {
        count++
        count %2 === 0 ? $('#change_arrow_direct').css('transform','rotate(180deg)'):
            $('#change_arrow_direct').css('transform','rotate(0deg)')
    })
    // 默认选中
    $('.tab').click(function () {
        $('.tab').removeClass('current')
        $(this).addClass('current')
    })
    $('.tab').hover(function(){
        $(this).css('background','#3f51b5')
            .css('cursor','pointer')
    },function(){
        $(this).css('background','')
            .css('cursor','')
    })
    // 修改页面的主题
    let changeTheme = new mdui.Dialog($('#theme_dialog').get(0));
    let p1 = new Promise((resolve,reject) => {
        $('#change_theme').click(()=>{
            changeTheme.open()
            resolve($('.ok'))
        })
    })
    p1.then(res => {
        return new Promise(resolve=>{
            res.click(function () {
                changeTheme.close()
            })
        })
    })
    // 路由的设置
    let main = document.querySelector('main')
    let route = [
        { path: '/user',id:'user'},
        { path: '/theme1',id:'Theme1'},
        { path: '/theme2',id: 'Theme2'},
        { path: '/theme3',id:'Theme3'},
        { path: '/music',id:'music'},
        { path: '/home',id:'home'}
    ]
  let router =  new Router(main,route)
    // 提示用户
    let tip1 = new mdui.Tooltip('#change_theme', {
        content: '设置文档主题'
    });
    let tip2 = new mdui.Tooltip('#toGithub', {
        content: '我要源码'
    });
    $('#change_theme').hover(function(){
        tip1.open()
    },function () {
        tip1.close()
    })
    $('#toGithub').hover(function(){
        tip2.open()
    },function () {
        tip2.close()
    })
})
