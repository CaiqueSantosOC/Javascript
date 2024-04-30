function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var resposta = document.getElementById('resposta')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        resposta.innerHTML= 'Bom Dia!';
        foto.src = 'manha.png';
        document.body.style.background ='#E59663';
        
    } else if (hora >= 12 && hora <= 18) {
        resposta.innerHTML= 'Boa Tarde!';
        foto.src = 'tarde.png';
        document.body.style.background ='#7A403C';
        
    } else {
        resposta.innerHTML= 'Boa Noite!'
        foto.src = 'noite.png';
        document.body.style.background = '#2F3838'; 
    }
}



