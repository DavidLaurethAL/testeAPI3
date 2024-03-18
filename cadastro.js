// ---------------------------------------------------------------
// -----------------CRIAÇÃO DAS VARIAVEIS-------------------------
let botão = document.querySelector('#verSenha')
let ConfirmarBotão = document.querySelector('#VerConfirmarSenha')

let Nome = document.querySelector('#Nome')
let EtiquetaDeNome = document.querySelector('#EtiquetaDeNome')
let NomeValido = false

let Usuario = document.querySelector('#Usuario')
let EtiquetaDeUsuario = document.querySelector('#EtiquetaDeUsuario')
let UsuarioValido = false

let Senha = document.querySelector('#Senha')
let EtiquetaDeSenha = document.querySelector('#EtiquetaDeSenha')
let SenhaValida = false

let ConfirmarSenha = document.querySelector('#ConfirmarSenha')
let EtiquetaDeConfirmarSenha = document.querySelector('#EtiquetaDeConfirmarSenha')
let ConfirmarSenhaValida = false

let MensagemDeErro = document.querySelector('#MensagemDeErro')
let MensagemDeSucesso = document.querySelector('#MensagemDeSucesso')
// -------------------VALIDAÇÃO DOS INPUTS------------------------
Nome.addEventListener('keyup', () => {
    if(Nome.value.length <= 2){
        EtiquetaDeNome.setAttribute('style', 'color: red')
       EtiquetaDeNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        Nome.setAttribute('style', 'border-color: red')
        NomeValido = false
    }else {
    EtiquetaDeNome.setAttribute('style', 'color: green')
    EtiquetaDeNome.innerHTML = 'Nome'
    Nome.setAttribute('style', 'border-color: green')
    NomeValido = true
}})
Usuario.addEventListener('keyup', () => {
    if(Usuario.value.length <= 4){
        EtiquetaDeUsuario.setAttribute('style', 'color: red')
        EtiquetaDeUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        Usuario.setAttribute('style', 'border-color: red')
        UsuarioValido = false
    }else {
        EtiquetaDeUsuario.setAttribute('style', 'color: green')
        EtiquetaDeUsuario.innerHTML = 'Usuário'
        Usuario.setAttribute('style', 'border-color: green')
        UsuarioValido = true
}})
Senha.addEventListener('keyup', () => {
    if(Senha.value.length <= 5){
        EtiquetaDeSenha.setAttribute('style', 'color: red')
        EtiquetaDeSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        Senha.setAttribute('style', 'border-color: red')
        SenhaValida = false
    }else {
    EtiquetaDeSenha.setAttribute('style', 'color: green')
    EtiquetaDeSenha.innerHTML = 'Senha'
    Senha.setAttribute('style', 'border-color: green')
    SenhaValida = true
}})
ConfirmarSenha.addEventListener('keyup', () => {
    if(Senha.value != ConfirmarSenha.value){
        EtiquetaDeConfirmarSenha.setAttribute('style', 'color: red')
        EtiquetaDeConfirmarSenha.innerHTML = 'Confirmar Senha *As Senhas não conferem'
        ConfirmarSenha.setAttribute('style', 'border-color: red')
        ConfirmarSenhaValida = false
    }else {
    EtiquetaDeConfirmarSenha.setAttribute('style', 'color: green')
    EtiquetaDeConfirmarSenha.innerHTML = 'Confirmar Senha'
    ConfirmarSenha.setAttribute('style', 'border-color: green')
    ConfirmarSenhaValida = true
}})
// ----------------VERIFICAR SE A CONTA ESTÁ CADASTRADA-----------------------
function cadastrar(){
    if(NomeValido && UsuarioValido && SenhaValida && ConfirmarSenhaValida){
        let ListaDeUsuarios = JSON.parse(localStorage.getItem('ListaDeUsuarios') || '[]')
    
    ListaDeUsuarios.push(
    {
        NomeCad: Nome.value,
        userCad: Usuario.value,
        SenhaCad: Senha.value
    })
    localStorage.setItem('ListaDeUsuarios', JSON.stringify(ListaDeUsuarios))
    
    MensagemDeSucesso.setAttribute('style', 'display: block')
    MensagemDeSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>'
    MensagemDeErro.setAttribute('style', 'display: none')
    MensagemDeErro.innerHTML = 'Erro, não foi possivel cadastrar'
    
    setTimeout(()=>{
        window.location.href = '../Html/cadastro.html'
    }, 2000)
    } else {
        MensagemDeErro.setAttribute('style', 'display: block')
        MensagemDeErro.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        MensagemDeSucesso.innerHTML = ''
        MensagemDeSucesso.setAttribute('style', 'display: none')
}}
botão.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#Senha')
    if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    }else {
    inputSenha.setAttribute('type', 'password')
}})
ConfirmarBotão.addEventListener('click', ()=>{
let inputConfirmarSenha = document.querySelector('#ConfirmarSenha')
if(inputConfirmarSenha.getAttribute('type') == 'password'){
    inputConfirmarSenha.setAttribute('type', 'text')
    } else {
    inputConfirmarSenha.setAttribute('type', 'password')
}})