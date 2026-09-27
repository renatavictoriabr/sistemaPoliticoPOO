import { Politico } from "./Politico";

import { Presidente } from "./Presidente";
import { Governador } from "./Governador";
import { DeputadoEstadual } from "./DeputadoEstadual";
import { DeputadoFederal } from "./DeputadoFederal";
import { Senador } from "./Senador";

const presidente = new Presidente(
    "Lula",
    "PT",
    "Palácio do Planalto",
    "Brasília - DF",
    44088.52,
    ["Educação e Inclusão Social",
	"Transferência de Renda e Combate à Fome",
	"Habitação e Infraestrutura",
	"Saúde e Trabalho"],
    38
);


const governadorPE = new Governador(
    "Raquel Lyra",
    "PSD",
    "Palácio do Campo das Princesas",
    "Recife - PE",
    60000,
    ["Segurança Pública",
	"Educação",
	"Mobilidade Urbana",
	"Infraestrutura Viária",
	"Programa Palafita ZEro",
	"Casas Azuis",
	"Habitação e Centro de Recife",
	"Desenvolvimento Regional"],
    "Pernambuco",
    30
);

const governadorBA = new Governador(
    "Jerônimo Rodrigues",
    "PT",
    "Palácio de Ondrina",
    "Salvador - BA",
    36894.89,
    ["Educação e Inclusão Social",
	"Agricultura Familiar e Desenvolvimento Rural",
	"Infraestrutura e Mobilidade Urbana",
	"Saúde",
	"Cultura e Descentralização"],
    "Bahia",
    25
);


const deputadoEstadualPE1 = new DeputadoEstadual(
    "Abimael Santos",
    "PL",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    34774.64,
    ["Segurança Pública e Combate às Drogas",
	"Economia e Defesa do Consumidor",
	"Educação e Sociedade",
	"Gestão de Riscos e Desastres",
	"Turismo, Cultura e Saúde"],
    "Pernambuco",
    ["Comissão de Assuntos Municipais",
	"Comissão de Desenvolvimento Econômico e Turismo"]
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "Rosa Amorin",
    "PT",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    34774.64,
    ["Agricultura, Combate à Fome e Clima",
	"Direitos Humanos, Raça e Gênero",
	"Cultura e Sociedade"],
    "Pernambuco",
    ["Comissão de meio ambiente",
	"Cidadania, Direitos humanos e participação popular"]
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Cayo Albino",
    "PSB",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    34774.64,
    ["Código de defesa dos autistas",
	"Orçamento da juventude",
	"defesa do cooperativismo",
	"infraestrutura e interiorização"],
    "Pernambuco",
    ["Membro titular da comissão de constituição, legislação e justiça"]
);

const deputadoEstadualBA1 = new DeputadoEstadual(
    "Alex da Piatã",
    "PSD",
    "Assembleia Legislativa da Bahia",
    "Salvador - BA",
    34774.00,
    ["Saúde e Acessibilidade",
	"defesa da mulher e segurança",
	"proteção ambiental e educação"],
    "Bahia",
    ["Biografias de patronos de escola",
	"combate ao bulling"]
);

const deputadoEstadualBA2 = new DeputadoEstadual(
    "Angelo Coronel Filho",
    "Republicanos",
    "Assembleia Legislativa da Bahia",
    "Salvador - BA",
    34774.64,
    ["acessibilidade e transporte",
	"direitos e cidadania",
	"proteção animal e educação",
	"defesa da mulher"],
    "Bahia",
    ["Comissão de saúde e saneamento",
	"Fianaças, orçamento, fiscalização e controle"]
);

const deputadoFederalPE1 = new DeputadoFederal(
    "André Ferreira",
    "PL",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19,
    ["Inclusão automática na tarifa social de energia elétrica",
	"Tarifa social de água e esgoto",
	"prioridade no sus para vitimas de violência doméstica",
	"isenção de ipi para motoristas de aplicativo"],
    "Bancada regional, bancada do partido liberal e Frente parlamentar evangélica"
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Maria Arraes",
    "Solidariedade",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19,
    [
        "Certificado empresa promotora da saúde mental",
        "Ampliação da pensão alimentícia por abandono afetivo",
        "Programa de combate à mortalidade materna",
        "Projeto Banco Vermelho"
    ],
    "Bancada regional, bancada da Solidariedade e federação e pautas sociais, direitos humanos e representatividade"
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Mendonça Filho",
    "União Brasil",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19,
    ["novo ensino medio",
	"isenção de imposto de renda sobre participação nos lucros",
	"fim do emplacamento frontal de motocicletas",
	"autonomia de banco central"],
    "bancada pernambucana, bancada da união Brasil e gestão pública e a economia de mercado"
);

const deputadoFederalBA1 = new DeputadoFederal(
    "Alice Portugal",
    "PCdoB",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19,
    ["inclusão de bolsistas na previdência",
	"validade intermediária para laudos de deficiência permanente",
	"fim da revista íntima em locais trabalho",
	"combate a LGBTfobia no futebol"],
    "Bancada baiana, bancada da federação Brasil da esperança e bancada feminina"
);

const deputadoFederalBA2 = new DeputadoFederal(
    "Daniel Almeida",
    "PCdoB",
    "Câmara dos Deputados",
    "Brasília - DF",
    46366.19,
    ["dia nacional de combate a intolerâncis religiosa",
	"redução da jornada de trabalho e fim da escala 6x1",
	"registro profissional de operadores de telemarketing",
	"atuação de defesa do consumidor"],
    "Bancada baiana, bancada da federação Brasil da esperança e bancada frene parlamentar da cultura"
);

const senadorPE1 = new Senador(
    "Humberto Costa",
    "PT",
    "Senado Federal",
    "Brasília - DF",
    46366.19,
    ["regulação de apostas esportivas online",
	"proteção e auxilio financeiro a mulheres agredidas",
	"saúde pública e o sus",
	"regulação da internet e cultura"],
    "Pernambuco",
    2019
);

const senadorPE2 = new Senador(
    "Fernando Dueire",
    "PSD",
    "Senado Federal",
    "Brasília - DF",
    46366.19,
    ["Modernização das fiações urbanas",
	"recuperação de estradas rurais",
	"economia azul e preservação costeira",
	"desconto da CNH para idosos"],
    "Pernambuco",
    2019
);

const senadorBA = new Senador(
    "Angelo Coronel",
    "Republicanos",
    "Senado Federal",
    "Brasília - DF",
    46366.19,
    ["proteção ao semiarido e credito rural",
	"orçamento, emendas e municipios",
	"tecnologia e regulação da internet",
	"cacau e projetos trabalhistas"],
    "Bahia",
    2019
);

console.log("presidentee");
console.log(presidente.mandato());
console.log(presidente.nomearMinistro());
console.log(presidente.exonerarMinistro());
console.log(presidente.comandarForcasArmadas());
console.log(presidente.representarPais());
console.log(presidente.elaborarPPA());
console.log(presidente.elaborarLDO());
console.log(presidente.elaborarLOA());


console.log("governadores");
console.log(governadorPE.mandato());
console.log(governadorPE.gerirPoliciaMilitar());
console.log(governadorPE.administrarRodovias());
console.log(governadorPE.coordenarEducacao());
console.log(governadorPE.coordenarSaude());
console.log(governadorPE.elaborarPPA());
console.log(governadorPE.elaborarLDO());
console.log(governadorPE.elaborarLOA());

console.log(governadorBA.mandato());


console.log("Deputados estaduais");
console.log(deputadoEstadualPE1.mandato());
console.log(deputadoEstadualPE1.votarPPA());
console.log(deputadoEstadualPE1.votarLOA());
console.log(deputadoEstadualPE1.votarLDO());
console.log(deputadoEstadualPE1.proporEmendaConstitucional());
console.log(deputadoEstadualPE1.criarCPI());


console.log("deputados federais");
console.log(deputadoFederalPE1.mandato());
console.log(deputadoFederalPE1.votarPEC());
console.log(deputadoFederalPE1.criarCPINacional());
console.log(deputadoFederalPE1.votarPPA());
console.log(deputadoFederalPE1.votarLDO());
console.log(deputadoFederalPE1.votarLOA());
console.log(deputadoFederalPE1.proporLeiComplementar());


console.log("senadores");
console.log(senadorPE1.mandato());
console.log(senadorPE1.aprovarAutoridades());
console.log(senadorPE1.julgarCrimesResponsabilidade());
console.log(senadorPE1.representarEstado());

const politicos: Politico[] = [
    presidente,
    governadorPE,
    governadorBA,
    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,
    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,
    senadorPE1,
    senadorPE2,
	senadorBA
];

console.log("POLIMORFISMO");

for (const politico of politicos) {
    console.log(politico.mandato());
}