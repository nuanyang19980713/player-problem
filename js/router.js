class Router{
    constructor(pos,route) {
        this.current = '#/user'
        this.pos = pos
        this.route = route
        this.init()
    }
    init() {
        location.hash = this.gethash()
        this.pos.innerHTML = template('user',{})
       this.wathchHash() 
    }
    wathchHash() {
        let _this = this
        window.onhashchange = function() {
            _this.current = location.hash.slice(1)
            _this.render(_this.route)
        }
    }
    gethash() {
        return this.current    
    }
    render(router) {      
       let res = router.find(item => item.path === this.gethash())
        this.pos.innerHTML = ''
        this.pos.innerHTML = template(res.id,{})
    }
}