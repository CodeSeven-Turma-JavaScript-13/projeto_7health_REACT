import { ChartLineUp, Clock, Leaf, Medal, RocketLaunchIcon } from "@phosphor-icons/react";
import { LeafIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-112px)] flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Background Patterns (Replicating Image 1) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-medium/20 rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-200 h-200 border border-brand-light/10 rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-150 h-150 border border-brand-light/5 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-125 h-125 border border-brand-light/10 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-16">
          <div className="mb-8 inline-flex items-center gap-2 mt-10 px-4 py-2 glass rounded-full text-brand-light text-sm font-medium animate-bounce">
            <RocketLaunchIcon weight="fill" />
            <span>Aplicativo de Delivery Fitness</span>
          </div>
          
          <div className="relative mb-12">
            <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter mb-4 animate-fade-in">
              7Health
            </h1>
            <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-brand-light">
              <span className="tracking-[0.2em]">SEVEN HEALTH</span>
              <LeafIcon height="fill" className="text-brand-accent" />
            </div>
            
            <div className="w-48 h-1 bg-linear-to-r from-transparent via-brand-light/30 to-transparent mx-auto mt-8 mb-8" />
            
            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
              Seu aliado em uma alimentação saudável e fitness
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/cardapio" 
              className="bg-brand-light text-brand-dark px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-light/20"
            >
              Ver Cardápio
            </Link>
            <button className="glass px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-soft text-brand-dark px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Por que escolher a 7Health?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Combinamos nutrição de alta performance com sabores irresistíveis para transformar sua rotina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-brand-dark/5 hover:bg-brand-dark/10 transition-colors group">
              <div className="w-14 h-14 bg-brand-medium text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Entrega Ultra Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Refeições frescas entregues em até 30 minutos na sua casa ou no seu trabalho.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-dark/5 hover:bg-brand-dark/10 transition-colors group">
              <div className="w-14 h-14 bg-brand-medium text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Medal size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualidade Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Ingredientes selecionados de produtores locais para garantir o máximo de nutrientes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-dark/5 hover:bg-brand-dark/10 transition-colors group">
              <div className="w-14 h-14 bg-brand-medium text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartLineUp size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Foco em Resultados</h3>
              <p className="text-gray-600 leading-relaxed">
                Cardápios montados por nutricionistas para ajudar você a alcançar seus objetivos fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-medium relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Leaf size={400} weight="fill" className="rotate-45 translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Pronto para mudar sua <br/> <span className="text-brand-light">relação com a comida?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas com a 7Health.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-brand-dark px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">
              Começar Agora
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              Ver Planos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
