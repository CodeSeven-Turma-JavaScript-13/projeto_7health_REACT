import { useState } from "react";
import { 
  X, 
  User, 
  Mail, 
  PencilLine, 
  MessageSquareText,
  Phone,
  AtSign
} from "lucide-react";

// Tipagem das props:
// isOpen = controla se o modal está aberto ou fechado
// onClose = função para fechar o modal
interface ContatoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContatoModal({ isOpen, onClose }: ContatoModalProps) {
  // Estado que guarda os dados digitados no formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  // Função que atualiza os inputs conforme a pessoa digita
  // Ela pega o "name" e o "value" do campo e atualiza o estado
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função executada ao enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode substituir futuramente por API, emailjs, backend etc.
    console.log("Dados enviados:", formData);

    alert(`Mensagem enviada com sucesso, ${formData.nome}!`);

    // Limpa os campos depois do envio
    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });

    // Fecha o modal após o envio
    onClose();
  };

  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

 return (
  <div className="fixed inset-0 z-50 overflow-y-auto">
    {/* overlay */}
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    ></div>

    {/* área de posicionamento */}
    <div className="min-h-full flex items-start justify-center px-4 py-4 sm:items-center sm:py-8">
      {/* modal */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-4xl bg-[#f9fbf7] shadow-2xl">
        
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8ede5] text-[#1a3c1a] transition hover:scale-105 cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Estrutura interna */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* LADO ESQUERDO */}
          <div className="bg-[#1a3c1a] px-8 py-10 text-white">
            <p className="mb-6 text-lg font-bold text-[#b5f49d]">7Health</p>

            <h2 className="mb-4 text-4xl font-bold leading-tight">
              Fale com a gente.
            </h2>

            <p className="mb-8 max-w-xs text-sm leading-relaxed text-[#d8e3d3]">
              Tem dúvidas, sugestões ou quer entrar em contato com nossa equipe?
              Estamos aqui para te ouvir.
            </p>

            <div className="mb-8 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
                alt="Comida saudável"
                className="h-56 w-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#b5f49d]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#b5f49d]">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm">(21) 99999-7777</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                 <AtSign size={18} className="text-[#b5f49d]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#b5f49d]">
                      Instagram
                    </p>
                    <p className="mt-1 text-sm">@7health</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#b5f49d]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#b5f49d]">
                      E-mail
                    </p>
                    <p className="mt-1 text-sm">codeseven777@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="bg-[#f9fbf7] px-8 py-10 md:px-10">
            <div className="mb-8">
              <span className="inline-block rounded-xl bg-[#eceee9] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4a5c4a]">
                Entre em contato
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#1a3c1a]">
                  Nome
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-[#6c816c]"
                  />
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full border-b border-[#cfd8cb] bg-transparent pl-6 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#1a3c1a]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#1a3c1a]">
                  E-mail
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-[#6c816c]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full border-b border-[#cfd8cb] bg-transparent pl-6 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#1a3c1a]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#1a3c1a]">
                  Assunto
                </label>
                <div className="relative">
                  <PencilLine
                    size={16}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-[#6c816c]"
                  />
                  <input
                    type="text"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    placeholder="Como podemos ajudar?"
                    className="w-full border-b border-[#cfd8cb] bg-transparent pl-6 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#1a3c1a]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#1a3c1a]">
                  Mensagem
                </label>
                <div className="relative">
                  <MessageSquareText
                    size={16}
                    className="absolute left-0 top-3 text-[#6c816c]"
                  />
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Escreva sua mensagem..."
                    className="w-full resize-none border-b border-[#cfd8cb] bg-transparent pl-6 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#1a3c1a]"
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#6b7b6b]">
                  Retornaremos o mais breve possível.
                </p>

                <button
                  type="submit"
                  className="rounded-full bg-[#1a3c1a] px-8 py-4 text-sm font-bold text-white transition hover:bg-brand-medium active:scale-95 cursor-pointer"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default ContatoModal;