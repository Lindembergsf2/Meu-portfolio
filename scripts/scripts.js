const form = document.querySelector("form");
const input_area = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const email_regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
let isvalid = [true, true, true, true]

input_area[0].addEventListener("change", name_validate);

function set_error(index){
    input_area[index].style.border = '2px solid #ff0000'
    spans[index].style.display = "block";
    spans[index].style.textAlign = 'left';
}

function remove_error(index){
    input_area[index].style.border = '';
    spans[index].style.display = 'none';
}

function name_validate(){
    if(input_area[0].value.length < 3){
        set_error(0);
        isvalid[0] = false;
    }else{
        remove_error(0);
        isvalid[0] = true;
    }
}

input_area[1].addEventListener("change", email_validate);

function email_validate(){
    if(email_regex.test(input_area[1].value)){
        remove_error(1);
        isvalid[1] = true;
    }else{
        set_error(1)
        isvalid[1] = false;
    }
}

const regexTelefone = /^(\d{2})(\d{4})(\d{0,4})/
function mascaraTelefone(textoInputTelefone) {
    const textoApenasNumeros = textoInputTelefone.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(regexTelefone, '($1) $2-$3');
    }

    input_area[2].value = telefoneFormatado;

    if(input_area[2].value.length === 14 || input_area[2].value.length === 15){
        remove_error(2);
        isvalid[2] = true;
    }else{
        set_error(2);
        isvalid[2] = false;
    }
}


const campoTelefone = input_area[2];
campoTelefone.addEventListener('input', function (e) {
    console.log(e)
    mascaraTelefone(campoTelefone.value);
    
});

input_area[0].addEventListener("change", name_validate);

function textbox_validate(){
    if(input_area[3].value.length < 3){
        set_error(3);
        isvalid[3] = false;
    }else{
        remove_error(3);
        isvalid[3] = true;
    }
}


function tudovalido(isvalid){
    const quantidadeDeInputs = input_area.length
    let quantidadeElementosValidos = 0

    for(i = 0; i < isvalid.length; i++){
        if(isvalid[i] === true){
            quantidadeElementosValidos++
        }else {
            quantidadeElementosValidos--
        }
    }

    if(quantidadeDeInputs === quantidadeElementosValidos){
         return true;
    }else{
        return false;
    }
}

function enviarFormulario() {
    if (tudovalido()) {
        enviarParaWhatsApp();
    }
}

function enviarParaWhatsApp() {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-tel').value;
    const mensagem = document.getElementById('input-msg').value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581999651079'; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}