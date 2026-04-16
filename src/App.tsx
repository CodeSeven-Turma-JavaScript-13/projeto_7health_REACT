import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
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

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-brand-dark overflow-x-hidden">
        <NavBar />
        <main className="grow pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contatos />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/editarProduto/:id" element={<FormProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

