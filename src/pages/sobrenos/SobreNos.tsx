import React from 'react';
import { Leaf, Code, Smartphone, Users } from 'lucide-react';

function SobreNos() {
  const teamImages = [
    { url: "https://ik.imagekit.io/adb7vrzkj/projeto2/1772737559675.jpg", name: "Larissa" },
    { url: "https://ik.imagekit.io/adb7vrzkj/projeto2/1718479755722.jpg", name: "Júlia" },
    { url: "https://ik.imagekit.io/adb7vrzkj/projeto2/1775153291702.jpg", name: "Lucas" },
    { url: "https://ik.imagekit.io/adb7vrzkj/projeto2/1774478509648.jpg", name: "Ana" },
    { url: "https://ik.imagekit.io/adb7vrzkj/projeto2/1775165408561.jpg", name: "Daniella" },
    { url: "https://ik.imagekit.io/adb7vrzkj/projeto2/1769166493242.jpg", name: "João" },
    { url: "https://ik.imagekit.io/adb7vrzkj/projeto2/Matheus_Canellas_6.JPG", name: "Matheus" }
  ];

  return (
    <div className="bg-[#f9fbf7] font-sans text-[#1a3c1a]">
      {/* SEÇÃO 1: ESSÊNCIA */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <span className="bg-[#b5f49d] text-[#1a3c1a] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Nossa Essência
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-8 leading-tight">
            Cultivando o Futuro do Bem-estar.
          </h1>
          <p className="text-[#4a5c4a] text-lg leading-relaxed max-w-xl">
            Na 7Health, misturamos tecnologia de ponta para criar uma relação simbiótica entre seu corpo e seu companheiro de saúde digital.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src="https://ik.imagekit.io/adb7vrzkj/projeto2/Gemini_Generated_Image_83se2s83se2s83se.png" 
            alt="Natureza botânica" 
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </section>

     {/* SEÇÃO 2: ARQUITETOS DA SAÚDE */}
<section className="bg-white py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 text-[#1a3c1a]">Os Arquitetos da Saúde</h2>
    <p className="text-[#4a5c4a] mb-12 max-w-2xl">
      Um núcleo criativo focado em transformar linhas de código em experiências de saúde humanizadas e eficientes.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card Grande: Tecnologia */}
      <div className="md:col-span-2 bg-[#f1f3ee] rounded-3xl overflow-hidden flex flex-col shadow-sm">
        <div className="p-10">
          <div className="mb-8">
            <Users className="mb-4 text-[#2d5a27]" size={32} />
            <h3 className="text-3xl font-bold mb-3 text-[#1a3c1a]">7 Mentes</h3>
            <p className="text-[#4a5c4a] text-lg">
              Nosso time une expertise em infraestrutura visual, saúde móvel e ciência de dados para sua performance.
            </p>
          </div>
          
          {/* Grid de Avatares com efeito "Pop-out" (Saindo da div) */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
            {teamImages.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 z-10 group-hover:z-50">
                  <img 
                    src={member.url}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl border-2 border-white shadow-md transition-all duration-500 ease-in-out group-hover:scale-150 group-hover:shadow-2xl group-hover:border-[#b5f49d]"
                  />
                </div>
                
                
                <span className="text-[10px] font-bold uppercase tracking-tighter text-[#1a3c1a] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Espaçamento extra abaixo das imagens para o zoom não cortar no final do card */}
        <div className="h-8"></div>

        <div className="relative h-48 md:h-64 overflow-hidden border-t border-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
            alt="Coding for Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c1a]/40 to-transparent flex items-center p-10">
            <span className="text-white text-sm font-medium italic max-w-xs">
              "Codando para o bem-estar, desenhado para humanos."
            </span>
          </div>
        </div>
      </div>

      {/* Coluna Lateral: Metodologia */}
      <div className="flex flex-col gap-8">
        <div className="bg-[#f1f3ee] p-8 rounded-3xl flex-1 border border-transparent hover:border-[#b5f49d] transition-all shadow-sm group">
          <span className="text-4xl font-bold text-[#b5f49d] group-hover:text-[#2d5a27] transition-colors">01</span>
          <h4 className="text-xl font-bold mt-2 text-[#1a3c1a]">Saúde Ágil</h4>
          <p className="text-sm text-[#4a5c4a] mt-2">Ciclos de desenvolvimento iterativos garantindo a mais alta qualidade em entrega de software.</p>
        </div>
        <div className="bg-[#f1f3ee] p-8 rounded-3xl flex-1 border border-transparent hover:border-[#b5f49d] transition-all shadow-sm group">
          <span className="text-4xl font-bold text-[#b5f49d] group-hover:text-[#2d5a27] transition-colors">02</span>
          <h4 className="text-xl font-bold mt-2 text-[#1a3c1a]">Arquitetura Limpa</h4>
          <p className="text-sm text-[#4a5c4a] mt-2">Construindo sistemas resilientes que protegem os dados dos pacientes e garantem atualizações fluidas.</p>
        </div>
        <a 
          href="https://github.com/CodeSeven-Turma-JavaScript-13" 
          target="_blank"
          rel="noreferrer"
          className="bg-[#1a3c1a] hover:bg-[#2d5a27] text-white p-8 rounded-3xl flex items-center justify-between group transition-all shadow-lg active:scale-95"
        >
          <span className="text-xl font-bold">Time no GitHub</span>
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* SEÇÃO 3: ECOSSISTEMA E 7FIT */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 relative">
          <div className="w-64 h-[500px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl mx-auto relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=400" 
              alt="App Screenshot" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-white text-center">
                  <Smartphone size={40} className="mx-auto mb-2" />
                  <p className="text-xs font-bold">7Health App</p>
               </div>
            </div>
          </div>
          <div className="absolute top-1/2 -right-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
            <div className="bg-[#b5f49d] p-2 rounded-lg text-[#1a3c1a]">
              <Leaf size={20} />
            </div>
            <span className="text-xs font-bold uppercase">Nutrição Ativa</span>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8 text-[#1a3c1a]">Um Ecossistema Conectado para uma Saúde Melhor.</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-[#b5f49d] p-3 rounded-xl h-fit">
                <Code className="text-[#1a3c1a]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#1a3c1a]">Integração Total</h4>
                <p className="text-[#4a5c4a]">Nossos sistemas são integrados nativamente, permitindo que seus dados de saúde fluam com segurança e gerem insights valiosos.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#b5f49d] p-3 rounded-xl h-fit">
                <Smartphone className="text-[#1a3c1a]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#2d5a27]">Conheça o 7FIT</h4>
                <p className="text-[#4a5c4a] mb-4">Sincronize sua rotina de treinos e regimes botânicos com nossa plataforma social de atividades físicas.</p>
                <a 
                  href="https://7fit-react.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#1a3c1a] font-bold underline hover:text-[#2d5a27] transition-colors"
                >
                  Visite o 7Fit →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#2d5a27] to-[#1a3c1a] rounded-[3rem] p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Pronto para começar sua jornada botânica?</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Junte-se à 7Health hoje e transforme sua rotina diária de bem-estar em um estilo de vida consciente.
          </p>
          
        </div>
      </section>
    </div>
  );
}

export default SobreNos;