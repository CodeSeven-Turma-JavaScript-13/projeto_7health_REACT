import React from 'react';
import { RocketLaunch, Leaf, RocketLaunchIcon, LeafIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Slide1() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Fundo verde escuro conforme Slide03 */}
      <section className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-[#1a3c1a] py-24 pb-32">
        
        {/* Elemento Decorativo: Folha gigante no fundo (Igual Slide03) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 z-0 pointer-events-none">
          <LeafIcon size={500} weight="fill" className="rotate-45 translate-x-1/3 -translate-y-1/4 text-white" />
        </div>

        {/* Círculos de fundo mantidos para profundidade */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/40 rounded-full" />
        </div>

        {/* CONTAINER PRINCIPAL: 
            Subimos o conteúdo com '-translate-y-20' para garantir que os botões 
            fiquem longe dos indicadores inferiores.
        */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          
          {/* Badge Superior mais compacto */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[#b5f49d] text-xs font-bold uppercase tracking-widest">
            <RocketLaunchIcon weight="fill" size={14} />
            <span>Aplicativo de Delivery Fitness</span>
          </div>
          
          <div className="relative">
            {/* Título com fonte Black e cor clara do Slide03 */}
            <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-2 leading-none">
              7Health
            </h1>
            
            <h2 className="text-[#b5f49d] text-3xl md:text-5xl font-black tracking-[0.2em] mb-6 uppercase">
              Seven Health
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 font-medium max-w-xl mx-auto leading-relaxed mb-10">
              Seu aliado em uma alimentação saudável e fitness.
            </p>
          </div>

          {/* Container de Botões: Lado a lado e com cores do Slide03 */}
          <div className="flex flex-row items-center justify-center gap-4">
            <Link 
              to="/cardapio" 
              className="bg-[#b5f49d] text-[#1a3c1a] px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-white hover:scale-105 transition-all shadow-xl shadow-black/20"
            >
              Ver Cardápio
            </Link>
            
            <Link to="/sobre">
              <button className="bg-transparent border-2 border-white/40 text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-white/10 transition-all">
                Saiba Mais
              </button>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Slide1;