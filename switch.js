const namaBuah = "Semangka";
let ubahnamaBuah = "";

// switch (namaBuah) {
//     case "Semangka":
//         ubahnamaBuah = "Apel"
//         break;

//     default:
//         ubahnamaBuah ="tidak jadi";
//         break;
// }

// console.log(ubahnamaBuah)

// Bisa mennggari break dengan return

function ubahNamaBuahku(nomor) {
    switch (nomor) {
        case 1:
            return "Apel";
        case 2:
            return ubahnamaBuah = "Mangga";
        default:
            return "Tidak jadi"
            break;
    }
}

console.log(ubahNamaBuahku(2))