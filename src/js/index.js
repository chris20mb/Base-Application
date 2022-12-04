import '../css/style.scss'


const textComponent = () =>{
    const elh1 = document.createElement('h1');
    elh1.innerHTML = ('Hello world!');
    elh1.classList.add("title");
    return elh1 ;


}

document.body.appendChild(textComponent());