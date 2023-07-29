import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./components/Home.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      cacheTime: 12 * 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
