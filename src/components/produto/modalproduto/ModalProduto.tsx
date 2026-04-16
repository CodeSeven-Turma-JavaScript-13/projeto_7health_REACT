import { useState } from 'react';
import FormProduto from '../formproduto/FormProduto';
import { Plus, X } from 'lucide-react';

interface ModalProdutoProps {
  onSuccess: () => void;
}

function ModalProduto({ onSuccess }: ModalProdutoProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSuccess() {
    setIsOpen(false);
    onSuccess();
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-brand-light text-brand-dark px-6 py-3 rounded-2xl font-bold hover:bg-brand-accent transition-all shadow-lg active:scale-95 group"
      >
        <div className="bg-brand-dark/10 p-1 rounded-lg group-hover:rotate-90 transition-transform duration-500">
          <Plus size={20} />
        </div>
        Novo Produto
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative w-full max-w-4xl 
                          max-h-[90vh] overflow-y-auto bg-white border
                        border-gray-100 rounded-[2.5rem] shadow-2xl 
                          animate-in zoom-in-95 duration-300 scrollbar-hide">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-brand-dark hover:bg-slate-100 rounded-xl transition-all z-10"
            >
              <X size={24} />
            </button>
            
            <div className="p-2">
              <FormProduto onSuccess={handleSuccess} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalProduto;