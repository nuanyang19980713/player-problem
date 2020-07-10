// 用户点击登入
$('#login').click(function(){
    location.href = './views/login.html'
})
// 对话框提示用户详情
$('.btn-warning').click( event =>{
    let title = event.target.parentNode.parentNode.children[0].textContent.slice(0,3)
    switch(title) {
        case '脑筋急': $('.slot').html('脑筋急转弯小游戏，考考你的思维够不够灵活，根据问题选出答案，不要深究问题的本质，也不要钻牛角尖，答案就在灵光一闪间而过。想要过五关，斩六将，那么，简单点、思考问题的方式简单点。'); break;
        case '真心话': $('.slot').html('真心话大冒险是一种聚会娱乐游戏,又名诚实与大胆。双方通过猜拳等方式比试,输了的一方就要选择“真心话”或者是“大冒险”。'); break;
        case '求生欲': $('.slot').html('求生欲在2017年开始流行，意思是大部分男生在面对一些“送命题”拷问的时候，都能够完美化险为夷的随机应变能力，这波操作被网友们称为“求生很强了”。该词一般调侃男朋友或者老公，比如男朋友私藏几百块钱，被女朋友无意间发现了，这个时候男朋友应该马上说这是给女朋友留着买口红的，或者说买化妆品的，这样就能让女”'); break;
    }
})
// 检查用户是否登入

$('.challenge').click(function () {

})
function Login(username, password) {
    this.username = username
    this.password = password
}
// 登入请求
Login.prototype.loginRequest = async function() {
    let res = await $.ajax({
            type:'get',
            url:'../api/login.php',
            data:{
                username:this.username,
                password:this.password
            },
            dataType:'JSON'
        })
}
Login.prototype.watchLogin = function() {
    setInterval(_=>{
        console.log(2)
    },100)
}
Login.prototype.isLogin = function () {
    console.log(document.cookie)
}