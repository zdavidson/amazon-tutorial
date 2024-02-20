"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistedStore } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

import React from "react";

const Provider = ({ children }: any) => {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } })
  );
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistedStore}>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Provider;
