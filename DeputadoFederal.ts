import { Politico } from "./Politico";

export class DeputadoFederal extends Politico {

    private bancada: string;


    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        bancada: string
    ) {

        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.bancada = bancada;
    }


    getBancada(): string {
        return this.bancada;
    }

    setBancada(bancada: string): void {
        this.bancada = bancada;
    }


    mandato(): string {
        return "O deputado federal legisla sobre assuntos federais e fiscaliza o presidente.";
    }


    votarPEC(): string {
        return "O deputado federal vota PECs federais.";
    }

    criarCPINacional(): string {
        return "O deputado federal pode criar uma CPI nacional.";
    }

    votarPPA(): string {
        return "O deputado federal vota o PPA nacional.";
    }

    votarLDO(): string {
        return "O deputado federal vota a LDO nacional.";
    }

    votarLOA(): string {
        return "O deputado federal vota a LOA nacional.";
    }

    proporLeiComplementar(): string {
        return "O deputado federal propõe leis complementares.";
    }
}