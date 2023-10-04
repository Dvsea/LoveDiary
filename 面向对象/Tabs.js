function Tabs(select,type){
    var area = document.querySelector(select)
    this.btns = area.querySelectorAll("ul > li")
    this.obox = area.querySelectorAll("ol > li")
    this.type = type
    this.select()
}

Tabs.prototype.select = function(){
    for(let i = 0; i < this.btns.length; i++)
    {
        this.btns[i].addEventListener(this.type,() => {
            for(var j = 0; j < this.obox.length; j++)
            {
                this.btns[j].classList.remove('active')
                this.obox[j].classList.remove('active')
            }
            this.btns[i].classList.add('active')
            this.obox[i].classList.add('active')
        })
    }
}

export default Tabs