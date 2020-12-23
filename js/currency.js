document.querySelector('.convert', convert)addEventListener('.convert', convert);

async function convert() {
    const resp = await fetch('https://api.exchangerate-api.com/v4/latest/UAH')
    const currData = await resp.json();
    const currName = document.querySelector('.curr').value;
    const rate = currData.rates[currName];
    document.querySelector('.curr-result').value = rate;
}
