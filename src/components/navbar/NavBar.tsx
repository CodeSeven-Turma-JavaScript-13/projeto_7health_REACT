import { Leaf, List, ShoppingCart, User } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  
  // Define quais rotas devem usar o tema claro
  const isLightPage = location.pathname === "/contato" || location.pathname === "/sobre" || location.pathname === "/categorias";
  
  // Classes condicionais baseadas no tema
  const navClasses = isLightPage 
    ? "glass-light border-[#cbd5e1]/30 text-brand-dark shadow-xl" 
    : "glass border-white/20 text-white shadow-2xl";
    
  const logoBoxClasses = isLightPage
    ? "bg-brand-dark text-white shadow-brand-dark/20"
    : "bg-brand-light text-brand-dark shadow-brand-light/30";

  const linkHoverClasses = isLightPage
    ? "hover:text-brand-medium"
    : "hover:text-brand-light";

  const actionButtonHoverClasses = isLightPage
    ? "hover:bg-brand-dark/5"
    : "hover:bg-white/10";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-500">
      <div className={`max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${navClasses}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${logoBoxClasses}`}>
            <span className="font-bold text-xl leading-none">7</span>
            <Leaf className="w-4 h-4 -ml-1 mt-1" weight="fill" />
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${isLightPage ? 'text-brand-dark' : 'text-white'}`}>
            7Health
          </span>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={`transition-colors duration-300 ${linkHoverClasses}`}>Início</Link>
          <Link to="/cardapio" className={`transition-colors duration-300 ${linkHoverClasses}`}>Cardápio</Link>
          <Link to="/categorias" className={`transition-colors duration-300 ${linkHoverClasses}`}>Categorias</Link>
          <Link to="/sobre" className={`transition-colors duration-300 ${linkHoverClasses}`}>Sobre Nós</Link>
          <Link to="/contato" className={`transition-colors duration-300 ${linkHoverClasses}`}>Contato</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className={`p-2 rounded-full transition-all duration-300 ${actionButtonHoverClasses}`}>
            <ShoppingCart size={24} weight="light" />
          </button>
          <button className={`p-2 rounded-full transition-all duration-300 ${actionButtonHoverClasses}`}>
            <User size={24} weight="light" />
          </button>
          <button className={`md:hidden p-2 rounded-full transition-all duration-300 ${actionButtonHoverClasses}`}>
            <List size={24} />
          </button>
          <button className={`hidden lg:block px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg ${
            isLightPage 
            ? 'bg-brand-dark text-white shadow-brand-dark/20 hover:bg-brand-medium' 
            : 'bg-brand-light text-brand-dark shadow-brand-light/20 hover:bg-white'
          }`}>
            Pedir Agora
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
