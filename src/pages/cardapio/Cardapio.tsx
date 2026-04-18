import { useContext, useEffect, useState } from "react";
import { Search, Leaf, Heart, Zap } from "lucide-react";
import ModalProduto from "../../components/produto/modalproduto/ModalProduto";
import ListarProduto from "../../components/produto/listarproduto/ListarProduto";
import type Produtos from "../../models/Produtos";
import { buscar } from "../../services/Services";
import { CartContext } from "../../components/carrinho/contexts/CartContext";

function Cardapio() {
  const [refresh, setRefresh] = useState(0);
  const { adicionarProduto } = useContext(CartContext);
  const [destaque, setDestaque] = useState<Produtos | null>(null);
  const [loading, setLoading] = useState(true);

  async function carregarDestaqueAleatorio() {
    setLoading(true);
    try {
      // Criamos uma variável temporária para receber os dados da busca
      const listaProdutos: Produtos[] = [];
      await buscar("/produtos", (dados: Produtos[]) => {
        if (dados.length > 0) {
          // Lógica de sorteio: escolhe um índice aleatório entre 0 e o tamanho da lista
          const indiceAleatorio = Math.floor(Math.random() * dados.length);
          setDestaque(dados[indiceAleatorio]);
        }
      });
    } catch (error) {
      console.error("Erro ao carregar recomendação:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDestaqueAleatorio();
  }, []); // Executa apenas uma vez ao montar o componente (ao atualizar a página)

  return (
    <div className="min-h-screen bg-[#f9fbf7] p-8 font-sans text-[#1a3c1a]">
      <div className="max-w-7xl mx-auto">
        {/* CABEÇALHO E BUSCA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h1 className="text-5xl font-bold leading-tight">
            Nutra seu corpo <br /> de dentro para fora.
          </h1>
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar pratos saudáveis..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#b5f49d] outline-none"
            />
          </div>
        </div>

        {/* SEÇÃO DE DESTAQUE DINÂMICA (SORTEADA) */}
        {!loading && destaque ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 animate-in fade-in duration-700">
            {/* BANNER DE DESTAQUE */}
            <div className="lg:col-span-2 relative rounded-4xl overflow-hidden shadow-2xl h-112.5 group">
              <img
                src={
                  destaque.imagem ||
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200"
                }
                alt={destaque.nome}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 p-10 bg-linear-to-t from-black/80 to-transparent w-full text-white">
                <span className="bg-[#b5f49d] text-[#1a3c1a] text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block shadow-lg">
                  Sugestão do Momento
                </span>
                <h2 className="text-4xl font-bold mb-2">{destaque.nome}</h2>
                <p className="text-gray-200 line-clamp-2 max-w-2xl">
                  {destaque.descricao}
                </p>
              </div>
            </div>

            {/* BOX LATERAL */}
            <div className="bg-white p-10 rounded-4xl shadow-sm flex flex-col justify-between border border-gray-100 transform transition-all">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-dark">
                  Por que hoje?
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="p-2 bg-brand-light/20 rounded-lg text-brand-medium">
                      <Leaf size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Fresco e Natural</p>
                      <p className="text-sm text-gray-500">
                        Ingredientes de origem controlada.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="p-2 bg-brand-light/20 rounded-lg text-brand-medium">
                      <Zap size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Poder Energético</p>
                      <p className="text-sm text-gray-500">
                        {destaque.caloria} kcal balanceadas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="p-2 bg-brand-light/20 rounded-lg text-brand-medium">
                      <Heart size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Sabor Único</p>
                      <p className="text-sm text-gray-500">
                        Aprovado por nutricionistas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => adicionarProduto(destaque)}
                className="w-full bg-brand-dark text-white py-4 rounded-2xl font-bold hover:bg-brand-medium transition-all mt-8 shadow-xl shadow-brand-dark/20 hover:-translate-y-1 active:scale-95"
              >
                Adicionar ao Carrinho -{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(destaque.preco)}
              </button>
            </div>
          </div>
        ) : (
          // Placeholder enquanto carrega ou se não houver produtos
          <div className="h-112.5 mb-20 bg-gray-100 rounded-4xl animate-pulse flex items-center justify-center">
            <p className="text-gray-400 font-medium">
              Sorteando sua próxima refeição...
            </p>
          </div>
        )}

        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark">
              Gerenciar Menu
            </h2>
            <p className="text-[#4a5c4a]">
              Gestão das ofertas da sua cozinha Fitness.
            </p>
          </div>
          <ModalProduto onSuccess={() => setRefresh((r) => r + 1)} />
        </div>

        {/* LISTAGEM DE PRODUTOS */}
        <ListarProduto refresh={refresh} />
      </div>
    </div>
  );
}

export default Cardapio;
