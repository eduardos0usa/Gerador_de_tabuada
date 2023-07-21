function clicar() {
    var num = document.getElementById("txtn")
    var tab = document.getElementById("selTab")
    var n = Number( num.value)

    if(num.value.length == 0){
        alert("[ERRO] Digite um Número!")
    }else{
        tab.innerHTML = ""
        for( var t = 1 ; t<=10 ; t++){
            var item = document.createElement("option")
            item.text = n + " x " +  t + " = "  + (n*t)
            tab.appendChild(item)
        }

    }
}