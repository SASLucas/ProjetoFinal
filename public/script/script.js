async function clicar() {
    const disciplina = document.getElementById('disciplina').value;
    
    if (!disciplina) {
        console.error('Tem que escrever o nome! ')
        return;
    }

    try {
        const resp = await fetch('http://localhost:3000/disciplinas', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ nome: disciplina })
        });

        if (!(resp.status >= 200 && resp.status < 300)) {
            throw new Error(`Erro HTTP: ${resp.status}`);
        }

        const data = await resp.json();    
        document.getElementById('disciplina').value = '';
        
    } catch (erro) {
        console.error('Erro ao criar disciplina:', erro);
    }
}