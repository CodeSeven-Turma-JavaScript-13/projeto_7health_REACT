import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contatos from "./pages/contatos/Contatos";
import SobreNos from "./pages/sobrenos/SobreNos";
import Cardapio from "./pages/cardapio/Cardapio";
import FormProduto from "./components/produto/formproduto/FormProduto";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria";
import FormCategoria from "./components/categoria/formcartegoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import NavBar from "./components/navbar/NavBar";
import { CartProvider } from "./components/carrinho/contexts/CartContext";
import Cart from "./components/carrinho/cart/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    
    <CartProvider>
      <ToastContainer/>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-brand-dark overflow-x-hidden">
       <NavBar />
        {/* O pt-28 garante que o conteúdo não fique escondido sob uma NavBar fixa */}
        <main className="grow pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contatos />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/cardapio" element={<Cardapio />} />
            
            {/* Produtos */}
            <Route path="/cadastrarProduto" element={<FormProduto />} />
            <Route path="/editarProduto/:id" element={<FormProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

            {/* Carrinho */}
            <Route path="/cart" element={<Cart />} />
            
            {/* Categorias */}
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            
            {/* Rota Fallback (Opcional: para páginas não encontradas) */}
            <Route path="*" element={<h1>Página Não Encontrada</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;