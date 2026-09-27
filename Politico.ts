export abstract class Politico {

    private projetos: string[];
    private nome: string;
    private remuneracao: number;
    private partido: string;

    private esfera: string;
    private poder: string;

    private localTrabalho: string;
    private enderecoTrabalho: string;


    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getPartido(): string {
        return this.partido;
    }

    getProjetos(): string[] {
        return this.projetos;
    }

    setProjetos(projetos: string[]): void {
        this.projetos = projetos;
    }

    setPartido(partido: string): void {
        this.partido = partido;
    }

    getEsfera(): string {
        return this.esfera;
    }

    setEsfera(esfera: string): void {
        this.esfera = esfera;
    }

    getPoder(): string {
        return this.poder;
    }

    setPoder(poder: string): void {
        this.poder = poder;
    }

    getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    setLocalTrabalho(localTrabalho: string): void {
        this.localTrabalho = localTrabalho;
    }

    getRemuneracao(): number {
        return this.remuneracao;
    }

    getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    setEnderecoTrabalho(enderecoTrabalho: string): void {
        this.enderecoTrabalho = enderecoTrabalho;
    }

    setRemuneracao(remuneracao: number): void {
        this.remuneracao = remuneracao;
    }

    abstract mandato(): string;
}