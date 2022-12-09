import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			staleTime: Infinity,
		},
	},
});

let container = null;
document.addEventListener("DOMContentLoaded", () => {
	if (!container) {
		container = document.getElementById("root");
		ReactDOM.createRoot(document.getElementById("root")).render(
			<React.StrictMode>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools initialIsOpen={true} />
				</QueryClientProvider>
			</React.StrictMode>
		);
	}
});
