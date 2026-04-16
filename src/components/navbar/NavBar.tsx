import { Leaf, List, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center shadow-lg shadow-brand-light/30 group-hover:scale-110 transition-transform duration-300">
            <span className="font-bold text-brand-dark text-xl leading-none">7</span>
            <Leaf className="text-brand-dark w-4 h-4 -ml-1 mt-1" weight="fill" />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-brand-light bg-clip-text text-transparent">
            7Health
          </span>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-brand-light transition-colors duration-300">Início</Link>
          <Link to="/cardapio" className="hover:text-brand-light transition-colors duration-300">Cardápio</Link>
          <Link to="/sobre" className="hover:text-brand-light transition-colors duration-300">Sobre Nós</Link>
          <Link to="/contato" className="hover:text-brand-light transition-colors duration-300">Contato</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300">
            <ShoppingCart size={24} weight="light" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300">
            <User size={24} weight="light" />
          </button>
          <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors duration-300">
            <List size={24} />
          </button>
          <button className="hidden lg:block bg-brand-light text-brand-dark px-6 py-2 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-light/20">
            Pedir Agora
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;