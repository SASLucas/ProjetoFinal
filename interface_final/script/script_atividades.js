async function clicar() {

    const conteudo = document.getElementById('conteudo').value;

    if (!conteudo) {
        console.error('Todos os campos são obrigatórios!');
        return;
    }

    try {
        const respAtvd = await fetch('http://localhost:3000/atividade', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                conteudo: conteudo,
            })
        });

        if (!respAtvd.ok) {
            throw new Error(`Erro ao criar atividade: ${respAtvd.status}`);
        }

        await respAtvd.json();

    
        document.getElementById('conteudo').value = '';
    } catch (erro) {
        console.error('Erro ao criar atividade:', erro);
    }

}