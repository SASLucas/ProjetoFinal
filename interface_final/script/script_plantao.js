async function clicar() {

    const plantao = document.getElementById('plantao').value;

    if (!plantao) {
        console.error('Todos os campos são obrigatórios!');
        return;
    }

    try {
        const respPlantao = await fetch('http://localhost:3000/plantao', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                data: plantao,
            })
        });

        if (!respPlantao.ok) {
            throw new Error(`Erro ao criar atividade: ${respPlantao.status}`);
        }

        await respPlantao.json();

    
        document.getElementById('plantao').value = '';
    } catch (erro) {
        console.error('Erro ao adicionar plantao:', erro);
    }

}