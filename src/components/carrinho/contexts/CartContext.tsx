import { createContext, type ReactNode, useState } from "react";
import type Produtos from "../../../models/Produtos";


// Criamos uma interface que estende o Produto para incluir a quantidade
export interface CartItem extends Produtos {
  quantidade: number;
}

interface CartContextProps {
  carrinho: CartItem[];
  adicionarProduto: (produto: Produtos) => void;
  removerProduto: (id: number) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  limparCarrinho: () => void;
  valorTotal: number;
  quantidadeItens: number;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);

  function adicionarProduto(produto: Produtos) {
    setCarrinho(state => {
      const itemExiste = state.find(item => item.id === produto.id);
      if (itemExiste) {
        return state.map(item => 
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...state, { ...produto, quantidade: 1 }];
    });
  }

  function aumentarQuantidade(id: number) {
    setCarrinho(state => state.map(item => 
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    ));
  }

  function diminuirQuantidade(id: number) {
    setCarrinho(state => state.map(item => {
      if (item.id === id && item.quantidade > 1) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    }));
  }

  function removerProduto(id: number) {
    setCarrinho(state => state.filter(item => item.id !== id));
  }

  function limparCarrinho() { setCarrinho([]); }

  const valorTotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  const quantidadeItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <CartContext.Provider value={{ 
      carrinho, adicionarProduto, removerProduto, aumentarQuantidade, 
      diminuirQuantidade, limparCarrinho, valorTotal, quantidadeItens 
    }}>
      {children}
    </CartContext.Provider>
  );
}