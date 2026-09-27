"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const Politico_1 = require("./Politico");
class Senador extends Politico_1.Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, anoEleicao) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getAnoEleicao() {
        return this.anoEleicao;
    }
    setAnoEleicao(anoEleicao) {
        this.anoEleicao = anoEleicao;
    }
    mandato() {
        return "O senador sabatina e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.";
    }
    aprovarAutoridades() {
        return "O senador aprova autoridades de alto escalão.";
    }
    julgarCrimesResponsabilidade() {
        return "O senador julga crimes de responsabilidade.";
    }
    representarEstado() {
        return "O senador representa os interesses do seu Estado.";
    }
}
exports.Senador = Senador;
