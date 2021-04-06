// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce

let poleMen = ['Aneta', 'Barbora', 'Daniela', 'Jana', 'Kamila'];
console.log(poleMen);
vypisText(poleMen);


// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0

let index = poleMen[2];
vypisText(index);


// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length

poleMen.length;
vypisText(poleMen.length);


// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.





// Úkol 5 - přidej na konec pole další jméno
// pole.push()
// pole.unshift()
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)

poleMen.push('Maria');
vypisText(poleMen);


// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()

vypisText(poleMen[0]);
vypisText(poleMen[poleMen.length - 1]);
poleMen.shift();
poleMen.pop();
vypisText(poleMen);









// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}