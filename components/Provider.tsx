"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React from "react";

const Provider = ({ children }: any) => {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } })
  );
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Provider;
