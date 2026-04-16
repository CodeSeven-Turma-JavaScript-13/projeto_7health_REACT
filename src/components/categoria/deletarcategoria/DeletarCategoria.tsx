import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Services";
import { Loader2, Trash2, X } from "lucide-react";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [loading, setLoading] = useState(false);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao buscar a categoria");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso");
      retornar();
    } catch (error) {
      alert("Erro ao apagar a Categoria");
    }
    setLoading(false);
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="min-h-screen bg-[#f9fbf7] flex items-center justify-center py-20 px-4">
      <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="bg-red-50 p-6 border-b border-red-100 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-red-600">Excluir Categoria</h2>
            <Trash2 className="text-red-500" size={24} />
        </div>

        <div className="p-8">
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Você tem certeza de que deseja apagar esta categoria? Todos os produtos vinculados a ela poderão ser afetados.
            </p>
            
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl mb-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Categoria selecionada</p>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">{categoria.nome}</h3>
                <p className="text-slate-500 text-sm leading-snug">{categoria.descricao}</p>
            </div>

            <div className="flex gap-4">
                <button
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
                    onClick={retornar}
                >
                    <X size={20} /> Cancelar
                </button>
                <button
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                    onClick={deletarCategoria}
                >
                    {loading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <>
                            <Trash2 size={20} /> Excluir
                        </>
                    )}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
