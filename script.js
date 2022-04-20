console.log("working");

const listaNomi = ["mamma","cocco","bruco","arco","madrio","ciro"];
const h1 = document.querySelector('h1');
console.log(h1);
const btn = document.querySelector('button');
console.log(btn);
let estratto = false;

const nomiEstratti = [];


btn.addEventListener('click', ()=>{
    btn.innerHTML = "Estrai"
        i = parseInt(Math.random()*listaNomi.length);
        console.log(i);
        let nomeEstratto = listaNomi[i];
        console.log(nomeEstratto);
        if(!(nomiEstratti.length === listaNomi.length)){
            while(nomiEstratti.includes(nomeEstratto)){
                i = parseInt(Math.random()*listaNomi.length);
                    console.log("nome era estratto");
                    nomeEstratto = listaNomi[i];
            }
            nomiEstratti.push(listaNomi[i]);
            h1.innerHTML = `Nome estratto: ${listaNomi[i]}`;
            
        }else{
            h1.innerHTML = "tutti i nomi sono stati estratti";
            btn.innerHTML = "ricomincia";
            nomiEstratti.length = 0;
            console.log(nomiEstratti, "adesso");
        }
        estratto = true;

    estratto = false;
    console.log(nomiEstratti);
})