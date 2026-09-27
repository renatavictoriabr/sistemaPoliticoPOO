"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governador = void 0;
const Politico_1 = require("./Politico");
class Governador extends Politico_1.Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, quantidadeSecretarios) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getQuantidadeSecretarios() {
        return this.quantidadeSecretarios;
    }
    setQuantidadeSecretarios(quantidadeSecretarios) {
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    mandato() {
        return "O governador sanciona e veta leis estaduais, decreta calamidade e envia PEC para a Assembleia Legislativa.";
    }
    gerirPoliciaMilitar() {
        return "O governador gere a Polícia Militar do Estado.";
    }
    administrarRodovias() {
        return "O governador administra as rodovias estaduais.";
    }
    coordenarEducacao() {
        return "O governador coordena a educação do Estado.";
    }
    coordenarSaude() {
        return "O governador coordena a saúde do Estado.";
    }
    elaborarPPA() {
        return "O governador elabora e envia o PPA estadual.";
    }
    elaborarLDO() {
        return "O governador elabora e envia a LDO estadual.";
    }
    elaborarLOA() {
        return "O governador elabora e envia a LOA estadual.";
    }
}
exports.Governador = Governador;
