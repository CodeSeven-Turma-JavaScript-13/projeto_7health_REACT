import { useContext } from "react";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const { carrinho, removerProduto, aumentarQuantidade, diminuirQuantidade, valorTotal, quantidadeItens, limparCarrinho } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-[60vh]">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-brand-dark">Seu Carrinho</h2>
          <span className="bg-brand-light/30 text-brand-dark px-4 py-1 rounded-full text-sm font-bold">
            {quantidadeItens} {quantidadeItens === 1 ? 'item' : 'itens'}
          </span>
        </div>

        <div className="p-8">
          {quantidadeItens === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={64} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-500 text-lg mb-6">Seu carrinho está vazio.</p>
              <Link to="/cardapio" className="bg-brand-medium text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all">
                Ver Cardápio
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {carrinho.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 gap-4">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <img src={item.imagem} alt={item.nome} className="w-20 h-20 object-cover rounded-xl shadow-sm" />
                      <div>
                        <h4 className="font-bold text-brand-dark text-lg">{item.nome}</h4>
                        <p className="text-brand-medium font-bold text-sm">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                      {/* CONTROLE DE QUANTIDADE */}
                      <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                        <button 
                          onClick={() => diminuirQuantidade(item.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg text-brand-dark transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-bold text-brand-dark min-w-10 text-center">
                          {item.quantidade}
                        </span>
                        <button 
                          onClick={() => aumentarQuantidade(item.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg text-brand-dark transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button 
                        onClick={() => removerProduto(item.id)} 
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={22} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ... (TOTAL E BOTÕES DE FINALIZAÇÃO IGUAL AO ANTERIOR) ... */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex justify-between items-center text-2xl font-extrabold text-brand-dark">
                  <span>Total</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)}</span>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button onClick={limparCarrinho} className="flex-1 px-6 py-4 border-2 border-gray-200 text-gray-500 font-bold rounded-2xl hover:bg-gray-50 transition-all">
                    Limpar Tudo
                  </button>
                  <button className="flex-2 px-6 py-4 bg-brand-dark text-white font-bold rounded-2xl hover:bg-brand-medium shadow-lg transition-all">
                    Finalizar Pedido
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}