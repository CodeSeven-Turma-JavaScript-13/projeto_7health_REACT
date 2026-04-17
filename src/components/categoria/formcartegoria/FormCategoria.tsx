import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Services";
import { Loader2 } from "lucide-react";
import { ToastAlerta } from "../../../util/ToastAlerta";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
    produto: null,
  });

  async function buscarPorId(id: string) {
    try {
        await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
        console.log("Erro ao buscar categoria", "error");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        console.log("Erro ao atualizar a Categoria", error);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        console.log("Erro ao cadastrar a Categoria", error);
      }
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#f9fbf7] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center my-8 text-brand-dark">
        {id !== undefined ? "Editar Categoria" : "Nova Categoria"}
      </h1>

      <form
        onSubmit={gerarNovaCategoria}
        className="flex flex-col w-full md:w-2/3 gap-6 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">Nome da Categoria</label>
          <input
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Ex: Saladas Orgânicas"
            name="nome"
            required
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-brand-dark focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all placeholder:text-slate-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-slate-600 font-bold uppercase text-xs tracking-widest pl-1">Descrição</label>
          <textarea
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
            placeholder="Descreva a essência desta categoria..."
            name="descricao"
            required
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-brand-dark focus:ring-2 focus:ring-[#b5f49d] outline-none transition-all min-h-[120px] placeholder:text-slate-300"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 flex justify-center items-center bg-brand-dark hover:bg-brand-medium text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-dark/10 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <span className="flex items-center gap-2">
                {id !== undefined ? "Salvar Alterações" : "Criar Categoria"}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
