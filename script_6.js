/*
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine
*/

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
          return 'Proline';
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
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
        default:
          console.log("Cette entrée n'est pas reconnue");
          break;
      };
}

function decomposeArn(arn) {
    let arrayArn = [];
    long = arn.length;
    let i = 0;
    while (i<=long) {
        arrayArn.push(arn.slice(i, i+3));
        i = i + 3;
    }
    // arrayArn.push(arn.slice(0, 3));
    // arrayArn.push(arn.slice(3, 6));
    // arrayArn.push(arn.slice(6, 9));
    // arrayArn.push(arn.slice(9, 12));
    return arrayArn;
}


function afficheProteine(arnToDecode) {
    let proteine = decomposeArn(arnToDecode);
    let arrayProteine = [];
    for (let i = 0; i < proteine.length-1; i++) {
        arrayProteine.push(conversionProteine(proteine[i])); 
    }
    console.log(`ARN à décoder : ${arnToDecode} en ${arrayProteine.join('-')}`);
}

// ARN à décoder = "UUACGCAGUAGA";
// ARN à décoder  = "CCGUCGUUGCGCUACAGC";
// ARN à décoder  = "CCUCGCCGGUACUUCUCG";
afficheProteine("UUACGCAGUAGA");
afficheProteine("CCGUCGUUGCGCUACAGC");
afficheProteine("CCUCGCCGGUACUUCUCG");

