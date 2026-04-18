import { FacebookLogoIcon, InstagramLogoIcon, LeafIcon, TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark/50 backdrop-blur-lg border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center">
                <span className="font-bold text-brand-dark leading-none">7</span>
                <LeafIcon className="text-brand-dark w-3 h-3 -ml-0.5 mt-0.5" weight="fill" />
              </div>
              <span className="text-xl font-bold tracking-tight">7Health</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Sua jornada para uma vida mais saudável começa aqui. Comida de verdade, saborosa e nutritiva, entregue na sua porta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-light hover:text-brand-dark rounded-lg transition-all duration-300">
                <InstagramLogoIcon size={20} weight="fill" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-light hover:text-brand-dark rounded-lg transition-all duration-300">
                <FacebookLogoIcon size={20} weight="fill" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-light hover:text-brand-dark rounded-lg transition-all duration-300">
                <TwitterLogoIcon size={20} weight="fill" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-light hover:text-brand-dark rounded-lg transition-all duration-300">
                <YoutubeLogoIcon size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/cardapio" className="hover:text-brand-light transition-colors">Cardápio</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-light transition-colors">Sobre Nós</Link></li>
              <li><Link to="/planos" className="hover:text-brand-light transition-colors">Planos de Assinatura</Link></li>
              <li><Link to="/blog" className="hover:text-brand-light transition-colors">Blog da Saúde</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-brand-light transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Política de Privacidade</a></li>
              <li><Link to="/contato" className="hover:text-brand-light transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm">Receba dicas de saúde e ofertas exclusivas.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-brand-light transition-colors"
              />
              <button className="bg-brand-light text-brand-dark font-bold py-2 rounded-xl hover:bg-white transition-all">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {currentYear} 7Health - Todos os direitos reservados.</p>
          <p>Generation Brasil • Grupo 05 • Projeto Integrador</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
