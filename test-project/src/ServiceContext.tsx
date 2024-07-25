import React, { ReactNode } from 'react';
import DummyService from './services/DummyService';

// Crear el Context
const ServiceContext = React.createContext<DummyService | undefined>(undefined);

// Crear el Provider
interface ServiceContextProviderProps {
  service: DummyService;
  children: ReactNode;
}

const ServiceContextProvider: React.FC<ServiceContextProviderProps> = ({
  service,
  children,
}) => {
  return (
    <ServiceContext.Provider value={service}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceContextProvider };
