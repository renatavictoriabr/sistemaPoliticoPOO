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
console.log("DADOS DO PRESIDENTE (br)");
console.log("Nome:", presidente.getNome());
console.log("Partido:", presidente.getPartido());
console.log("Esfera:", presidente.getEsfera());
console.log("Poder:", presidente.getPoder());
console.log("Local de trabalho:", presidente.getLocalTrabalho());
console.log("Endereço:", presidente.getEnderecoTrabalho());
console.log("Remuneração:", presidente.getRemuneracao());
console.log("Projetos:", presidente.getProjetos());
console.log("Quantidade de ministros:", presidente.getQuantidadeMinistros());


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
    console.log("GOVERNADOR (pe)");
    console.log("Nome:", governadorPE.getNome());
    console.log("Partido:", governadorPE.getPartido());
    console.log("Esfera:", governadorPE.getEsfera());
    console.log("Poder:", governadorPE.getPoder());
    console.log("Local de trabalho:", governadorPE.getLocalTrabalho());
    console.log("Endereço:", governadorPE.getEnderecoTrabalho());
    console.log("Remuneração:", governadorPE.getRemuneracao());
    console.log("Projetos:", governadorPE.getProjetos());
    console.log("Estado:", governadorPE.getEstado());
    console.log("Quantidade de secretários:", governadorPE.getQuantidadeSecretarios());
	

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
console.log("GOVERNADOR (ba)");
    console.log("Nome:", governadorBA.getNome());
    console.log("Partido:", governadorBA.getPartido());
    console.log("Esfera:", governadorBA.getEsfera());
    console.log("Poder:", governadorBA.getPoder());
    console.log("Local de trabalho:", governadorBA.getLocalTrabalho());
    console.log("Endereço:", governadorBA.getEnderecoTrabalho());
    console.log("Remuneração:", governadorBA.getRemuneracao());
    console.log("Projetos:", governadorBA.getProjetos());
    console.log("Estado:", governadorBA.getEstado());
    console.log("Quantidade de secretários:", governadorBA.getQuantidadeSecretarios());


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
console.log("Nome:", deputadoEstadualPE1.getNome());
console.log("Partido:", deputadoEstadualPE1.getPartido());
console.log("Esfera:", deputadoEstadualPE1.getEsfera());
console.log("Poder:", deputadoEstadualPE1.getPoder());
console.log("Local de trabalho:", deputadoEstadualPE1.getLocalTrabalho());
console.log("Endereço:", deputadoEstadualPE1.getEnderecoTrabalho());
console.log("Remuneração:", deputadoEstadualPE1.getRemuneracao());
console.log("Projetos:", deputadoEstadualPE1.getProjetos());
console.log("Estado:", deputadoEstadualPE1.getEstado());
console.log("Comissões:", deputadoEstadualPE1.getComissoes());


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
console.log("deputada e. rosa amorim");

console.log("Nome:", deputadoEstadualPE2.getNome());
console.log("Partido:", deputadoEstadualPE2.getPartido());
console.log("Esfera:", deputadoEstadualPE2.getEsfera());
console.log("Poder:", deputadoEstadualPE2.getPoder());
console.log("Local de trabalho:", deputadoEstadualPE2.getLocalTrabalho());
console.log("Endereço:", deputadoEstadualPE2.getEnderecoTrabalho());
console.log("Remuneração:", deputadoEstadualPE2.getRemuneracao());
console.log("Projetos:", deputadoEstadualPE2.getProjetos());
console.log("Estado:", deputadoEstadualPE2.getEstado());
console.log("Comissões:", deputadoEstadualPE2.getComissoes());


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
console.log("deputado e. cayo albino");

console.log("Nome:", deputadoEstadualPE3.getNome());
console.log("Partido:", deputadoEstadualPE3.getPartido());
console.log("Esfera:", deputadoEstadualPE3.getEsfera());
console.log("Poder:", deputadoEstadualPE3.getPoder());
console.log("Local de trabalho:", deputadoEstadualPE3.getLocalTrabalho());
console.log("Endereço:", deputadoEstadualPE3.getEnderecoTrabalho());
console.log("Remuneração:", deputadoEstadualPE3.getRemuneracao());
console.log("Projetos:", deputadoEstadualPE3.getProjetos());
console.log("Estado:", deputadoEstadualPE3.getEstado());
console.log("Comissões:", deputadoEstadualPE3.getComissoes());


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
console.log("deputado e. alex da piatã (ba)");

console.log("Nome:", deputadoEstadualBA1.getNome());
console.log("Partido:", deputadoEstadualBA1.getPartido());
console.log("Esfera:", deputadoEstadualBA1.getEsfera());
console.log("Poder:", deputadoEstadualBA1.getPoder());
console.log("Local de trabalho:", deputadoEstadualBA1.getLocalTrabalho());
console.log("Endereço:", deputadoEstadualBA1.getEnderecoTrabalho());
console.log("Remuneração:", deputadoEstadualBA1.getRemuneracao());
console.log("Projetos:", deputadoEstadualBA1.getProjetos());
console.log("Estado:", deputadoEstadualBA1.getEstado());
console.log("Comissões:", deputadoEstadualBA1.getComissoes());

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
console.log("deputado e. angelo coronel filho (ba)");

console.log("Nome:", deputadoEstadualBA2.getNome());
console.log("Partido:", deputadoEstadualBA2.getPartido());
console.log("Esfera:", deputadoEstadualBA2.getEsfera());
console.log("Poder:", deputadoEstadualBA2.getPoder());
console.log("Local de trabalho:", deputadoEstadualBA2.getLocalTrabalho());
console.log("Endereço:", deputadoEstadualBA2.getEnderecoTrabalho());
console.log("Remuneração:", deputadoEstadualBA2.getRemuneracao());
console.log("Projetos:", deputadoEstadualBA2.getProjetos());
console.log("Estado:", deputadoEstadualBA2.getEstado());
conso

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
console.log("deputado f. andre ferreira");

console.log("Nome:", deputadoFederalPE1.getNome());
console.log("Partido:", deputadoFederalPE1.getPartido());
console.log("Esfera:", deputadoFederalPE1.getEsfera());
console.log("Poder:", deputadoFederalPE1.getPoder());
console.log("Local de trabalho:", deputadoFederalPE1.getLocalTrabalho());
console.log("Endereço:", deputadoFederalPE1.getEnderecoTrabalho());
console.log("Remuneração:", deputadoFederalPE1.getRemuneracao());
console.log("Projetos:", deputadoFederalPE1.getProjetos());
console.log("Bancada:", deputadoFederalPE1.getBancada());


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
console.log("deputada f. maria arraes");

console.log("Nome:", deputadoFederalPE2.getNome());
console.log("Partido:", deputadoFederalPE2.getPartido());
console.log("Esfera:", deputadoFederalPE2.getEsfera());
console.log("Poder:", deputadoFederalPE2.getPoder());
console.log("Local de trabalho:", deputadoFederalPE2.getLocalTrabalho());
console.log("Endereço:", deputadoFederalPE2.getEnderecoTrabalho());
console.log("Remuneração:", deputadoFederalPE2.getRemuneracao());
console.log("Projetos:", deputadoFederalPE2.getProjetos());
console.log("Bancada:", deputadoFederalPE2.getBancada());


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
console.log("deputado f. mendonça filho");

console.log("Nome:", deputadoFederalPE3.getNome());
console.log("Partido:", deputadoFederalPE3.getPartido());
console.log("Esfera:", deputadoFederalPE3.getEsfera());
console.log("Poder:", deputadoFederalPE3.getPoder());
console.log("Local de trabalho:", deputadoFederalPE3.getLocalTrabalho());
console.log("Endereço:", deputadoFederalPE3.getEnderecoTrabalho());
console.log("Remuneração:", deputadoFederalPE3.getRemuneracao());
console.log("Projetos:", deputadoFederalPE3.getProjetos());
console.log("Bancada:", deputadoFederalPE3.getBancada());


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
console.log("deputada f. alice portugal");

console.log("Nome:", deputadoFederalBA1.getNome());
console.log("Partido:", deputadoFederalBA1.getPartido());
console.log("Esfera:", deputadoFederalBA1.getEsfera());
console.log("Poder:", deputadoFederalBA1.getPoder());
console.log("Local de trabalho:", deputadoFederalBA1.getLocalTrabalho());
console.log("Endereço:", deputadoFederalBA1.getEnderecoTrabalho());
console.log("Remuneração:", deputadoFederalBA1.getRemuneracao());
console.log("Projetos:", deputadoFederalBA1.getProjetos());
console.log("Bancada:", deputadoFederalBA1.getBancada());


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
console.log("deputado f. daniel almeida");

console.log("Nome:", deputadoFederalBA2.getNome());
console.log("Partido:", deputadoFederalBA2.getPartido());
console.log("Esfera:", deputadoFederalBA2.getEsfera());
console.log("Poder:", deputadoFederalBA2.getPoder());
console.log("Local de trabalho:", deputadoFederalBA2.getLocalTrabalho());
console.log("Endereço:", deputadoFederalBA2.getEnderecoTrabalho());
console.log("Remuneração:", deputadoFederalBA2.getRemuneracao());
console.log("Projetos:", deputadoFederalBA2.getProjetos());
console.log("Bancada:", deputadoFederalBA2.getBancada());


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
console.log("SENADOR: HUMBERTO costa");

console.log("Nome:", senadorPE1.getNome());
console.log("Partido:", senadorPE1.getPartido());
console.log("Esfera:", senadorPE1.getEsfera());
console.log("Poder:", senadorPE1.getPoder());
console.log("Local de trabalho:", senadorPE1.getLocalTrabalho());
console.log("Endereço:", senadorPE1.getEnderecoTrabalho());
console.log("Remuneração:", senadorPE1.getRemuneracao());
console.log("Projetos:", senadorPE1.getProjetos());
console.log("Estado:", senadorPE1.getEstado());
console.log("Ano da eleição:", senadorPE1.getAnoEleicao());

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
console.log("senador: fernando dueire");

console.log("Nome:", senadorPE2.getNome());
console.log("Partido:", senadorPE2.getPartido());
console.log("Esfera:", senadorPE2.getEsfera());
console.log("Poder:", senadorPE2.getPoder());
console.log("Local de trabalho:", senadorPE2.getLocalTrabalho());
console.log("Endereço:", senadorPE2.getEnderecoTrabalho());
console.log("Remuneração:", senadorPE2.getRemuneracao());
console.log("Projetos:", senadorPE2.getProjetos());
console.log("Estado:", senadorPE2.getEstado());
console.log("Ano da eleição:", senadorPE2.getAnoEleicao());


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
console.log("senador angelo coronel");

console.log("Nome:", senadorBA.getNome());
console.log("Partido:", senadorBA.getPartido());
console.log("Esfera:", senadorBA.getEsfera());
console.log("Poder:", senadorBA.getPoder());
console.log("Local de trabalho:", senadorBA.getLocalTrabalho());
console.log("Endereço:", senadorBA.getEnderecoTrabalho());
console.log("Remuneração:", senadorBA.getRemuneracao());
console.log("Projetos:", senadorBA.getProjetos());
console.log("Estado:", senadorBA.getEstado());
console.log("Ano da eleição:", senadorBA.getAnoEleicao());

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
