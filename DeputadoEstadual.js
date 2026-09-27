"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoEstadual = void 0;
const Politico_1 = require("./Politico");
class DeputadoEstadual extends Politico_1.Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, comissoes) {
        super(nome, partido, "Estadual", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.comissoes = comissoes;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getComissoes() {
        return this.comissoes;
    }
    setComissoes(comissoes) {
        this.comissoes = comissoes;
    }
    mandato() {
        return "O deputado estadual legisla sobre assuntos do Estado e fiscaliza o governador.";
    }
    votarPPA() {
        return "O deputado estadual vota o PPA estadual.";
    }
    votarLOA() {
        return "O deputado estadual vota a LOA estadual.";
    }
    votarLDO() {
        return "O deputado estadual vota a LDO estadual.";
    }
    proporEmendaConstitucional() {
        return "O deputado estadual propõe emendas à Constituição Estadual.";
    }
    criarCPI() {
        return "O deputado estadual pode criar uma CPI estadual.";
    }
}
exports.DeputadoEstadual = DeputadoEstadual;
