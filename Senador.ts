import { Politico } from "./Politico";

export class Senador extends Politico {

    private estado: string;
    private anoEleicao: number;


    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        anoEleicao: number
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

        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }


    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    getAnoEleicao(): number {
        return this.anoEleicao;
    }

    setAnoEleicao(anoEleicao: number): void {
        this.anoEleicao = anoEleicao;
    }


    mandato(): string {
        return "O senador sabatina e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.";
    }


    aprovarAutoridades(): string {
        return "O senador aprova autoridades de alto escalão.";
    }

    julgarCrimesResponsabilidade(): string {
        return "O senador julga crimes de responsabilidade.";
    }

    representarEstado(): string {
        return "O senador representa os interesses do seu Estado.";
    }
}