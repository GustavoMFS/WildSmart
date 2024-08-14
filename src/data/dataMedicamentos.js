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
/* 0 */   { nome: 'Butorfanol', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
/* 1 */   { nome: 'Celecoxibe \n(comprimido)', doses: [0, 0], concentracao: [200], unidade: 'mg (desconsiderar volume)' },
/* 2 */   { nome: 'Dexametasona', doses: [0, 0], concentracao: [2], unidade: 'mg/ml' },
/* 3 */   { nome: 'Dipirona', doses: [0, 0], concentracao: [500], unidade: 'mg/ml' },
/* 4 */   { nome: 'Escopolamina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
/* 5 */   { nome: 'Ketoprofeno', doses: [0, 0], concentracao: [20], unidade: 'mg/ml' },
/* 6 */   { nome: 'Meloxicam', doses: [0, 0], concentracao: [1, 2, 20], unidade: 'mg/ml' },
/* 7 */   { nome: 'Predinisolona', doses: [0, 0], concentracao: [4], unidade: 'mg/ml' },
/* 8 */   { nome: 'Tramadol', doses: [0, 0], concentracao: [20, 40, 50, 100], unidade: 'mg/ml' },
/* 9 */  { nome: 'Morfina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
];

const AnestSedat = [
/* 0 */   { nome: 'Acepromazina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 1 */   { nome: 'Atipamezole', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
 /* 2 */   { nome: 'Bupivacaina', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
 /* 3 */   { nome: 'Butorfanol', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 4 */   { nome: 'Cetamina', doses: [0, 0], concentracao: [100], unidade: 'mg/ml' },
 /* 5 */   { nome: 'Dexmedetomidina', doses: [0, 0], concentracao: [0.5, 0.1], unidade: 'mg/ml' },
 /* 6 */   { nome: 'Diazepam', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
 /* 7 */   { nome: 'Flumazenil', doses: [0, 0], concentracao: [0.1], unidade: 'mg/ml' },
 /* 8 */   { nome: 'Midazolam', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
 /* 9 */   { nome: 'Petidina', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 10 */  { nome: 'Propofol', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 11 */  { nome: 'Tramadol', doses: [0, 0], concentracao: [20, 40, 50, 100], unidade: 'mg/ml' },
 /* 12 */  { nome: 'Xilazina', doses: [0, 0], concentracao: [20], unidade: 'mg/ml' },
];

const Atb = [
 /* 0 */ { nome: 'Amicacina', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 1 */ { nome: 'Amoxicilina', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 2 */ { nome: 'Amoxicilina clavulanato', doses: [0, 0], concentracao: [40], unidade: 'mg/ml' },
 /* 3 */ { nome: 'Amoxicilina triidratada', doses: [0, 0], concentracao: [150], unidade: 'mg/ml' },
 /* 4 */ { nome: 'Ampicilina', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 5 */ { nome: 'Azitromicina', doses: [0, 0], concentracao: [40], unidade: 'mg/ml' },
 /* 6 */ { nome: 'Benzoilmetronidazol', doses: [0, 0], concentracao: [25], unidade: 'mg/ml' },
 /* 7 */ { nome: 'Cefalexina', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 8 */ { nome: 'Doxiciclina', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
 /* 9 */ { nome: 'Enrofloxacina', doses: [0, 0], concentracao: [25, 50, 100], unidade: 'mg/ml' },
 /* 10 */ { nome: 'Gentamicina', doses: [0, 0], concentracao: [40], unidade: 'mg/ml' },
 /* 11 */ { nome: 'Metronidazol', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
 /* 12 */ { nome: 'Terramicina', doses: [0, 0], concentracao: [200], unidade: 'mg/ml' },
 /* 13 */ { nome: 'Sulfadimetoxina 5g + Metronidazol 5g (Giardicid)', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 14 */ { nome: 'Sulfametoxazol 200mg + Trimetoprima 40mg (Bactrin)', doses: [0, 0], concentracao: [48], unidade: 'mg/ml' },
];

const Antipara = [
 /* 0 */ { nome: 'Anfotericina B', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 1 */ { nome: 'Doramectina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 2 */ { nome: 'Fembendazol', doses: [0, 0], concentracao: [100], unidade: 'mg/ml' },
 /* 3 */ { nome: 'Fipronil', doses: [0, 0], concentracao: [2.5], unidade: 'mg/ml' },
 /* 4 */ { nome: 'Fluconazol \n(comprimido)', doses: [0, 0], concentracao: [50], unidade: 'mg (desconsiderar volume)' },
 /* 5 */ { nome: 'Imidacloprida + Moxidectina \n(Advocate Gatos)', doses: [0, 0], concentracao: [100], unidade: 'mg/ml' },
 /* 6 */ { nome: 'Imidacloprida + Permitrina \n(Advantage Max3)', doses: [0, 0], concentracao: [100], unidade: 'mg/ml' },
 /* 7 */ { nome: 'Itraconazol \n(comprimido)', doses: [0, 0], concentracao: [100], unidade: 'mg (desconsiderar volume)' },
 /* 8 */ { nome: 'Ivermectina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 9 */ { nome: 'Moxidectina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 10 */ { nome: 'Selamectina \n(Revolution)', doses: [0, 0], concentracao: [60], unidade: 'mg/ml' },
 /* 11 */ { nome: 'Nistatina', doses: [0, 0], concentracao: [100000, 1000000], unidade: 'UI/ml' },
];

const OutrasMed = [
/* 0 */{ nome: 'Acetilcisteína', doses: [0, 0], concentracao: [20, 40], unidade: 'mg/ml' },
/* 1 */{ nome: 'Alopurinol \n(comprimido)', doses: [0, 0], concentracao: [100], unidade: 'mg (desconsiderar volume)' },
/* 2 */{ nome: 'Aminofilina', doses: [0, 0], concentracao: [24], unidade: 'mg/ml' },
/* 3 */{ nome: 'Benazepril \n(comprimido)', doses: [0, 0], concentracao: [10], unidade: 'mg (desconsiderar volume)' },
/* 4 */{ nome: 'Betanecol', doses: [0, 0], concentracao: [5], unidade: 'mg/ml (manipulado)' },
/* 5 */{ nome: 'Bromexina', doses: [0, 0], concentracao: [1.6], unidade: 'mg/ml' },
/*  */// { nome: 'Carvão Ativado',  doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
/* 6 */{ nome: 'Doxapram', doses: [0, 0], concentracao: [20], unidade: 'mg/ml' },
/* 7 */{ nome: 'Enalapril', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
/* 8 */{ nome: 'Escopolamina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
/* 9 */{ nome: 'Famotidina', doses: [0, 0], concentracao: [10], unidade: 'mg/ml (manipulado)' },
/* 10 */{ nome: 'Fluoxetina', doses: [0, 0], concentracao: [4, 5], unidade: 'mg/ml' },
/* 11 */{ nome: 'Furosemida', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
/* 12 */{ nome: 'Glutamina \n(Nutrisana)', doses: [0, 0], concentracao: [44], unidade: 'mg/ml' },
/* 13 */{ nome: 'Hidroxizina', doses: [0, 0], concentracao: [2], unidade: 'mg/ml' },
/* 14 */{ nome: 'Lactulose', doses: [0, 0], concentracao: [1], unidade: '(667)mg/ml' },
/* 15 */{ nome: 'Metoclopramida', doses: [0, 0], concentracao: [1, 4, 5, 25], unidade: 'mg/ml' },
/* 16 */{ nome: 'Oleo mineral', doses: [0, 0], concentracao: [1], unidade: 'mg/ml' },
/* 17 */{ nome: 'Oxitocina', doses: [0, 0], concentracao: [10], unidade: 'UI/ml' },
/* 18 */{ nome: 'Silimarina', doses: [0, 0], concentracao: [100], unidade: 'mg/ml (manipulado)' },
/* 19 */{ nome: 'Sucralfato', doses: [0, 0], concentracao: [200], unidade: 'mg/ml' },
];

const Nutricional = [
 /* 0 */{ nome: 'Calcio', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 1 */{ nome: 'Cálcio (Borogluconato)', doses: [0, 0], concentracao: [48], unidade: 'mg/ml' },
 /* 2 */{ nome: 'Calcio (gluconato)', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 3 */{ nome: 'Ferro (sulfato)', doses: [0, 0], concentracao: [10], unidade: 'mg/ml' },
 /* 4 */{ nome: 'Vitamina A (UI)', doses: [0, 0], concentracao: [0.5], unidade: 'mg/ml' },
 /* 5 */{ nome: 'Vitamina B (complexo)', doses: [0, 0], concentracao: [100], unidade: 'mg/ml' },
 /* 6 */{ nome: 'Vitamina B1', doses: [0, 0], concentracao: [40], unidade: 'mg/ml' },
 /* 7 */{ nome: 'Vitamina B12', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 8 */{ nome: 'Vitamina C', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
 /* 9 */{ nome: 'Vitamina D3 (UI)', doses: [0, 0], concentracao: [5], unidade: 'mg/ml' },
 /* 10 */{ nome: 'Vitamina E', doses: [0, 0], concentracao: [200], unidade: 'mg/ml' },
 /* 11 */{ nome: 'Vitamina K', doses: [0, 0], concentracao: [50], unidade: 'mg/ml' },
];

// med roedores

const RoedoresAnalgesia = [
/* 0 */   { nome: 'Butorfanol', especies: ['Roedores', 'Gerbil, Hamster, Ratos'], doses: [[0.2, 2], [1, 5]], concentracao: [10], unidade: 'mg/ml' },
/* 1 */   { nome: 'Celecoxibe \n(comprimido)', especies: ['Roedores'], doses: [[10, 20]], concentracao: [200], unidade: 'mg' },
/* 2 */   { nome: 'Dexametasona', especies: ['Roedores'], doses: [[0.5, 5]], concentracao: [2], unidade: 'mg/ml' },
/* 3 */   { nome: 'Dipirona', especies: ['Roedores'], doses: [[20, 50]], concentracao: [500], unidade: 'mg/ml' },
// /* 4 */   { nome: 'Escopolamina \n10mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: [10] },
/* 5 */   { nome: 'Ketoprofeno', especies: ['Roedores', 'Ratos'], doses: [[1, 2], [1, 25]], concentracao: [20], unidade: 'mg/ml' },
/* 6 */    { nome: 'Meloxicam', especies: ['Roedores', 'Ratos'], doses: [[0.1, 0.5], [1, 2]], concentracao: [1, 2, 20], unidade: 'mg/ml' },
/* 8 */   { nome: 'Predinisolona', especies: ['Roedores'], doses: [[1, 2]], concentracao: [4], unidade: 'mg/ml' },
/* 9 */   { nome: 'Tramadol', especies: ['Roedores'], doses: [[10, 20]], concentracao: [20, 40, 50, 100], unidade: 'mg/ml' },
/* 10 */  { nome: 'Morfina', especies: ['Roedores'], doses: [[0.5, 2]], concentracao: [10], unidade: 'mg/ml' }
];

const RoedoresAnestSedat = [
 /* 0 */   { nome: 'Acepromazina', especies: ['Roedores', 'Ratos', 'Porquinho da Índia, Hamster'], doses: [[0.5, 1], [0.5, 2.5], [0.5, 5]], concentracao: [10], unidade: 'mg/ml' },
 /* 1 */   { nome: 'Atipamezole', especies: ['Roedores'], doses: [[1, 3]], concentracao: [5], unidade: 'mg/ml' },
 /* 2 */   { nome: 'Bupivacaina', especies: ['Porquinho da Índia, Ratos'], doses: [[1, 2]], concentracao: [5], unidade: 'mg/ml' },
 /* 3 */   { nome: 'Butorfanol', especies: ['Roedores'], doses: [[0.2, 2]], concentracao: [10], unidade: 'mg/ml' },
 /* 4 */   { nome: 'Cetamina', especies: ['Roedores'], doses: [[5, 40]], concentracao: [100], unidade: 'mg/ml' },
 /* 5 */   { nome: 'Dexmedetomidina', especies: ['Roedores'], doses: [[0.1, 0.3]], concentracao: [0.5, 0.1], unidade: 'mg/ml' },
 /* 6 */   { nome: 'Diazepam', especies: ['Roedores', 'Porquinho da Índia'], doses: [[2.5, 5], [0.5, 5]], concentracao: [5], unidade: 'mg/ml' },
 /* 7 */   { nome: 'Flumazenil', especies: ['Roedores'], doses: [[0.1, 0.1]], concentracao: [0.1], unidade: 'mg/ml' },
 /* 8 */   { nome: 'Midazolam', especies: ['Roedores'], doses: [[1, 2]], concentracao: [5], unidade: 'mg/ml' },
 /* 9 */   { nome: 'Petidina', especies: ['Roedores'], doses: [[10, 20]], concentracao: [50], unidade: 'mg/ml' },
//  /* 10 */  { nome: 'Propofol 10mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: [10] },
 /* 11 */  { nome: 'Tramadol', especies: ['Roedores'], doses: [[5, 40]], concentracao: [20, 40, 50, 100], unidade: 'mg/ml' },
 /* 12 */  { nome: 'Xilazina', especies: ['Roedores'], doses: [[5, 10]], concentracao: [20], unidade: 'mg/ml' }
];

const RoedoresATB = [
 /* 0 */ { nome: 'Amicacina', especies: ['Roedores'], doses: [[5, 15]], concentracao: [50], unidade: 'mg/ml' },
//  /* 1 */ { nome: 'Amoxicilina', especies: ['Ratos'], doses: [[10, 100]], concentracao: [10] },
//  /* 2 */ { nome: 'Amoxicilina clavulanato', especies: ['Ratos'], doses: [[20, 100]], concentracao: [48] },
//  /* 3 */ { nome: 'Ampicilina ', especies: ['Ratos'], doses: [[20, 250]], concentracao: [0.5] },
 /* 4 */ { nome: 'Azitromicina', especies: ['Roedores'], doses: [[15, 30]], concentracao: [40], unidade: 'mg/ml' },
 /* 5 */ { nome: 'Benzoilmetronidazol', especies: ['Roedores', 'Gerbil, Hamster, Ratos'], doses: [[10, 25], [10, 50]], concentracao: [25], unidade: 'mg/ml' },
//  /* 6 */ { nome: 'Cefalexina \n50mg/ml', especies: ['Ratos'], doses: [[15, 20]], concentracao: [50] },
 /* 7 */ { nome: 'Doxiciclina', especies: ['Roedores'], doses: [[2.5, 5]], concentracao: [5], unidade: 'mg/ml' },
 /* 8 */ { nome: 'Enrofloxacina', especies: ['Roedores'], doses: [[5, 20]], concentracao: [25, 50, 100], unidade: 'mg/ml' },
 /* 9 */ { nome: 'Gentamicina', especies: ['Roedores'], doses: [[2, 24]], concentracao: [40], unidade: 'mg/ml' },
 /* 10 */ { nome: 'Metronidazol', especies: ['Roedores', 'Gerbil, Hamster, Ratos'], doses: [[10, 25], [10, 50]], concentracao: [5], unidade: 'mg/ml' },
 /* 11 */ { nome: 'Oxitetraciclina', especies: ['Chinchila', 'Porquinho da Índia', 'Gerbil, Hamster, Ratos'], doses: [[15, 15], [5, 20], [20, 25]], concentracao: [200], unidade: 'mg/ml' },
 /* 12 */ { nome: 'Sulfadimetoxina', especies: ['Roedores'], doses: [[25, 50]], concentracao: [50], unidade: 'mg/ml' },
 /* 13 */ { nome: 'Sulfametoxazol + Trimetoprima', especies: ['Roedores', 'Gerbil, Ratos'], doses: [[15, 30], [50, 100]], concentracao: [48], unidade: 'mg/ml' }
];

const RoedoresAntipara = [
 /* 0 */ { nome: 'Anfotericina B', especies: ['Porquinho da Índia'], doses: [[1.25, 2.5]], concentracao: [50], unidade: 'mg/ml' },
 /* 1 */ { nome: 'Doramectina', especies: ['Roedores'], doses: [[0.2, 0.5]], concentracao: [10], unidade: 'mg/ml' },
 /* 2 */ { nome: 'Fembendazol', especies: ['Roedores'], doses: [[20, 50]], concentracao: [100], unidade: 'mg/ml' },
//  /* 3 */ { nome: 'Fipronil \n2,5mg/ml', especies: ['Roedores'], doses: [[7.5, 7.5]], concentracao: [2.5] },
//  /* 4 */ { nome: 'Fluconazol \n50mg (comprimido)', especies: ['Roedores'], doses: [[0, 0]], concentracao: [1] },
 /* 5 */ { nome: 'Imidacloprida + Moxidectina', especies: ['Roedores'], doses: [[20, 20]], concentracao: [100], unidade: 'mg/ml' },
//  /* 6 */ { nome: 'Imidacloprida + Permitrina \n(Advantage Max3)', especies: ['Roedores'], doses: [[0, 0]], concentracao: [100] },
 /* 7 */ { nome: 'Itraconazol\n(comprimido)', especies: ['Roedores'], doses: [[2.5, 10]], concentracao: [100], unidade: 'mg' },
 /* 8 */ { nome: 'Ivermectina', especies: ['Roedores'], doses: [[0.2, 0.5]], concentracao: [10], unidade: 'mg/ml' },
 /* 9 */ { nome: 'Moxidectina', especies: ['Roedores'], doses: [[20, 20]], concentracao: [10], unidade: 'mg/ml' },
 /* 10 */ { nome: 'Selamectina', especies: ['Roedores'], doses: [[15, 30]], concentracao: [60], unidade: 'mg/ml' },
 /* 11 */ { nome: 'Nistatina', especies: ['Roedores'], doses: [[60000, 90000]], concentracao: [100000, 1000000], unidade: 'UI/ml' }
];

const RoedoresOutrasMed = [
/* 0 */{ nome: 'Acetilcisteína', especies: ['Roedores'], doses: [[3, 3]], concentracao: [20, 40], unidade: 'mg/ml' },
// /* 1 */{ nome: 'Alopurinol \n100mg (comprimido)', especies: ['Roedores'], doses: [[0, 0]], concentracao: [1] },
/* 2 */{ nome: 'Aminofilina', especies: ['Ratos', 'Porquinho da Índia'], doses: [[10, 10], [50, 50]], concentracao: [24], unidade: 'mg/ml' },
/* 3 */{ nome: 'Benazepril\n(comprimido)', especies: ['Roedores'], doses: [[0.05, 0.1]], concentracao: [10], unidade: 'mg' },
// /* 4 */{ nome: 'Betanecol \n5mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: [5]},
/* 5 */{ nome: 'Bromexina', especies: ['Roedores'], doses: [[0.5, 10]], concentracao: [1.6], unidade: 'mg/ml' },
/*  */// { nome: 'Carvão Ativado',  especies: ['Roedores'], doses: [[0, 0]], concentracao: [50] },
/* 6 */{ nome: 'Doxapram', especies: ['Roedores'], doses: [[5, 10]], concentracao: [20], unidade: 'mg/ml' },
/* 7 */{ nome: 'Enalapril', especies: ['Roedores'], doses: [[0.5, 1]], concentracao: [5], unidade: 'mg/ml' },
// /* 8 */{ nome: 'Escopolamina \n10mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: [10], unidade: 'mg/ml' },
/* 9 */{ nome: 'Famotidina', especies: ['Chinchila, Porquinho da Índia'], doses: [[0.4, 0.5]], concentracao: [10], unidade: 'mg/ml' },
/* 10 */{ nome: 'Fluoxetina', especies: ['Roedores', 'Ratos'], doses: [[5, 10], [1, 5]], concentracao: [4, 5], unidade: 'mg/ml' },
/* 11 */{ nome: 'Furosemida', especies: ['Roedores'], doses: [[1, 5]], concentracao: [10], unidade: 'mg/ml' },
// /* 12 */{ nome: 'Glutamina \n(Nutrisana)', especies: ['Roedores'], doses: [[0, 0]], concentracao: [44], unidade: 'mg/ml' },
// /* 13 */{ nome: 'Hydroxizina \n2mg/ml', especies: ['Roedores'], doses: [[0, 0]], concentracao: [2], unidade: 'mg/ml' },
// /* 14 */{ nome: 'Lactulose \n667mg/ml', especies: ['Roedores'], doses: [[0.5, 2]], concentracao: [667], unidade: 'mg/ml' },
/* 15 */{ nome: 'Metoclopramida', especies: ['Roedores'], doses: [[0.2, 1]], concentracao: [1, 4, 5, 25], unidade: 'mg/ml' },
// /* 16 */{ nome: 'Oleo mineral \n100%', especies: ['Roedores'], doses: [[0, 0]], concentracao: [1], unidade: 'mg/ml' },
/* 17 */{ nome: 'Oxitocina', especies: ['Roedores'], doses: [[0.2, 1]], concentracao: [10], unidade: 'UI/ml' },
/* 18 */{ nome: 'Silimarina', especies: ['Roedores'], doses: [[4, 15]], concentracao: [100], unidade: 'mg/ml' },
/* 19 */{ nome: 'Sucralfato', especies: ['Roedores'], doses: [[25, 100]], concentracao: [200], unidade: 'mg/ml' },
];

const RoedoresNutricional = [
    { nome: 'Calcio', doses: [0, 0], concentracao: [10] },
    { nome: 'Cálcio (Borogluconato)', doses: [0, 0], concentracao: [48] },
    { nome: 'Calcio (gluconato)', doses: [0, 0], concentracao: [10] },
    { nome: 'Ferro (sulfato)', doses: [0, 0], concentracao: [10] },
    { nome: 'Vitamina A (UI)', doses: [0, 0], concentracao: [0.5] },
    { nome: 'Vitamina B (complexo)', doses: [0, 0], concentracao: [100] },
    { nome: 'Vitamina B1', doses: [0, 0], concentracao: [40] },
    { nome: 'Vitamina B12', doses: [0, 0], concentracao: [50] },
    { nome: 'Vitamina C', doses: [0, 0], concentracao: [50] },
    { nome: 'Vitamina D3 (UI)', doses: [0, 0], concentracao: [5] },
    { nome: 'Vitamina E', doses: [0, 0], concentracao: [200] },
    { nome: 'Vitamina K', doses: [0, 0], concentracao: [50] },
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
