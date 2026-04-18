import { LeafIcon } from '@phosphor-icons/react'


function Slide03() {
  return (
    <>
    {/* CTA Section */}
      <section className="py-24 pb-32 min-h-150 bg-brand-medium relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <LeafIcon size={400} weight="fill" className="rotate-45 translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Pronto para mudar sua <br/> <span className="text-brand-light">relação com a comida?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas com a 7Health.
          </p>
          
        </div>
      </section>
    </>
  )
}

export default Slide03