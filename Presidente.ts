import { Politico } from "./Politico";

export class Presidente extends Politico {

    private quantidadeMinistros: number;


    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        quantidadeMinistros: number
    ) {

        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.quantidadeMinistros = quantidadeMinistros;
    }


    getQuantidadeMinistros(): number {
        return this.quantidadeMinistros;
    }

    setQuantidadeMinistros(quantidadeMinistros: number): void {
        this.quantidadeMinistros = quantidadeMinistros;
    }


    mandato(): string {
        return "O presidente propõe, sanciona e veta leis e edita medidas provisórias.";
    }


    nomearMinistro(): string {
        return "O presidente nomeia ministros.";
    }

    exonerarMinistro(): string {
        return "O presidente exonera ministros.";
    }

    comandarForcasArmadas(): string {
        return "O presidente comanda as Forças Armadas.";
    }

    representarPais(): string {
        return "O presidente representa o país internacionalmente.";
    }

    elaborarPPA(): string {
        return "O presidente elabora e envia o PPA nacional.";
    }

    elaborarLDO(): string {
        return "O presidente elabora e envia a LDO nacional.";
    }

    elaborarLOA(): string {
        return "O presidente elabora e envia a LOA nacional.";
    }
}