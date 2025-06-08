async function clicar() {

    const nome_aluno = document.getElementById('aluno_nome').value;
    const matricula_aluno = document.getElementById('aluno_matricula').value;

    if (!nome_aluno || !matricula_aluno) {
        console.error('Todos os campos são obrigatórios!');
        return;
    }

    try {
        const respAluno = await fetch('http://localhost:3000/alunos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nome_aluno: nome_aluno,
                aluno_matricula: matricula_aluno
            })
        });

        if (!respAluno.ok) {
            throw new Error(`Erro ao criar disciplina: ${respAluno.status}`);
        }

        await respAluno.json();

    
        document.getElementById('aluno_nome').value = '';
         document.getElementById('aluno_matricula').value = '';
    } catch (erro) {
        console.error('Erro ao criar aluno:', erro);
    }

}
