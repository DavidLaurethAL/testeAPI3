let botão = document.querySelector('.fa-eye')

botão.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#Senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
}})

function entrar(){
    let Usuario = document.querySelector('#Usuario')
    let EtiquetaDeUsuario = document.querySelector('#EtiquetaDeUsuario')

    let Senha = document.querySelector('#Senha')
    let EtiquetaDeSenha = document.querySelector('#EtiquetaDeSenha')

    let MensagemDeErro = document.querySelector('#MensagemDeErro')
    let ListaDeUsuarios = []
    let UsuarioValid = {
    Nome: '',
    Usuario: '',
    Senha: ''
}
ListaDeUsuarios = JSON.parse(localStorage.getItem('ListaDeUsuarios'))
ListaDeUsuarios.forEach((item) => {
    if(Usuario.value == item.UsuarioCad && Senha.value == item.SenhaCad){
        UsuarioValid = {
        Nome: item.NomeCad,
        Usuario: item.UsuarioCad,
        Senha: item.SenhaCad
}}})
if(Usuario.value == UsuarioValid.Usuario && Senha.value == UsuarioValid.Senha){
    window.location.href = '../../index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('UsuarioLogado', JSON.stringify(UsuarioValid))
    } else {
    EtiquetaDeUsuario.setAttribute('style', 'color: red')
    Usuario.setAttribute('style', 'border-color: red')
    EtiquetaDeSenha.setAttribute('style', 'color: red')
    Senha.setAttribute('style', 'border-color: red')
    MensagemDeErro.setAttribute('style', 'display: block')
    MensagemDeErro.innerHTML = 'Usuário ou Senha incorretos'
    Usuario.focus()
}}