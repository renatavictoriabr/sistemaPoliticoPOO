"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const Politico_1 = require("./Politico");
class Presidente extends Politico_1.Politico {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, quantidadeMinistros) {
        super(nome, partido, "Federal", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    getQuantidadeMinistros() {
        return this.quantidadeMinistros;
    }
    setQuantidadeMinistros(quantidadeMinistros) {
        this.quantidadeMinistros = quantidadeMinistros;
    }
    mandato() {
        return "O presidente propõe, sanciona e veta leis e edita medidas provisórias.";
    }
    nomearMinistro() {
        return "O presidente nomeia ministros.";
    }
    exonerarMinistro() {
        return "O presidente exonera ministros.";
    }
    comandarForcasArmadas() {
        return "O presidente comanda as Forças Armadas.";
    }
    representarPais() {
        return "O presidente representa o país internacionalmente.";
    }
    elaborarPPA() {
        return "O presidente elabora e envia o PPA nacional.";
    }
    elaborarLDO() {
        return "O presidente elabora e envia a LDO nacional.";
    }
    elaborarLOA() {
        return "O presidente elabora e envia a LOA nacional.";
    }
}
exports.Presidente = Presidente;
