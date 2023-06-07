const btnCep = document.getElementById('btnCep');

btnCep.addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('municipio').value = data.localidade;
        document.getElementById('estado').value = data.uf;
        localStorage.setItem('municipio', data.localidade);
        sessionStorage.setItem('rua', data.logradouro);
    });
});