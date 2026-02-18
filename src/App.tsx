import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ApexForms from "./pages/ApexForms";
import Clients from "./pages/Clients";
import AddClient from "./pages/AddClient";
import ClientDetail from "./pages/ClientDetail";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import Drivers from "./pages/Drivers";
import DriverDetail from "./pages/DriverDetail";
import Inspections from "./pages/Inspections";
import Maintenance from "./pages/Maintenance";
import Collisions from "./pages/Collisions";
import WarningLetters from "./pages/WarningLetters";
import UsersPage from "./pages/UsersPage";
import IFTA from "./pages/IFTA";
import Trainings from "./pages/Trainings";
import Services from "./pages/Services";
// import Integrations from "./pages/Integrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apex-forms" element={<ApexForms />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/new" element={<AddClient />} />
            <Route path="/clients/:id" element={<ClientDetail />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/:id" element={<DriverDetail />} />
            <Route path="/inspections/passed" element={<Inspections />} />
            <Route path="/inspections/oos" element={<Inspections />} />
            <Route path="/inspections/driver-convictions" element={<Inspections />} />
            <Route path="/inspections/company-convictions" element={<Inspections />} />
            <Route path="/maintenance/pm" element={<Maintenance />} />
            <Route path="/maintenance/oil" element={<Maintenance />} />
            <Route path="/maintenance/repairs" element={<Maintenance />} />
            <Route path="/collisions" element={<Collisions />} />
            <Route path="/warning-letters" element={<WarningLetters />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/ifta" element={<IFTA />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/integrations" element={<Integrations />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
