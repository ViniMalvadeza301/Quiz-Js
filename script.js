function resultado() {
    let pontuacao = 0;
    const gabarito = {
        q1: "B", q2: "B", q3: "A", q4: "B", q5: "B", q6: "C", q7: "C", q8: "C", q9: "D", q10: "B" 
    };

    for (let i = 1; i <= 10; i++) {
        let input = document.querySelector(`input[name="q${i}"]:checked`);

        if (input && input.value === gabarito[`q${i}`]) {
            pontuacao++;
        }
    }//console.log(pontuacao); //certo
    sessionStorage.setItem("keyPontuacao",pontuacao);
}