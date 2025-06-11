async function clicar() {

    const matricula_monitor = document.getElementById('monitor_matricula').value;

    if (!matricula_monitor) {
        console.error('Todos os campos são obrigatórios!');
        return;
    }

    try {
        const respMonitor = await fetch('http://localhost:3000/monitor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                monitor_matricula: matricula_monitor
            })
        });

        if (!respMonitor.ok) {
            throw new Error(`Erro ao adicionar monitor: ${respMonitor.status}`);
        }

        await respMonitor.json();


        document.getElementById('monitor_matricula').value = '';
    } catch (erro) {
        console.error('Erro ao criar monitor:', erro);
    }

}

async function logar() {
    let matricula_monitor = document.getElementById('idmonitor').value;

    if (!matricula_monitor) {
        console.error('Todos os campos são obrigatórios!');
        return;
    }
    const resposta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ matricula: matricula_monitor })
    });

    const resultado = await resposta.json();

    if (resultado.encontrado) {
        document.getElementById('idmonitor').value = '';
        window.location.href = "/html/monitor.html";
    } else {

        alert("Erro: " + resultado.mensagem);
    }

}

