var app = document.getElementById('app');
var appForms = document.createElement('div');

appForms.setAttribute('id', 'app-forms');

//criando o var titulo
var navTitle = document.createElement('div');

//setando os atributos

    navTitle.setAttribute('id', 'div-title');
    navTitle.setAttribute('class', 'title');

//adicionando texto dentro do elemento
    navTitle.innerText = 'POKEDEX';
    //font-style: tenho q terminar

//criar os formulários
var sideLeft = document.createElement('div');
var sideRight = document.createElement('div');

//controlar os inputs radio
var boxRadio = document.createElement('div');

    //setando atributos
    boxRadio.setAttribute('id', 'box-radio');
    boxRadio.setAttribute('class', 'box');

//elementos do formulário
var labelNome = document.createElement('label'),
    labelPoder = document.createElement('label'),
    labelAtaque = document.createElement('label'),
    labelDefesa = document.createElement('label'),
    labelTipo = document.createElement('label'),
    labelFoto = document.createElement('label'),
    labelLendario = document.createElement('label'),
    labelRadioSim = document.createElement('label'),
    labelRadioNao = document.createElement('label');

    //button não precisa de label (texto identificação)
//elementos do formulário

var inputNome = document.createElement('input'),
    inputPoder = document.createElement('input'),
    inputAtaque = document.createElement('input'),
    inputDefesa = document.createElement('input'),
    selectTipo = document.createElement('select'),
    inputFoto = document.createElement('input'),
    inputRadioSim = document.createElement('input'),
    inputRadioNao = document.createElement('input'),
    btnAdicionar = document.createElement('button');

//setando atributos iniciando nas divs

sideLeft.setAttribute('id', 'side-left');
sideLeft.setAttribute('class', 'side');

sideRight.setAttribute('id', 'side-right');
sideRight.setAttribute('class', 'side');

//setando atributos dos inputs de texto
//nome
labelNome.innerText = 'Nome';
labelNome.setAttribute('for', 'nome');
inputNome.setAttribute('type', 'text');
inputNome.setAttribute('name', 'nome ');
inputNome.setAttribute('value', '');
//poder
labelPoder.innerText = 'Poder';
labelPoder.setAttribute('for', 'poder');
inputPoder.setAttribute('type', 'text');
inputPoder.setAttribute('name', 'poder ');
inputPoder.setAttribute('value', '');
//setando atributos dos inputs de números
//Ataque
labelAtaque.innerText = 'Ataque';
labelAtaque.setAttribute('for', 'ataque');
inputAtaque.setAttribute('type', 'number');
inputAtaque.setAttribute('name', 'ataque ');
inputAtaque.setAttribute('value', '');
//defesa
labelDefesa.innerText = 'Defesa';
labelDefesa.setAttribute('for', 'defesa');
inputDefesa.setAttribute('type', 'number');
inputDefesa.setAttribute('name', 'defesa');
inputDefesa.setAttribute('value', '');
//Tipo
labelTipo.innerText = 'Selecione o tipo';
labelTipo.setAttribute('for', 'tipo');
selectTipo.setAttribute('name', 'tipo');

//adiciono as opões do select
    selectTipo.innerHTML = `<option value='0'>Ar</option><option value='1'>Elétrico</option><option value='2'>Pedra</option><option value='3'>Terra</option><option value='4'>Fogo</option><option value='5'>Água</option><option value='6'>Neve</option><option value='7'>Planta</option><option value='8'>Lava</option>`

//setando atributos dos inputs de texto para a url

labelFoto.innerText = 'Foto';
labelFoto.setAttribute('for', 'foto');
inputFoto.setAttribute('type', 'text');
inputFoto.setAttribute('name', 'foto');
inputFoto.setAttribute('value', '');

//setando atributos dos inputs de seleção 'Radio'

labelRadioSim.innerText = 'Sim';
labelRadioSim.setAttribute('for', 'lendario');
inputRadioSim.setAttribute('type', 'radio');
inputRadioSim.setAttribute('name', 'lendario');
inputRadioSim.setAttribute('value', 'Sim');
//Radio Não
labelRadioNao.innerText = 'Não';
labelRadioNao.setAttribute('for', 'lendario');
inputRadioNao.setAttribute('type', 'radio');
inputRadioNao.setAttribute('name', 'lendario');
inputRadioNao.setAttribute('value', 'Não');
//setando atributos do button
btnAdicionar.setAttribute('id', 'btn-adc');
btnAdicionar.setAttribute('class', 'btn');
//adicionando texto ao button
btnAdicionar.innerText = '+ Adicionar';

//chamando as sides para dentro do app
app.appendChild(navTitle);
app.appendChild(appForms);
appForms.appendChild(sideLeft);
appForms.appendChild(sideRight);

//inputs name = sideleft
sideLeft.appendChild(labelNome);
sideLeft.appendChild(inputNome);
sideLeft.appendChild(labelPoder);
sideLeft.appendChild(inputPoder);
sideLeft.appendChild(labelAtaque);
sideLeft.appendChild(inputAtaque);
sideLeft.appendChild(labelDefesa);
sideLeft.appendChild(inputDefesa);
sideLeft.appendChild(labelTipo);
sideLeft.appendChild(selectTipo);
sideLeft.appendChild(labelFoto);
sideLeft.appendChild(inputFoto);

//setando label do boxRadio - lendário
labelLendario.innerText = 'Lendário?'
sideLeft.appendChild(labelLendario);

boxRadio.appendChild(labelRadioSim);
boxRadio.appendChild(inputRadioSim);
boxRadio.appendChild(labelRadioNao);
boxRadio.appendChild(inputRadioNao);

sideLeft.appendChild(boxRadio);
sideLeft.appendChild(btnAdicionar);


btnAdicionar.onclick = function() {
    
    //input radio
    var resultRadio = document.querySelector('input[name="lendario"]:checked').value;
    console.log(resultRadio);   
    //criando cartão do pokemon
    if(resultRadio === 'Não'){

    }else{
        var cardContainer = document.createElement('div');
            cardContainer.setAttribute('id', `__card_${inputNome.value}`);
            cardContainer.setAttribute('class', 'card');
            
            cardContainer.innerHTML = `<div id="__card_img_${inputNome.value}_${inputAtaque.value}" class="img" ></div><div id="__card_info_${inputNome.value}_${inputAtaque.value}" class="info" ></div>`;
            
            sideRight.appendChild(cardContainer);

        var cardImg = document.getElementById(`__card_img_${inputNome.value}_${inputAtaque.value}`);
        var img = document.createElement('img');

            img.setAttribute('src', `${inputFoto.value}`);
            img.setAttribute('class', 'http-img');
            cardImg.appendChild(img);

            //div info
        var cardInfo =  document.getElementById(`__card_info_${inputNome.value}_${inputAtaque.value}`);
            cardInfo.innerHTML = `<h4>Nome: ${inputNome.value}</h4><h4>Poder: ${inputPoder.value}</h4><h4>Ataque: ${inputAtaque.value}</h4><h4>Defesa: ${inputDefesa.value}</h4><h4>Tipo: ${selectTipo.value}</h4><h4>Lendário: ${resultRadio}</h4>`;
    }

}