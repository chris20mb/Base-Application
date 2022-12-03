const textComponent = () =>{
    const elh1 = document.createElement('h1');
    elh1.innerHTML = ('Olá mundo!');
    return elh1 ;


}

document.body.appendChild(textComponent());