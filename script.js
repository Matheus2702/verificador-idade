function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var idade = data - fano

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            // PARA HOMENS NO GERAL
            if(idade < 2){
                //Bebê menino
                img.setAttribute('src', 'bebe-menino.png')
                res.innerHTML = `Detectamos um bebê de ${idade} ano!`
            } else if(idade >= 2 && idade < 15){
                //criança menino
                img.setAttribute('src', 'criança-menino.png')
                res.innerHTML = `Detectamos uma criança de ${idade} anos!`
            } else if(idade >= 15 && idade < 30){
                //Homem jovem
                img.setAttribute('src', 'jovem-homem.png')
                res.innerHTML = `Detectamos um jovem de ${idade} anos!`
            } else if(idade >= 30 && idade < 65){
                //Homem
                img.setAttribute('src', 'homem.png')
                res.innerHTML = `Detectamos um homem de ${idade} anos!`
            } else if(idade >= 65 ){
                //Idoso Homem
                img.setAttribute('src', 'idoso-homem.png')
                res.innerHTML = `Detectamos um senhor de ${idade} anos!`
            }
        } else if (fsex[1].checked){
            // PARA MULHERES NO GERAL  
            if(idade < 2){
                //Bebê menina
                img.setAttribute('src', 'bebe-menina.png')
                res.innerHTML = `Detectamos uma bebê de ${idade} ano!`
            } else if(idade >= 2 && idade < 15){
                //criança menina
                img.setAttribute('src', 'criança-menina.png')
                res.innerHTML = `Detectamos uma menina de ${idade} anos!`
            } else if(idade >= 15 && idade < 30){
                //Mulher jovem
                img.setAttribute('src', 'jovem-mulher.png')
                res.innerHTML = `Detectamos uma jovem de ${idade} anos!`
            } else if(idade >= 30 && idade < 65){
                //Mulher
                img.setAttribute('src', 'mulher.png')
                res.innerHTML = `Detectamos uma mulher de ${idade} anos!`
            } else if(idade >= 65 ){
                //Idosa Mulher
                img.setAttribute('src', 'idosa-mulher.png')
                res.innerHTML = `Detectamos uma senhora de ${idade} anos!`
            }  
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }

}