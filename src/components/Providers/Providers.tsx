import { ReactQueryProvider } from "@/components/Providers/QueryClientProvider";
import { AppThemeProvider } from "@/components/Providers/ThemeProvider";
import type { FunctionComponent, ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </ReactQueryProvider>
  );
};
