import { Politico } from "./Politico";

export class Governador extends Politico {

    private quantidadeSecretarios: number;
    private estado: string;


    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        quantidadeSecretarios: number
    ) {

        super(
            nome,
            partido,
            "Estadual",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }


    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    getQuantidadeSecretarios(): number {
        return this.quantidadeSecretarios;
    }

    setQuantidadeSecretarios(quantidadeSecretarios: number): void {
        this.quantidadeSecretarios = quantidadeSecretarios;
    }


    mandato(): string {
        return "O governador sanciona e veta leis estaduais, decreta calamidade e envia PEC para a Assembleia Legislativa.";
    }


    gerirPoliciaMilitar(): string {
        return "O governador gere a Polícia Militar do Estado.";
    }

    administrarRodovias(): string {
        return "O governador administra as rodovias estaduais.";
    }

    coordenarEducacao(): string {
        return "O governador coordena a educação do Estado.";
    }

    coordenarSaude(): string {
        return "O governador coordena a saúde do Estado.";
    }

    elaborarPPA(): string {
        return "O governador elabora e envia o PPA estadual.";
    }

    elaborarLDO(): string {
        return "O governador elabora e envia a LDO estadual.";
    }

    elaborarLOA(): string {
        return "O governador elabora e envia a LOA estadual.";
    }
}