"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoFederal = void 0;
const Politico_1 = require("./Politico");
class DeputadoFederal extends Politico_1.Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, bancada) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    mandato() {
        return "O deputado federal legisla sobre assuntos federais e fiscaliza o presidente.";
    }
    votarPEC() {
        return "O deputado federal vota PECs federais.";
    }
    criarCPINacional() {
        return "O deputado federal pode criar uma CPI nacional.";
    }
    votarPPA() {
        return "O deputado federal vota o PPA nacional.";
    }
    votarLDO() {
        return "O deputado federal vota a LDO nacional.";
    }
    votarLOA() {
        return "O deputado federal vota a LOA nacional.";
    }
    proporLeiComplementar() {
        return "O deputado federal propõe leis complementares.";
    }
}
exports.DeputadoFederal = DeputadoFederal;
