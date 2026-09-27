import { Politico } from "./Politico";

export class DeputadoEstadual extends Politico {

    private estado: string;
    private comissoes: string[];


    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        comissoes: string[]
    ) {

        super(
            nome,
            partido,
            "Estadual",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.comissoes = comissoes;
    }


    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    getComissoes(): string[] {
        return this.comissoes;
    }

    setComissoes(comissoes: string[]): void {
        this.comissoes = comissoes;
    }


    mandato(): string {
        return "O deputado estadual legisla sobre assuntos do Estado e fiscaliza o governador.";
    }


    votarPPA(): string {
        return "O deputado estadual vota o PPA estadual.";
    }

    votarLOA(): string {
        return "O deputado estadual vota a LOA estadual.";
    }

    votarLDO(): string {
        return "O deputado estadual vota a LDO estadual.";
    }

    proporEmendaConstitucional(): string {
        return "O deputado estadual propõe emendas à Constituição Estadual.";
    }

    criarCPI(): string {
        return "O deputado estadual pode criar uma CPI estadual.";
    }
}