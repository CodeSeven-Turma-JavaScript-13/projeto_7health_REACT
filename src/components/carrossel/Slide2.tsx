
import { ChartLineUpIcon } from '@phosphor-icons/react'
import { Clock, Medal } from 'lucide-react'


function Slide2() {
  return (
     <>
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
                <Clock size={32} height="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Entrega Ultra Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Refeições frescas entregues em até 30 minutos na sua casa ou no seu trabalho.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-dark/5 hover:bg-brand-dark/10 transition-colors group">
              <div className="w-14 h-14 bg-brand-medium text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Medal size={32} height="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualidade Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Ingredientes selecionados de produtores locais para garantir o máximo de nutrientes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-dark/5 hover:bg-brand-dark/10 transition-colors group">
              <div className="w-14 h-14 bg-brand-medium text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartLineUpIcon size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Foco em Resultados</h3>
              <p className="text-gray-600 leading-relaxed">
                Cardápios montados por nutricionistas para ajudar você a alcançar seus objetivos fitness.
              </p>
            </div>
          </div>
        </div>
      </section>
     
     </>
  )
}

export default Slide2