var input = document.querySelector('textarea#campo');
var input2 = document.querySelector('textarea#campo2');
input.focus();

// função para codificar a mensagem
function codificar() {
    if (input.value.length == 0) {
        alert('Digite algum texto no campo abaixo');
        input.focus();
    } else {
        // limpa o campo
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';

        var texto = input.value
        var txt =  texto.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('campo2').innerHTML = `${txt}`;

        // cria o botão de copiar texto
        document.getElementById('copy').innerHTML = '<button class="botao botao3" onclick="copy()">Copiar</button>';
    }
}


// função para decodificar o texto
function decodificar() {
    if (input.value.length == 0) {
        alert('Digite algum texto no campo abaixo');
        input.focus();
    } else {
        
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('campo').innerHTML = '';

        var texto = input.value
        var txt =  texto.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
    
        document.getElementById('campo2').innerHTML = `${txt}`;
        
        
        document.getElementById('copy').innerHTML = '<button class="botao botao3" onclick="copy()">Copiar</button>';
    }
}
// função para copiar o texto convertido
function copy() {
    //navigator.clipboard.writeText(input2.value)
    document.querySelector('#campo2').select();
    document.execCommand('copy');
    alert('Copiado!');
}



var botao1 = document.querySelector('button.botao1');
botao1.onclick = codificar;

var botao2 = document.querySelector('button.botao2');
botao2.onclick = decodificar;


