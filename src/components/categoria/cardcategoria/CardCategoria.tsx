import { Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';


interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="group bg-white border border-gray-100 rounded-4xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full shadow-sm p-8">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
            <span className="text-[10px] font-bold text-brand-medium uppercase tracking-widest mb-1">Categoria</span>
            <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-medium transition-colors">
                {categoria.nome}
            </h3>
        </div>
        <div className="flex gap-2">
          <Link 
            to={`/editarCategoria/${categoria.id}`}
            className="p-3 bg-slate-50 text-brand-dark hover:bg-brand-medium hover:text-white rounded-2xl transition-all shadow-sm"
          >
            <Edit size={20} />
          </Link>
          <Link 
            to={`/deletarCategoria/${categoria.id}`}
            className="p-3 bg-slate-50 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl transition-all shadow-sm"
          >
            <Trash2 size={20} />
          </Link>
        </div>
      </div>

      <div className="grow">
        <p className="text-[#4a5c4a] leading-relaxed italic">
          "{categoria.descricao}"
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">7-HEALTH SYSTEM</span>
        <div className="h-2 w-2 rounded-full bg-brand-light animate-pulse"></div>
      </div>
    </div>
  );
}

export default CardCategoria;
