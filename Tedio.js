function fetchActivity(){
    CaixaDeInformacao.classList.replace('NaoVisivel', 'Visivel')
    Header.classList.replace('Visivel', 'NaoVisivel')
    botão.style.top = '75%'
    botão.style.transform = 'translate(-50%, -50%)'
        // console.log(data.activity)
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data =>{
        console.log(data.type)
        if(data.link){
            fetchActivity.innerHTML = `<span class="poppins">activity: </span>
            <a href="${data.link}"><span class="montserrat bold animation">${data.activity}</span>(Aprenda Mais)</a>`
        }else
        activity.innerHTML = `<span class="poppins">activity:</span><span class="montserrat">${data.activity}</span>`
        type.innerHTML = `<span class="poppins">type: </span>
        <span><span class="montserrat">${data.type}</span>`
        participants.innerHTML = `<span class="poppins">participants: </span>
        <span><span class="montserrat">${data.participants}</span>`
        accessibility.innerHTML = `<span class="poppins">accessibility: </span>
        <span><span class="montserrat">${data.accessibility}</span>`
    })
}
botão.addEventListener('click', fetchActivity)