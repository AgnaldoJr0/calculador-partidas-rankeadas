const partidas = [200, 50];
let nivel;
let saldoPartidas;

function calculadorPartidas(partidas) {
    saldoPartidas = partidas[0] - partidas[1];
    return saldoPartidas;
}

function calculadorNivel(saldoPartidas) {
    switch (true) {
        case saldoPartidas <= 10:
            nivel = "Ferro"
            break;
        case saldoPartidas > 11 && saldoPartidas <= 20:
            nivel = "Bronze"
            break;
        case saldoPartidas > 21 && saldoPartidas <= 50:
            nivel = "Prata"
            break;
        case saldoPartidas > 51 && saldoPartidas <= 80:
            nivel = "Ouro"
            break;
        case saldoPartidas > 81 && saldoPartidas <= 90:
            nivel = "Diamante"
            break;
        case saldoPartidas > 91 && saldoPartidas <= 100:
            nivel = "Lendário"
            break;
        case saldoPartidas >= 101:
            nivel = "Imortal"
            break;
        default:
            console.log("Heroi ainda não iniciou á sua jornada")
    }
    return nivel;
}

saldoPartidas = calculadorPartidas(partidas);
nivel = calculadorNivel(saldoPartidas);

console.log(`O Herói tem de saldo de ${saldoPartidas} está no nível de ${nivel}`);