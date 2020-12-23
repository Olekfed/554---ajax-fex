document.querySelector('.timestamp').innerText
 = new Date().toLocaleTimeString();

 document.querySelector('.fetch-html')
 .addEventListener('click', fetchHtml);

 function fetchHtml() {
    //  fetch('client-data.html')
        // .then(response => response.text() )
        // .then(html => docunent.querySelector('.html-conteirer').innerHTML = html;
        const response = await fetch('.html-conteirer');
        const html = await response.text();
        document.querySelector('.html-conteirer').innerHTML = html;
    }


    document.querySelector('. ajax-json')
    .addEventListener('click', ajaxJson)

function ajaxJson() {
     const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = await response.json();
            document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.account-balance').innerText = clientData.balance;

        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}



    document.querySelector('.fetch-json')
 .addEventListener('click', fetchJson);

 async function fetchJson() {
    
        const response = await fetch('.client-data.json');
        const clientData = await response.json();
        document.querySelector('.client-name').innerText = clientData.name;
        document.querySelector('.account-balance').innerText = clientData.balance;
}