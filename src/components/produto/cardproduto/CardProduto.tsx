import { Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type Produtos from '../../../models/Produtos';


interface CardProdutoProps {
  produto: Produtos;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full shadow-sm">
      {/* Imagem do Produto */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={produto.imagem || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'} 
          alt={produto.nome} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link 
            to={`/editarProduto/${produto.id}`}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-xl text-brand-dark hover:bg-brand-medium hover:text-white transition-colors shadow-lg"
          >
            <Edit size={18} />
          </Link>
          <Link 
            to={`/deletarProduto/${produto.id}`}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-xl text-red-500 hover:bg-red-50 transition-colors shadow-lg"
          >
            <Trash2 size={18} />
          </Link>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-[#b5f49d] text-brand-dark text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
            {produto.categoria?.nome || 'Geral'}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#1a3c1a] group-hover:text-brand-medium transition-colors">
            {produto.nome}
          </h3>
          <span className="text-xl font-bold text-brand-medium">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
          </span>
        </div>
        
        <p className="text-[#4a5c4a] text-sm line-clamp-2 mb-4 flex-grow">
          {produto.descricao}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Energia</span>
            <span className="text-sm font-medium text-[#1a3c1a]">{produto.caloria} kcal</span>
          </div>
          <button className="px-4 py-2 bg-brand-dark text-white text-xs font-bold rounded-lg hover:bg-brand-medium transition-all duration-300">
            Adicionar ao Plano
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
