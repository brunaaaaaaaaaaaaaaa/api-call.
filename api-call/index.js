fetch("https://catfact.ninja/breeds")
    .then(response => {
        if (!response.ok) {
            throw new Error("We couldn't fetch this file");
        }
        return response.json();
    })
    .then(teDhena => {
        const element = document.getElementById('element');
        if (teDhena.data && teDhena.data.length > 0) {
            const list = teDhena.data.map(e => `<li>${e.breed}</li>`).join('');
            element.innerHTML = `<ul>${list}</ul>`;
        } else {
            element.innerText = 'Nuk mund te shfaqen te dhenat';
        }
    })
    .catch(error => {
       console.log("Error: ", error);
    });
fetch('https://catfact.ninja/fact').then(r=>{
    if(!r.ok){
        throw new Error("We couldn't fetch this file");
    }
    return r.json();
}).then(datas=>{
    const facts = document.getElementById('facts');
    facts.innerHTML = `<li>${datas.fact}</li>`;
}).catch(gabim=>{
   console.log("Error: ", gabim);
})