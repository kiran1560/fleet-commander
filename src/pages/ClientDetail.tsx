import { ArrowLeft, Building2, Mail, Phone, MapPin, FileText, Hash } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const tabs = ["Profile", "Settings", "Rate & Pricing", "Login Sheet", "HOS / FVR", "Documents", "Vehicles", "Drivers"];

const profileFields = [
  { label: "SFC Number", value: "SFC-2234", key: "sfc" },
  { label: "IRP File Number", value: "IRP-AB-445521", key: "irp" },
  { label: "IFTA File Number", value: "IFTA-2234-AB", key: "ifta" },
  { label: "Email", value: "admin@northerntransport.ca", key: "email" },
  { label: "Address", value: "12045 - 123 Street NW, Edmonton, AB T5N 1L6", key: "address" },
  { label: "Phone", value: "(780) 555-0123", key: "phone" },
  { label: "MVID Number", value: "MVID-887422", key: "mvid" },
  { label: "MC Number", value: "MC-445521", key: "mc" },
  { label: "DOT Number", value: "DOT-3312456", key: "dot" },
  { label: "KYU Number", value: "KYU-22341", key: "kyu" },
  { label: "SCAC Code", value: "NRTH", key: "scac" },
  { label: "PARAS Code", value: "PAR-2234", key: "paras" },
  { label: "TDG", value: "TDG-Certified", key: "tdg" },
];

export default function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div>
      <button onClick={() => navigate("/clients")} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Clients
      </button>

      <div className="page-header">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-accent/10 p-3">
            <Building2 className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="page-title mb-0">Northern Transport Inc.</h1>
            <p className="text-sm text-muted-foreground">Alberta · Client ID: {id}</p>
          </div>
        </div>
        <span className="badge-active inline-flex rounded-full border px-3 py-1 text-sm font-medium">Active</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Profile" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileFields.map((field) => (
            <div key={field.key} className="rounded-lg border bg-card p-4">
              <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{field.label}</label>
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm font-medium">{field.value}</p>
                <input type="date" className="h-7 rounded border bg-secondary px-2 text-xs" placeholder="Renewal" />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Settings" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Client Type</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {["Carrier", "Broker", "Owner-Operator"].map((type) => (
              <button key={type} className="rounded-md border p-3 text-sm font-medium hover:bg-secondary transition-colors">
                {type}
              </button>
            ))}
          </div>
          <h3 className="section-title">User Accounts</h3>
          <p className="text-sm text-muted-foreground">Manage client user accounts and access permissions.</p>
        </div>
      )}

      {activeTab === "Rate & Pricing" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Service Rates</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {["Safety Compliance", "IFTA Filing", "CVOR Monitoring", "Drug Testing", "Training Modules", "Permit Services"].map((s) => (
              <div key={s} className="flex items-center justify-between rounded-md border p-3">
                <span className="text-sm">{s}</span>
                <input type="text" placeholder="$0.00" className="w-24 rounded border bg-secondary px-2 py-1 text-sm text-right" />
              </div>
            ))}
          </div>
        </div>
      )}

      {["Login Sheet", "HOS / FVR", "Documents"].includes(activeTab) && (
        <div className="rounded-lg border bg-card p-6 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <h3 className="section-title">{activeTab}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {activeTab === "Documents" ? "Manage client documents and sub-folders." : `Manage ${activeTab} records.`}
          </p>
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            {activeTab === "Documents" ? "Upload Document" : "View Sheet"}
          </button>
        </div>
      )}

      {activeTab === "Vehicles" && (
        <div className="rounded-lg border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">View and manage vehicles for this client from the <button onClick={() => navigate("/vehicles")} className="text-accent underline">Vehicles</button> section.</p>
        </div>
      )}

      {activeTab === "Drivers" && (
        <div className="rounded-lg border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">View and manage drivers for this client from the <button onClick={() => navigate("/drivers")} className="text-accent underline">Drivers</button> section.</p>
        </div>
      )}
    </div>
  );
}
