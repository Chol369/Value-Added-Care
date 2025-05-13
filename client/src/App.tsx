import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { trackPageView } from "./lib/analytics";

function Router() {
  const [location] = useLocation();

  // Track page views when location changes
  useEffect(() => {
    trackPageView(location);
  }, [location]);

  // Listen for hash changes for single-page navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Initial check for hash on load
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/why-choose-us" component={WhyChooseUs} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <div className="mt-20">
          <Router />
        </div>
        <Footer />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
