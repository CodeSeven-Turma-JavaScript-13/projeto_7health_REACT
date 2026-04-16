import type Categoria from "./Categoria";
import type Usuarios from "./Usuarios";

export default interface Produtos {
    id:number;
    nome:string;
    descricao:string;
    preco:number;
    caloria:number;
    imagem:string;
    usuario:Usuarios | null;
    categoria:Categoria | null;
}