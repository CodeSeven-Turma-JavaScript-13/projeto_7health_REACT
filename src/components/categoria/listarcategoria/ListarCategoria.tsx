import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import CardCategoria from "../cardcategoria/CardCategoria";
import { Loader2, PlusCircle } from "lucide-react";
import ModalCategoria from "../modalcategoria/ModalCategoria";

function ListarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error) {
      console.log("Erro ao buscar categorias", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fbf7] p-8 md:p-12 font-sans text-brand-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">
              <PlusCircle size={16} />
              <span>Gestão de Ecossistema</span>
            </div>
            <h1 className="text-5xl font-extrabold text-brand-dark tracking-tight">
              Categorias <br /> 
              <span className="text-brand-medium">de Bem-Estar.</span>
            </h1>
            <p className="text-[#4a5c4a] max-w-md text-lg leading-relaxed pt-2">
              Organize seus produtos botânicos e receitas por nichos de saúde e sabor.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
               <ModalCategoria />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-6 bg-white/50 rounded-[3rem] border border-brand-dark/5 backdrop-blur-sm">
              <div className="relative">
                <Loader2 className="animate-spin text-brand-medium" size={64} />
                <div className="absolute inset-0 blur-xl bg-brand-light/20 rounded-full animate-pulse"></div>
              </div>
              <p className="text-[#4a5c4a] font-bold text-xl tracking-wide animate-pulse">Sincronizando categorias...</p>
            </div>
          ) : (
            <>
              {categorias.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-brand-dark/5 flex flex-col items-center gap-6">
                  <div className="p-6 bg-slate-50 rounded-full text-slate-300">
                    <PlusCircle size={64} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-brand-dark">Nenhuma categoria encontrada.</p>
                    <p className="text-[#4a5c4a]">Comece criando sua primeira categoria de saúde acima.</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListarCategoria;

