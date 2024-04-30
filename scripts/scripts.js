const form = document.querySelector("#form");
const input_area = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const email_regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function set_error(index){
    input_area[index].style.border = '2 pix border #ff0000';
    spans[index].style.display = "block";
}

function remove_error(index){
    input_area[index].style.border = '';
    spans[index].style.display = 'none';
}

function name_validate(){
    if(input_area[0].value.length < 3){
        console.log("invalido");
    }else{
        console.log('valido')
    }
}