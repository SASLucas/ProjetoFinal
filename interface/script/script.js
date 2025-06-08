async function clicar() {
    const disciplina = document.getElementById('disciplina').value;
    const nome = document.getElementById('professor_nome').value;
    const matricula = document.getElementById('professor_matricula').value;

    if (!disciplina || !nome || !matricula) {
        console.error('Todos os campos são obrigatórios!');
        return;
    }

    try {
        const respDisciplina = await fetch('http://localhost:3000/disciplinas', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nome: disciplina,
                nome_professor: nome,
                professor_matricula: matricula
            })
        });

        if (!respDisciplina.ok) {
            throw new Error(`Erro ao criar disciplina: ${respDisciplina.status}`);
        }

        await respDisciplina.json();

    
        document.getElementById('disciplina').value = '';
        document.getElementById('professor_nome').value = '';
    } catch (erro) {
        console.error('Erro ao criar disciplina:', erro);
    }

    try {
        const respProfessor = await fetch('http://localhost:3000/professores', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ matricula, nome })
        });

        if (!respProfessor.ok) {
            throw new Error(`Erro ao criar professor: ${respProfessor.status}`);
        }

        await respProfessor.json(); 
        document.getElementById('professor_matricula').value = '';
    } catch (erro) {
        console.error('Erro ao criar professor:', erro);
    }
}
