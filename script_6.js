/*
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine
*/
const serine = ['UCU','UCC','UCA','UCG','AGU','AGC'];
const proline = ['CCU','CCC','CCA','CCG'];
const leucine = ['UUA','UUG'];
const phenylalanine = ['UUU','UUC'];
const arginine = ['CGU','CGC','CGA','CGG','AGA','AGG'];
const tyrosine = ['UAU','UAC'];

let arnToDecode1 = "UUACGCAGUAGA";
let arnToDecode2 = "CCGUCGUUGCGCUACAGC";
let arnToDecode3 = "CCUCGCCGGUACUUCUCG";

function conversionProteine (codon) {
    switch (codon) {
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
        case 'AGU':
        case 'AGC':
            return 'Sérine';
        case 'CCU':
        case 'CCC':
        case 'CCA':
        case 'CCG':
          return 'proline';
        case 'UUA':
        case 'UUG':
            return 'Leucine';
        case 'UUU':
        case 'UUC':
            return 'Phénylalanine';
        case 'CGU':
        case 'CGC':
        case 'CGA':
        case 'CGG':
        case 'AGA':
        case 'AGG':
            return 'Arginine';
        case 'CCG':
        case 'CCG':
            return 'Tyrosine';
        default:
          console.log("Cette entrée n'est pas reconnue");
          break;
      };
}

function decomposeArn(arn) {
    let arrayArn = [];
    long = arn.length;
    // while (condition) {
        
    // }
    arrayArn.push(arn.slice(0, 3));
    arrayArn.push(arn.slice(3, 6));
    arrayArn.push(arn.slice(6, 9));
    arrayArn.push(arn.slice(9, 12));
    
    return arrayArn;
}

let proteine = decomposeArn(arnToDecode1);
let arrayProteine = [];
for (let i = 0; i < proteine.length; i++) {
    arrayProteine.push(conversionProteine(proteine[i])); 
}
console.log(`ARN à décoder : ${arnToDecode1} en ${arrayProteine.join('-')}` )
//console.log(arrayProteine.join('-'));

