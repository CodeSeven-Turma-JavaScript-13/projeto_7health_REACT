import { useEffect, useState } from "react";
import type Produtos from "../../../models/Produtos";
import { buscar } from "../../../services/Services";
import CardProduto from "../cardproduto/CardProduto";
import { Loader2 } from "lucide-react";

function ListarProduto() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  const [loading, setLoading] = useState(true);

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos);
    } catch (error) {
      console.log("Erro ao buscar produtos", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="animate-spin text-brand-medium" size={48} />
          <p className="text-[#4a5c4a] font-medium">Carregando cardápio botânico...</p>
        </div>
      ) : (
        <>
          {produtos.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-[#4a5c4a]">Nenhum produto encontrado.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtos.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ListarProduto;
