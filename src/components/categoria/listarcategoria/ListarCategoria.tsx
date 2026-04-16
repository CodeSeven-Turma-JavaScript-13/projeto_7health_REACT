import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import CardCategoria from "../cardcategoria/CardCategoria";
import { Loader2 } from "lucide-react";

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
    <div className="w-full">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="animate-spin text-brand-medium" size={48} />
          <p className="text-[#4a5c4a] font-medium">Carregando ecossistema de categorias...</p>
        </div>
      ) : (
        <>
          {categorias.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-[#4a5c4a]">Nenhuma categoria encontrada.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ListarCategoria;
