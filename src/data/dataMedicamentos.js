//protocolos anestesicos

const AnestesiaRoedoresDesgaste = [
    { nome: 'Dexmedetomidina', doses: 0.06, concentracao: 0.5 },
    { nome: 'Petidina', doses: 10, concentracao: 50 },
    { nome: 'Midazolam', doses: 1, concentracao: 5 },
    { nome: 'Atipamezole IM - Reversor Dexmedeto', doses: 1, concentracao: 5 },
    { nome: 'Flumazenil IM - Reversor Midazolam', doses: 0.1, concentracao: 0.1 },
]
const AnestesiaCoelhoDesgaste = [
    { nome: 'Dexmedetomidina', doses: 0.15, concentracao: 0.5 },
    { nome: 'Cetamina', doses: 4, concentracao: 100 },
    { nome: 'Midazolam', doses: 1, concentracao: 5 },
    { nome: 'Atipamezole - Reversor Dexmedeto', doses: 1, concentracao: 5 },
    { nome: 'Flumazenil - Reversor Midazolam', doses: 0.1, concentracao: 0.1 },
]
const AnestesiaPequenosRoedores = [
    { nome: 'Dexmedetomidina', doses: 0.3, concentracao: 0.5 },
    { nome: 'Midazolam', doses: 4, concentracao: 5 },
    { nome: 'Butorfanol 1%', doses: 5, concentracao: 10 },
    { nome: 'Atipamezole - Reversor Dexmedeto', doses: 1, concentracao: 5 },
    { nome: 'Flumazenil - Reversor Midazolam', doses: 0.1, concentracao: 0.1 },
]
const AnestesiaPsitacideos = [
    { nome: 'Dexmedetomidina', doses: 0.1, concentracao: 0.5 },
    { nome: 'Cetamina', doses: 20, concentracao: 100 },
    { nome: 'Midazolam', doses: 0.5, concentracao: 5 },
    { nome: 'Atipamezole - Reversor Dexmedeto', doses: 1, concentracao: 5 },
    { nome: 'Flumazenil - Reversor Midazolam', doses: 0.1, concentracao: 0.1 },
]
const AnestesiaTrachemys = [
    { nome: 'Propofol 1%', doses: 4, concentracao: 10 },
]


//med emergencias

const medEmergenciaAves = [
    { nome: 'Atropina', especies: ['Psitacideos'], doses: [[0.02, 0.5]], concentracao: 0.25 },
    { nome: 'Adrenalina', especies: ['Psitacideos'], doses: [[0.01, 0.1]], concentracao: 1 },
    { nome: 'Diazepam', especies: ['Psitacideos'], doses: [[0.5, 1.5]], concentracao: 5 },
    { nome: 'Doxapram', especies: ['Psitacideos'], doses: [[5, 20]], concentracao: 20 },
    { nome: 'Furosemida', especies: ['Psitacideos', 'Papagaio', 'Psitacideos neonatos'], doses: [[0.1, 2], [1, 10], [0.15, 0.15]], concentracao: 10 },
]

const medEmergenciaMamiferos = [
    { nome: 'Atropina 0,25mg/ml', especies: ['Coelho', 'Porquinho/Chinchila', 'Ratos', 'Primatas'], doses: [[0.1, 0.5], [0.1, 0.2,], [0.05, 0.1], [0.02, 0.04]], concentracao: 0.25 },
    { nome: 'Adrenalina 1mg/ml', especies: ['Coelho', 'Roedores', 'Ferrets', 'Primatas'], doses: [[0.2, 0.4], [0.1, 0.1], [0.02, 0.02], [0.2, 0.4]], concentracao: 1 },
    { nome: 'Dexametasona 2mg/ml', especies: ['Roedores', 'Primatas'], doses: [[4, 5], [0.25, 1]], concentracao: 2 },
    { nome: 'Diazepam 5mg/ml', especies: ['Coelho', 'Roedores', 'Primatas'], doses: [[1, 3], [0.5, 5], [0.5, 1]], concentracao: 5 },
    { nome: 'Doxapram 20mg/ml', especies: ['Coelho\nRoedores', 'Porquinho/Ferrets', 'Primatas'], doses: [[5, 10], [2, 5], [2, 2]], concentracao: 20 },
    { nome: 'Furosemida 10mg/ml', especies: ['Coelho\nRoedores\nPrimatas'], doses: [[1, 4]], concentracao: 10 },
];



// med gerais

const Analgesia = [
/* 0 */   { nome: 'Butorfanol 1%', doses: [0, 0], concentracao: 10 },
/* 1 */   { nome: 'Celecoxib \n200mg (comprimido)', doses: [0, 0], concentracao: 1 },
/* 2 */   { nome: 'Dexametasona \n2mg/ml', doses: [0, 0], concentracao: 2 },
/* 3 */   { nome: 'Dipirona \n500mg/ml', doses: [0, 0], concentracao: 500 },
/* 4 */   { nome: 'Escopolamina \n10mg/ml', doses: [0, 0], concentracao: 10 },
/* 5 */   { nome: 'Ketoprofeno \n20mg/ml', doses: [0, 0], concentracao: 20 },
/* 6 */   { nome: 'Meloxicam \n0,2%', doses: [0, 0], concentracao: 2 },
/* 7 */   { nome: 'Meloxicam \n2%', doses: [0, 0], concentracao: 20 },
/* 8 */   { nome: 'Predinisolona \n4mg/ml', doses: [0, 0], concentracao: 4 },
/* 9 */   { nome: 'Tramadol \n50mg/ml', doses: [0, 0], concentracao: 50 },
/* 10 */  { nome: 'Morfina \n10mg/ml', doses: [0, 0], concentracao: 10 },
];

const AnestSedat = [
/* 0 */   { nome: 'Acepromazina \n1%', doses: [0, 0], concentracao: 10 },
 /* 1 */   { nome: 'Atipamezole \n5mg/ml', doses: [0, 0], concentracao: 5 },
 /* 2 */   { nome: 'Bupivacaina \n5mg/ml', doses: [0, 0], concentracao: 5 },
 /* 3 */   { nome: 'Butorfanol \n1%', doses: [0, 0], concentracao: 10 },
 /* 4 */   { nome: 'Cetamina \n100mg/ml', doses: [0, 0], concentracao: 100 },
 /* 5 */   { nome: 'Dexmedetomidina \n0,5mg/ml', doses: [0, 0], concentracao: 0.5 },
 /* 6 */   { nome: 'Diazepam \n5mg/ml', doses: [0, 0], concentracao: 5 },
 /* 7 */   { nome: 'Flumazenil \n0,1mg/ml', doses: [0, 0], concentracao: 0.1 },
 /* 8 */   { nome: 'Midazolam \n5mg/ml', doses: [0, 0], concentracao: 5 },
 /* 9 */   { nome: 'Petidina \n50mg/ml', doses: [0, 0], concentracao: 50 },
 /* 10 */  { nome: 'Propofol \n10mg/ml', doses: [0, 0], concentracao: 10 },
 /* 11 */  { nome: 'Tramadol \n50mg/ml', doses: [0, 0], concentracao: 50 },
 /* 12 */  { nome: 'Xilazina \n2%', doses: [0, 0], concentracao: 20 },
];

const Atb = [
 /* 0 */ { nome: 'Amicacina \n50 mg/mL', doses: [0, 0], concentracao: 50 },
 /* 1 */ { nome: 'Amoxicilina \n250 mg/5 mL', doses: [0, 0], concentracao: 50 },
 /* 2 */ { nome: 'Amoxicilina clavulanato \n200 mg/5 mL', doses: [0, 0], concentracao: 40 },
 /* 3 */ { nome: 'Amoxicilina triidratada \n150mg/ml', doses: [0, 0], concentracao: 150 },
 /* 4 */ { nome: 'Ampicilina \n250 mg/5 mL', doses: [0, 0], concentracao: 50 },
 /* 5 */ { nome: 'Azitromicina \n40mg/ml', doses: [0, 0], concentracao: 40 },
 /* 6 */ { nome: 'Benzoilmetronidazol', doses: [0, 0], concentracao: 25 },
 /* 7 */ { nome: 'Cefalexina \n50mg/ml', doses: [0, 0], concentracao: 50 },
 /* 8 */ { nome: 'Doxiciclina \n5mg/ml', doses: [0, 0], concentracao: 5 },
 /* 9 */ { nome: 'Enrofloxacina \n5%', doses: [0, 0], concentracao: 50 },
 /* 10 */ { nome: 'Gentamicina \n40mg/ml', doses: [0, 0], concentracao: 40 },
 /* 11 */ { nome: 'Metronidazol \n0,5%', doses: [0, 0], concentracao: 5 },
 /* 12 */ { nome: 'Terramicina \n200mg/ml', doses: [0, 0], concentracao: 200 },
 /* 13 */ { nome: 'Sulfadimetoxina 5g + Metronidazol 5g (Giardicid)', doses: [0, 0], concentracao: 50 },
 /* 14 */ { nome: 'Sulfametoxazol 200mg + Trimetoprima 40mg (Bactrin)', doses: [0, 0], concentracao: 48 },
];

const Antipara = [
 /* 0 */ { nome: 'Anfotericina B \n50mg/ml', doses: [0, 0], concentracao: 50 },
 /* 1 */ { nome: 'Doramectina \n10mg/ml', doses: [0, 0], concentracao: 10 },
 /* 2 */ { nome: 'Fembendazol \n10%', doses: [0, 0], concentracao: 100 },
 /* 3 */ { nome: 'Fipronil \n2,5mg/ml', doses: [0, 0], concentracao: 2.5 },
 /* 4 */ { nome: 'Fluconazol \n50mg (comprimido)', doses: [0, 0], concentracao: 1 },
 /* 5 */ { nome: 'Imidacloprida + Moxidectina \n(Advocate Gatos)', doses: [0, 0], concentracao: 100 },
 /* 6 */ { nome: 'Imidacloprida + Permitrina \n(Advantage Max3)', doses: [0, 0], concentracao: 100 },
 /* 7 */ { nome: 'Itraconazol \n100mg (comprimido)', doses: [0, 0], concentracao: 1 },
 /* 8 */ { nome: 'Ivermectina \n1%', doses: [0, 0], concentracao: 10 },
 /* 9 */ { nome: 'Moxidectina \n10mg/ml', doses: [0, 0], concentracao: 10 },
 /* 10 */ { nome: 'Selamectina \n6% (Revolution)', doses: [0, 0], concentracao: 60 },
 /* 11 */ { nome: 'Nistatina \n1.000.000 UI/ml', doses: [0, 0], concentracao: 1000000 },
];

const OutrasMed = [
/* 0 */{ nome: 'Acetilcisteína \n20mg/ml', doses: [0, 0], concentracao: 20 },
/* 1 */{ nome: 'Alopurinol \n100mg (comprimido)', doses: [0, 0], concentracao: 1 },
/* 2 */{ nome: 'Aminofilina \n24mg/ml', doses: [0, 0], concentracao: 24 },
/* 3 */{ nome: 'Benazepril \n10mg (comprimido)', doses: [0, 0], concentracao: 0.5 },
/* 4 */{ nome: 'Betanecol \n5mg/ml', doses: [0, 0], concentracao: 5 },
/* 5 */{ nome: 'Bromexina \n1,6mg/ml', doses: [0, 0], concentracao: 1.6 },
/*  */// { nome: 'Carvão Ativado',  doses: [0, 0], concentracao: 50 },
/* 6 */{ nome: 'Doxapram \n20mg/ml', doses: [0, 0], concentracao: 20 },
/* 7 */{ nome: 'Enalapril \n5mg/ml', doses: [0, 0], concentracao: 5 },
/* 8 */{ nome: 'Escopolamina \n10mg/ml', doses: [0, 0], concentracao: 10 },
/* 9 */{ nome: 'Famotidina \n10mg/ml', doses: [0, 0], concentracao: 10 },
/* 10 */{ nome: 'Fluoxetina \n4mg/ml', doses: [0, 0], concentracao: 4 },
/* 11 */{ nome: 'Furosemida \n10mg/ml', doses: [0, 0], concentracao: 10 },
/* 12 */{ nome: 'Glutamina \n(Nutrisana)', doses: [0, 0], concentracao: 44 },
/* 13 */{ nome: 'Hydroxizina \n2mg/ml', doses: [0, 0], concentracao: 2 },
/* 14 */{ nome: 'Lactulose \n667mg/ml', doses: [0, 0], concentracao: 1 },
/* 15 */{ nome: 'Metoclopramida \n5mg/ml', doses: [0, 0], concentracao: 5 },
/* 16 */{ nome: 'Oleo mineral \n100%', doses: [0, 0], concentracao: 1 },
/* 17 */{ nome: 'Oxitocina \n10UI/ml', doses: [0, 0], concentracao: 10 },
/* 18 */{ nome: 'Silimarina \n100mg/ml', doses: [0, 0], concentracao: 100 },
/* 19 */{ nome: 'Sucralfato \n200mg/ml', doses: [0, 0], concentracao: 200 },
];

const Nutricional = [
 /* 0 */{ nome: 'Calcio', doses: [0, 0], concentracao: 10 },
 /* 1 */{ nome: 'Cálcio (Borogluconato)', doses: [0, 0], concentracao: 48 },
 /* 2 */{ nome: 'Calcio (gluconato)', doses: [0, 0], concentracao: 10 },
 /* 3 */{ nome: 'Ferro (sulfato)', doses: [0, 0], concentracao: 10 },
 /* 4 */{ nome: 'Vitamina A (UI)', doses: [0, 0], concentracao: 0.5 },
 /* 5 */{ nome: 'Vitamina B (complexo)', doses: [0, 0], concentracao: 100 },
 /* 6 */{ nome: 'Vitamina B1', doses: [0, 0], concentracao: 40 },
 /* 7 */{ nome: 'Vitamina B12', doses: [0, 0], concentracao: 50 },
 /* 8 */{ nome: 'Vitamina C', doses: [0, 0], concentracao: 50 },
 /* 9 */{ nome: 'Vitamina D3 (UI)', doses: [0, 0], concentracao: 5 },
 /* 10 */{ nome: 'Vitamina E', doses: [0, 0], concentracao: 200 },
 /* 11 */{ nome: 'Vitamina K', doses: [0, 0], concentracao: 50 },
];


// med roedores

const RoedoresAnalgesia = [
/* 0 */   { nome: 'Butorfanol \n1%', especies: ['Roedores', 'Gerbil, Hamster, Ratos'], doses: [[0.2, 2], [1, 5]], concentracao: 10 },
/* 1 */   { nome: 'Celecoxib \n200mg (comprimido)', especies: ['Roedores'], doses: [[10, 20]], concentracao: 1 },
/* 2 */   { nome: 'Dexametasona \n2mg/ml', especies: ['Roedores'], doses: [[0.5, 5]], concentracao: 2 },
/* 3 */   { nome: 'Dipirona \n500mg/ml', especies: ['Roedores'], doses: [[20, 50]], concentracao: 500 },
// /* 4 */   { nome: 'Escopolamina \n10mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: 10 },
/* 5 */   { nome: 'Ketoprofeno \n20mg/ml', especies: ['Roedores', 'Ratos'], doses: [[1, 2], [1, 25]], concentracao: 20 },
/* 6 */   { nome: 'Meloxicam \n0,2%', especies: ['Roedores', 'Ratos'], doses: [[0.1, 0.5], [1, 2]], concentracao: 2 },
/* 8 */   { nome: 'Predinisolona \n4mg/ml', especies: ['Roedores'], doses: [[1, 2]], concentracao: 4 },
/* 9 */   { nome: 'Tramadol \n50mg/ml', especies: ['Roedores'], doses: [[10, 20]], concentracao: 50 },
/* 10 */  { nome: 'Morfina \n10mg/ml', especies: ['Roedores'], doses: [[0.5, 2]], concentracao: 10 },
];

const RoedoresAnestSedat = [
 /* 0 */   { nome: 'Acepromazina \n1%', especies: ['Roedores', 'Ratos', 'Porquinho da Índia, Hamster'], doses: [[0.5, 1], [0.5, 2.5], [0.5, 5]], concentracao: 10 },
 /* 1 */   { nome: 'Atipamezole \n5mg/ml', especies: ['Roedores'], doses: [[1, 3]], concentracao: 5 },
 /* 2 */   { nome: 'Bupivacaina \n5mg/ml', especies: ['Porquinho da Índia, Ratos'], doses: [[1, 2]], concentracao: 5 },
 /* 3 */   { nome: 'Butorfanol \n1%', especies: ['Roedores'], doses: [[0.2, 2]], concentracao: 10 },
 /* 4 */   { nome: 'Cetamina \n100mg/ml', especies: ['Roedores'], doses: [[5, 40]], concentracao: 100 },
 /* 5 */   { nome: 'Dexmedetomidina \n0,5mg/ml', especies: ['Roedores'], doses: [[0.1, 0.3]], concentracao: 0.5 },
 /* 6 */   { nome: 'Diazepam \n5mg/ml', especies: ['Roedores', 'Porquinho da Índia'], doses: [[2.5, 5], [0.5, 5]], concentracao: 5 },
 /* 7 */   { nome: 'Flumazenil \n0,1mg/ml', especies: ['Roedores'], doses: [[0.1, 0.1]], concentracao: 0.1 },
 /* 8 */   { nome: 'Midazolam \n5mg/ml', especies: ['Roedores'], doses: [[1, 2]], concentracao: 5 },
 /* 9 */   { nome: 'Petidina \n50mg/ml', especies: ['Roedores'], doses: [[10, 20]], concentracao: 50 },
//  /* 10 */  { nome: 'Propofol 10mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: 10 },
//  /* 11 */  { nome: 'Tramadol 50mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: 50 },
 /* 12 */  { nome: 'Xilazina \n2%', especies: ['Roedores'], doses: [[5, 10]], concentracao: 20 },
];

const RoedoresATB = [
 /* 0 */ { nome: 'Amicacina \n50 mg/mL', especies: ['Roedores'], doses: [[5, 15]], concentracao: 50 },
//  /* 1 */ { nome: 'Amoxicilina', especies: ['Ratos'], doses: [[10, 100]], concentracao: 10 },
//  /* 2 */ { nome: 'Amoxicilina clavulanato', especies: ['Ratos'], doses: [[20, 100]], concentracao: 48 },
//  /* 3 */ { nome: 'Ampicilina ', especies: ['Ratos'], doses: [[20, 250]], concentracao: 0.5 },
 /* 4 */ { nome: 'Azitromicina \n40mg/ml', especies: ['Roedores'], doses: [[15, 30]], concentracao: 40 },
 /* 5 */ { nome: 'Benzoilmetronidazol', especies: ['Roedores', 'Gerbil, Hamster, Ratos'], doses: [[10, 25], [10, 50]], concentracao: 25 },
//  /* 6 */ { nome: 'Cefalexina \n50mg/ml', especies: ['Ratos'], doses: [[15, 20]], concentracao: 50 },
 /* 7 */ { nome: 'Doxiciclina \n5mg/ml', especies: ['Roedores'], doses: [[2.5, 5]], concentracao: 5 },
 /* 8 */ { nome: 'Enrofloxacina \n5%', especies: ['Roedores'], doses: [[5, 20]], concentracao: 50 },
 /* 9 */ { nome: 'Gentamicina \n40mg/ml', especies: ['Roedores'], doses: [[2, 24]], concentracao: 40 },
 /* 10 */ { nome: 'Metronidazol \n0,5%', especies: ['Roedores', 'Gerbil, Hamster, Ratos'], doses: [[10, 25], [10, 50]], concentracao: 5 },
 /* 11 */ { nome: 'Oxitetraciclina \n200mg/ml', especies: ['Chinchila', 'Porquinho da Índia', 'Gerbil, Hamster, Ratos'], doses: [[15, 15], [5, 20], [20, 25]], concentracao: 200 },
 /* 12 */ { nome: 'Sulfadimetoxina 5g + Metronidazol 5g (Giardicid)', especies: ['Roedores'], doses: [[25, 50]], concentracao: 50 },
 /* 13 */ { nome: 'Sulfametoxazol 200mg + Trimetoprima 40mg (Bactrin)', especies: ['Roedores', 'Gerbil, Ratos'], doses: [[15, 30], [50, 100]], concentracao: 48 },
];

const RoedoresAntipara = [
 /* 0 */ { nome: 'Anfotericina B \n50mg/ml', especies: ['Porquinho da Índia'], doses: [[1.25, 2.5]], concentracao: 50 },
 /* 1 */ { nome: 'Doramectina \n10mg/ml', especies: ['Roedores'], doses: [[0.2, 0.5]], concentracao: 10 },
 /* 2 */ { nome: 'Fembendazol \n10%', especies: ['Roedores'], doses: [[20, 50]], concentracao: 100 },
//  /* 3 */ { nome: 'Fipronil \n2,5mg/ml', especies: ['Roedores'], doses: [[7.5, 7.5]], concentracao: 2.5 },
//  /* 4 */ { nome: 'Fluconazol \n50mg (comprimido)', especies: ['Roedores'], doses: [[0, 0]], concentracao: 1 },
 /* 5 */ { nome: 'Imidacloprida + Moxidectina \n(Advocate Gatos)', especies: ['Roedores'], doses: [[20, 20]], concentracao: 100 },
//  /* 6 */ { nome: 'Imidacloprida + Permitrina \n(Advantage Max3)', especies: ['Roedores'], doses: [[0, 0]], concentracao: 100 },
 /* 7 */ { nome: 'Itraconazol \n100mg (comprimido)', especies: ['Roedores'], doses: [[2.5, 10]], concentracao: 1 },
 /* 8 */ { nome: 'Ivermectina \n1%', especies: ['Roedores'], doses: [[0.2, 0.5]], concentracao: 10 },
 /* 9 */ { nome: 'Moxidectina \n10mg/ml', especies: ['Roedores'], doses: [[20, 20]], concentracao: 10 },
 /* 10 */ { nome: 'Selamectina \n6% (Revolution)', especies: ['Roedores'], doses: [[15, 30]], concentracao: 60 },
 /* 11 */ { nome: 'Nistatina \n1.000.000 UI/ml', especies: ['Roedores'], doses: [[60000, 90000]], concentracao: 1000000 },
];

const RoedoresOutrasMed = [
/* 0 */{ nome: 'Acetilcisteína \n20mg/ml', especies: ['Roedores'], doses: [[3, 3]], concentracao: 20 },
// /* 1 */{ nome: 'Alopurinol \n100mg (comprimido)', especies: ['Roedores'], doses: [[0, 0]], concentracao: 1 },
/* 2 */{ nome: 'Aminofilina \n24mg/ml', especies: ['Ratos', 'Porquinho da Índia'], doses: [[10, 10], [50, 50]], concentracao: 24 },
/* 3 */{ nome: 'Benazepril \n10mg (comprimido)', especies: ['Roedores'], doses: [[0.05, 0.1]], concentracao: 0.5 },
// /* 4 */{ nome: 'Betanecol \n5mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: 5 },
/* 5 */{ nome: 'Bromexina \n1,6mg/ml', especies: ['Roedores'], doses: [[0.5, 10]], concentracao: 1.6 },
/*  */// { nome: 'Carvão Ativado',  especies: ['Roedores'], doses: [[0, 0]], concentracao: 50 },
/* 6 */{ nome: 'Doxapram \n20mg/ml', especies: ['Roedores'], doses: [[5, 10]], concentracao: 20 },
/* 7 */{ nome: 'Enalapril \n5mg/ml', especies: ['Roedores'], doses: [[0.5, 1]], concentracao: 5 },
// /* 8 */{ nome: 'Escopolamina \n10mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: 10 },
/* 9 */{ nome: 'Famotidina \n10mg/ml', especies: ['Chinchila, Porquinho da Índia'], doses: [[0.4, 0.5]], concentracao: 10 },
/* 10 */{ nome: 'Fluoxetina \n4mg/ml', especies: ['Roedores', 'Ratos'], doses: [[5, 10], [1, 5]], concentracao: 4 },
/* 11 */{ nome: 'Furosemida \n10mg/ml', especies: ['Roedores'], doses: [[1, 5]], concentracao: 10 },
// /* 12 */{ nome: 'Glutamina \n(Nutrisana)', especies: ['Roedores'], doses: [[0, 0]], concentracao: 44 },
// /* 13 */{ nome: 'Hydroxizina \n2mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: 2 },
// /* 14 */{ nome: 'Lactulose \n667mg/ml', especies: ['Roedores'], doses: [[0.5, 2]], concentracao: 667 },
/* 15 */{ nome: 'Metoclopramida \n5mg/ml', especies: ['Roedores'], doses: [[0.2, 1]], concentracao: 5 },
// /* 16 */{ nome: 'Oleo mineral \n100%', especies: ['Roedores'], doses: [[0, 0]], concentracao: 1 },
/* 17 */{ nome: 'Oxitocina \n10UI/ml', especies: ['Roedores'], doses: [[0.2, 1]], concentracao: 10 },
/* 18 */{ nome: 'Silimarina \n100mg/ml', especies: ['Roedores'], doses: [[4, 15]], concentracao: 100 },
/* 19 */{ nome: 'Sucralfato \n200mg/ml', especies: ['Roedores'], doses: [[25, 100]], concentracao: 200 },
];

const RoedoresNutricional = [
    { nome: 'Calcio', doses: [0, 0], concentracao: 10 },
    { nome: 'Cálcio (Borogluconato)', doses: [0, 0], concentracao: 48 },
    { nome: 'Calcio (gluconato)', doses: [0, 0], concentracao: 10 },
    { nome: 'Ferro (sulfato)', doses: [0, 0], concentracao: 10 },
    { nome: 'Vitamina A (UI)', doses: [0, 0], concentracao: 0.5 },
    { nome: 'Vitamina B (complexo)', doses: [0, 0], concentracao: 100 },
    { nome: 'Vitamina B1', doses: [0, 0], concentracao: 40 },
    { nome: 'Vitamina B12', doses: [0, 0], concentracao: 50 },
    { nome: 'Vitamina C', doses: [0, 0], concentracao: 50 },
    { nome: 'Vitamina D3 (UI)', doses: [0, 0], concentracao: 5 },
    { nome: 'Vitamina E', doses: [0, 0], concentracao: 200 },
    { nome: 'Vitamina K', doses: [0, 0], concentracao: 50 },
];


export {
    medEmergenciaAves,
    AnestesiaRoedoresDesgaste,
    medEmergenciaMamiferos,
    AnestesiaCoelhoDesgaste,
    AnestSedat,
    Analgesia,
    OutrasMed,
    Nutricional,
    Antipara,
    Atb,
    RoedoresAnalgesia,
    RoedoresATB,
    RoedoresAnestSedat,
    RoedoresOutrasMed,
    RoedoresAntipara,
    RoedoresNutricional,
    AnestesiaPequenosRoedores,
    AnestesiaPsitacideos,
    AnestesiaTrachemys,
}
