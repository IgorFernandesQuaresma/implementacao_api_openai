import React, { createContext, useContext, useState, ReactNode } from 'react';

// Porque eu estou usando TypeScript precisa definir o tipo de contexto
interface OpenContextType {
  open: boolean;
  toggleOpen: () => void;
}



interface OpenProviderProps {
  children: ReactNode
}

// Criamos o contexto que receberá a classe que criamos acima
export const OpenContext = createContext<OpenContextType | undefined>(undefined);


// Este é o provider que os componentes receberá // todos os filhos que usar esse contexto receberá esse provider (provedor)
export function OpenProvider({ children }: OpenProviderProps) {

  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open);

  return (
    <OpenContext.Provider value={{ open, toggleOpen }}>
      {children}
    </OpenContext.Provider>
  );


}

