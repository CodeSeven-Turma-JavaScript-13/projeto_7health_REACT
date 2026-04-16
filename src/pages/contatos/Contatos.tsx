import React, { useState } from 'react';
import { Mail, Phone, Leaf } from 'lucide-react';
import { GithubLogoIcon, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";

function Contatos() {
  // Estado para controle do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  // Atualiza os dados conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Lógica de envio
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulação de envio (integre aqui sua API ou serviço de e-mail)
    console.log("Dados capturados:", formData);
    
    alert(`Mensagem enviada com sucesso! Logo entraremos em contato, ${formData.nome}.`);
    
    // Reseta o formulário
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <section className="bg-[#f9fbf7] pb-16 pt-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LADO ESQUERDO: FORMULÁRIO */}
          <div>
            <h2 className="text-5xl font-bold text-[#1a3c1a] mb-6 tracking-tight">Fale Conosco</h2>
            <p className="text-[#4a5c4a] text-lg mb-10 leading-relaxed">
              Tem dúvidas sobre nossas refeições ou planos? Nossos guias de bem-estar estão prontos para ajudar você a encontrar o seu equilíbrio perfeito.
            </p>

            <form 
              onSubmit={handleSubmit} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-[#1a3c1a] uppercase mb-2 ml-1">Nome</label>
                  <input 
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu Nome" 
                    className="w-full bg-[#eceee9] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2d5a27] transition-all outline-none text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1a3c1a] uppercase mb-2 ml-1">E-mail</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com" 
                    className="w-full bg-[#eceee9] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2d5a27] transition-all outline-none text-gray-700"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-[#1a3c1a] uppercase mb-2 ml-1">Assunto</label>
                <input 
                  type="text"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  placeholder="Como podemos ajudar?" 
                  className="w-full bg-[#eceee9] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2d5a27] transition-all outline-none text-gray-700"
                />
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-[#1a3c1a] uppercase mb-2 ml-1">Mensagem</label>
                <textarea 
                  rows={5}
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  placeholder="Compartilhe sua jornada conosco..." 
                  className="w-full bg-[#eceee9] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2d5a27] transition-all outline-none text-gray-700 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#1a3c1a] hover:bg-[#2d5a27] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg active:scale-95"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* LADO DIREITO: INFOS E IMAGENS */}
          <div className="flex flex-col gap-8">
            {/* Foto de Destaque */}
            <div className="relative h-48 rounded-3xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1000&auto=format&fit=crop" 
                alt="Ambiente Saudável" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#b5f49d] p-3 rounded-xl shadow-sm">
                <Leaf className="text-[#1a3c1a] size-6" />
              </div>
            </div>

            {/* Suporte VIP */}
            <div className="bg-[#f1f3ee] p-8 rounded-3xl relative overflow-hidden border border-[#e2e6de]">
              <div className="absolute top-6 right-6 opacity-10">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a3c1a] mb-2">Suporte VIP</h3>
              <p className="text-[#4a5c4a] mb-6 text-sm">Assistência prioritária para nossos membros e assinantes 7Health.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-[#1a3c1a]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">E-mail</p>
                    <p className="text-[#1a3c1a] font-bold text-sm">codeseven777@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-[#1a3c1a]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Telefone</p>
                    <p className="text-[#1a3c1a] font-bold text-sm">+55 (21) 9999-7777</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <p className="text-xs font-black text-[#1a3c1a] uppercase tracking-widest mb-4">Conecte-se</p>
              <div className="flex gap-4">
                <a href="https://github.com/CodeSeven-Turma-JavaScript-13" className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-[#f1f3ee] transition-colors text-sm font-bold text-[#1a3c1a]">
                  <GithubLogoIcon size={18} weight="fill" /> Github
                </a>
                
              </div>
            </div>

            {/* Localização */}
            <div className="relative h-44 rounded-3xl overflow-hidden group cursor-pointer shadow-md">
              <img 
                src="https://ik.imagekit.io/adb7vrzkj/projeto2/nit.jpg" 
                alt="Niterói" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c1a]/80 to-transparent flex flex-col justify-end p-6">
                <p className="text-xs text-gray-300 font-medium">Onde estamos</p>
                <p className="text-white font-bold text-lg">Niterói, Rio de Janeiro</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contatos;