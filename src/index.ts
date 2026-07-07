
class Game {
    constructor(
      public nome: string,
      public plataforma: string,
      public genero: string,
      public valorDiaria: number,
      public disponivel: boolean = true
    ) {}
  }
  class Cliente {
    constructor(
      public nome: string,
      public idade: number,
      public telefone: string,
      public email: string
    ) {}
  }

  class Locacao {
    constructor(
      public jogo: Game,
      public cliente: Cliente,
      public dataLocacao: string,
      public dataDevolucao: string        
    ) 
    {
  this.jogo.disponivel = false;

    }
    verificarAtraso() {
      const hoje = new Date("2026-06-28");
      const devolucao = new Date(this.dataDevolucao);
    
      return hoje > devolucao
        ? "Locação atrasada!"
        : "Dentro do prazo.";
    }

    calcularValor() {
      const locacao = new Date(this.dataLocacao);
      const devolucao = new Date(this.dataDevolucao);
    
      const diferenca = devolucao.getTime() - locacao.getTime();
    
      const dias = diferenca / (1000 * 60 * 60 * 24);
    
      return dias * this.jogo.valorDiaria;
    }


      mostrarLoca() { 
        console.log("=========================");
        console.log("Jogo:", this.jogo.nome);
        console.log("Plataforma:", this.jogo.plataforma);
        console.log("Gênero:", this.jogo.genero);
        console.log("Cliente:", this.cliente.nome);
        console.log("Data da locação:", this.dataLocacao);
        console.log("Data de devolução:", this.dataDevolucao);
        console.log("Valor da diária: R$", this.jogo.valorDiaria);
      
        console.log("Valor previsto: R$", this.calcularValor().toFixed(2));
        console.log("Situação:", this.verificarAtraso());
      
        console.log("Disponível:", this.jogo.disponivel ? "Sim" : "Não");
        console.log("=========================");

    }
  }

//JOGOS AQ----------

const jogo1 = new Game (
  "PES 2012:",
  "PS3",
  "Esportes",
  9.50

);

const jogo2 = new Game (
  "Need for Speed Underground II",
  "PS2",
  "Corrida",
  7.99
);


const jogo3 = new Game (
  "God Of War Ragnarok",
  "PS5",
  "Aventura",
  15
  );


  const jogo4 = new Game (
    "Red Dead Redemption",
    "PS3",
    "Aventura",
    22
  );

  const jogo5 = new Game (
    "Red Dead Redemption 2",
    "PS4",
    "Aventura",
    42.90
  );

  const jogo6 = new Game (
    "God of War (2007)",
    "PS2",
    "Hack n'Slash",
    22.50
  );

const jogo7= new Game (
  "Grand Theft Auto: Vice City",
  "PS2",
  "Mundo Aberto",
  18.90
);


const jogo8 = new Game (
  "Grand Theft Auto: San Andreas",
  "PS2",
  "Mundo Aberto",
  19.99
);


// CLIENTES AQ ----------


const cliente1 = new Cliente(
  "Leomar Junior",
  19,
  "(51)9999-9234",
  "LeomarJ@gmail.com"
);


const cliente2 = new Cliente(
  "Pedro Dewes",
  18,
  "(51)8888-1234",
  "PedroDew@gmail.com"
);

const cliente3 = new Cliente(
  "João Silva",
  22,
  "(51)9999-1111",
  "joao.silva@gmail.com"
);

const cliente4 = new Cliente(
  "Liege Souza",
  21,
  "(51)9888-2222",
  "liege.souza@gmail.com"
);

const cliente5 = new Cliente(
  "Valentina Costa",
  16,
  "(51)9777-3333",
  "valentina.costa@gmail.com"
);

const cliente6 = new Cliente(
  "Lucas Oliveira",
  22,
  "(51)9666-4444",
  "lucas.oliveira@gmail.com"
);

const cliente7 = new Cliente(
  "Miguel Ferreira",
  19,
  "(51)9555-5555",
  "miguel.ferreira@gmail.com"
);

const cliente8 = new Cliente(
  "Daniel Almeida",
  31,
  "(51)9444-6666",
  "daniel.almeida@gmail.com"
);

const cliente9 = new Cliente(
  "Leonardo Martins",
  33,
  "(51)9333-7777",
  "leonardo.martins@gmail.com"
);

const cliente10 = new Cliente(
  "Arthur Pereira",
  17,
  "(51)9222-8888",
  "arthur.pereira@gmail.com"
);

const cliente11 = new Cliente(
  "Athos Ribeiro",
  19,
  "(51)9111-9999",
  "athos.ribeiro@gmail.com"
);

// LOCACAO AQ -----------
const locacao1 = new Locacao(
  jogo1,
  cliente7,
  "2026-05-15",
  "2026-05-22"
);

const locacao2 = new Locacao(
  jogo3,
  cliente10,
  "2026-06-17",
  "2026-06-24"
);

const locacao3 = new Locacao(
  jogo8,
  cliente5,
  "2026-05-18",
  "2026-05-25"
);

const locacao4 = new Locacao(
  jogo2,
  cliente11,
  "2026-06-19",
  "2026-06-26"
);

const locacao5 = new Locacao(
  jogo7,
  cliente1,
  "2026-05-20",
  "2026-05-27"
);

const locacao6 = new Locacao(
  jogo4,
  cliente8,
  "2026-07-20",
  "2026-07-25"
);

const locacao7 = new Locacao(
  jogo5,
  cliente3,
  "2026-07-21",
  "2026-07-26"
);

const locacao8 = new Locacao(
  jogo6,
  cliente6,
  "2026-07-22",
  "2026-07-27"
);


// PARA MOSTRAR -----
locacao1.mostrarLoca();
locacao2.mostrarLoca();
locacao3.mostrarLoca();
locacao4.mostrarLoca();
locacao5.mostrarLoca();
locacao6.mostrarLoca();
locacao7.mostrarLoca();
locacao8.mostrarLoca();
