function runTask1(){
    let question=["Como te llamas?",
                "En que ciudad vives?",
                "Acuentos grados esta actualmente la temperatura?",
                "Que actividad realizas hoy",
                "Utilizas proctector Solar",
                "Aque te dedicas",
                "Juegas algun juego en la computadora"];
    const answers=[];
    for (let index = 0; index < question.length; index++) {
        if(index<=4){
            const answer = prompt(question[index]);
            answers.push(answer);
        }else {
            let desicion=confirm("desea continuar con las preguntas")
            if(desicion==true){
                const answer = prompt(question[index]);
                answers.push(answer);
            }
            if (desicion==false) {
                break;
            }
        }
    }
    console.log(answers);
    let text= document.querySelector('.result .my-texto');
    let resultDiv = document.querySelector('.result .result-img');
    if(parseInt(answers[2])>=26 && parseInt(answers[2])<=48){
        text.innerHTML='<p>hola ,'+answers[0]+', vives en,'+answers[1]+', esta bastante calor , te recomendamos esta ropita  </p>';
        resultDiv.innerHTML='<img src="img/Sin título-1.png" alt="Polera y Corto" style="max-width: 100%; height: auto;">';
    }
    if (parseInt(answers[2])>=0 && parseInt(answers[2])<=25) {
        text.innerHTML='<p>hola ,'+answers[0]+', vives en,'+answers[1]+', esta bastante frio , te recomendamos esta ropita  </p>';
        resultDiv.innerHTML='<img src="img/invierno.png" alt="ropa-invierno" style="max-width: 100%; height: auto;">';
    }

}
/*

/*/