import React from 'react';
import { Search, Leaf, Heart, Zap, Link } from 'lucide-react';
import ModalProduto from '../../components/produto/modalproduto/ModalProduto';
import ListarProduto from '../../components/produto/listarproduto/ListarProduto';



function Cardapio() {
  return (
    <div className="min-h-screen bg-[#f9fbf7] p-8 font-sans text-[#1a3c1a]">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO E BUSCA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h1 className="text-5xl font-bold leading-tight">
            Nutra seu corpo <br /> de dentro para fora.
          </h1>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar pratos saudáveis..." 
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#b5f49d] outline-none"
            />
          </div>
        </div>

        {/* SEÇÃO DE DESTAQUE (HERO) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200" 
              alt="Botanical Buddha Bowl" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
              <span className="bg-[#b5f49d] text-[#1a3c1a] text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                Recomendação Botânica
              </span>
              <h2 className="text-4xl font-bold mb-2">Botanical Buddha Bowl</h2>
              <p className="text-gray-200">Quinoa orgânica, beterrabas assadas e molho de deusa verde caseiro.</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col justify-between border border-gray-100">
            <div>
              <h3 className="text-2xl font-bold mb-6">Por que recomendamos?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="text-[#2d5a27]"><Leaf size={24} /></div>
                  <div>
                    <p className="font-bold">100% Ingredientes Orgânicos</p>
                    <p className="text-sm text-gray-500">Direto de produtores locais nesta manhã.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[#2d5a27]"><Heart size={24} /></div>
                  <div>
                    <p className="font-bold">Rico em Nutrientes</p>
                    <p className="text-sm text-gray-500">Alto teor de antioxidantes e vitaminas essenciais.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-[#2d5a27]"><Zap size={24} /></div>
                  <div>
                    <p className="font-bold">Alto Índice de Energia</p>
                    <p className="text-sm text-gray-500">Carboidratos complexos para foco sustentado.</p>
                  </div>
                </li>
              </ul>
            </div>
            <a href="/contato" >
            <button className="w-full bg-[#1a3c1a] text-white py-4 rounded-2xl font-bold hover:bg-[#2d5a27] transition-all mt-8">
                Adicionar ao Plano            
            </button>
           </a>
          </div>
        </div>

        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark">Gerenciar Menu</h2>
            <p className="text-[#4a5c4a]">Gestão das ofertas da sua cozinha Fitness.</p>
          </div>
          <ModalProduto />
        </div>

        {/* LISTAGEM DE PRODUTOS */}
        <ListarProduto />
      </div>
    </div>
  );
}

export default Cardapio;