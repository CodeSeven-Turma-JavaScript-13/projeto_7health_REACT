import {  useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Produtos from "../../../models/Produtos";
import { atualizar, buscar, cadastrar } from "../../../services/Services";
import { Loader2 } from "lucide-react";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
    produto: null,
  });

  const [produto, setProduto] = useState<Produtos>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    caloria: 0,
    imagem: "",
    usuario: null,
    categoria: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/cardapio");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        alert("Produto atualizado com sucesso");
        retornar();
      } catch (error: any) {
        alert("Erro ao atualizar o Produto");
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);
        alert("Produto cadastrado com sucesso");
        retornar();
      } catch (error: any) {
        alert("Erro ao cadastrar o Produto");
      }
    }

    setLoading(false);
  }

  const carregandoCategoria = produto.categoria?.id === 0;

  return (
    <div className="container flex flex-col mx-auto items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center my-8 text-brand-dark">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form
        onSubmit={gerarNovoProduto}
        className="flex flex-col w-full md:w-2/3 gap-6 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Ex: Botanical Buddha Bowl"
            name="nome"
            required
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-brand-dark focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all placeholder:text-slate-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">Descrição Detalhada</label>
          <textarea
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
            placeholder="Descreva o produto, ingredientes e benefícios..."
            name="descricao"
            required
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-brand-dark focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all min-h-[120px] placeholder:text-slate-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="preco" className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">Preço (R$)</label>
            <input
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="number"
              step="0.01"
              placeholder="0.00"
              name="preco"
              required
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-brand-dark focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="caloria" className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">Calorias (kcal)</label>
            <input
              value={produto.caloria}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="number"
              placeholder="0"
              name="caloria"
              required
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-brand-dark focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all placeholder:text-slate-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="imagem" className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">URL da Imagem</label>
          <input
            value={produto.imagem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="https://exemplo.com/imagem.jpg"
            name="imagem"
            required
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-brand-dark focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all placeholder:text-slate-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">Categoria do Produto</label>
          <div className="relative">
            <select
                name="categoria"
                className="w-full p-4 pr-10 rounded-2xl bg-slate-50 text-brand-dark border border-slate-100 focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all font-medium appearance-none"
                onChange={(e) => buscar(`/categorias/${e.currentTarget.value}`, setCategoria)}
            >
                <option value="" disabled>
                Selecione uma categoria
                </option>
                {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id} selected={produto.categoria?.id === categoria.id}>
                    {categoria.nome}
                </option>
                ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                ↓
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={carregandoCategoria || loading}
          className="mt-4 flex justify-center items-center bg-brand-dark hover:bg-brand-medium text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-dark/10 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <span className="flex items-center gap-2">
                {id !== undefined ? "Salvar Alterações" : "Publicar no Menu"}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
