const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// for(let i =0; i < maioresPaises.length; i++) {
//     console.log(`${i+1} - ${maioresPaises}`)
// }
let rank = 1
for (let i of maioresPaises){
    console.log(`"${rank++} - ${i}"`)
}