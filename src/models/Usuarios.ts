import type Produtos from "./Produtos";

export default interface Usuarios {
    id:number;
    nome:string;
    usuario:string;
    senha:string;
    foto:string;
    dataNascimento:string;
    dataCriacao:string;
    produto: Produtos | null;
}