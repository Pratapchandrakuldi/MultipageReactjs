// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import AppRouter from "@/router/AppRouter";

// // Initialize React Query client
// const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         {/* Toast Notifications */}
//         <Toaster />
//         <Sonner />

//         {/* Routing */}
//         <BrowserRouter>
//           <AppRouter />
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;











// src/App.jsx
import { Outlet } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import { useTheme } from './context/ThemeContext';


export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Navigation Header - Consistent across all pages */}
      <Navigation />

      {/* Main Content Area - Renders current route component */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Consistent across all pages */}
      <Footer />
    </div>
  );
}