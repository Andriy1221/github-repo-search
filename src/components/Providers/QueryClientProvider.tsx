import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FunctionComponent, ReactNode } from "react";

type ReactQueryProviderProps = {
  children: ReactNode;
};

export const ReactQueryProvider: FunctionComponent<ReactQueryProviderProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
