"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
class Politico {
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    getProjetos() {
        return this.projetos;
    }
    setProjetos(projetos) {
        this.projetos = projetos;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder) {
        this.poder = poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    setLocalTrabalho(localTrabalho) {
        this.localTrabalho = localTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    getEnderecoTrabalho() {
        return this.enderecoTrabalho;
    }
    setEnderecoTrabalho(enderecoTrabalho) {
        this.enderecoTrabalho = enderecoTrabalho;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
}
exports.Politico = Politico;
