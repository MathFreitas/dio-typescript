//types
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
}

const felino: IFelino = {
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
}