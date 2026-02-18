import { ArrowLeft, UserCheck, Upload, FileText, Send, AlertTriangle, Shield, Download, BookOpen, Syringe } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const driverTabs = [
  "Driver Docs", "Application", "Road Test", "Training Docs", "Drug Tests",
  "Convictions", "Collisions", "Claim Experience", "Warning Letters"
];

export default function DriverDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Driver Docs");

  return (
    <div>
      <button onClick={() => navigate("/drivers")} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Drivers
      </button>

      <div className="page-header">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-accent/10 p-3"><UserCheck className="h-6 w-6 text-accent" /></div>
          <div>
            <h1 className="page-title mb-0">John Smith</h1>
            <p className="text-sm text-muted-foreground">License: AB-123456 · Alberta · Driver #{id}</p>
          </div>
        </div>
        <span className="badge-active inline-flex rounded-full border px-3 py-1 text-sm font-medium">Active</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {[
          { label: "DOB", value: "1985-06-15" },
          { label: "License Expiry", value: "2027-06-15" },
          { label: "Email", value: "john@email.com" },
          { label: "Phone", value: "(780) 555-0101" },
          { label: "Activated", value: "2024-01-15" },
        ].map((info) => (
          <div key={info.label} className="stat-card">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
            <p className="text-sm font-semibold mt-1 truncate">{info.value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-1 border-b mb-6 overflow-x-auto">
        {driverTabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >{tab}</button>
        ))}
      </div>

      {activeTab === "Driver Docs" && (
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="section-title mb-0">Driver Documents</h3>
            <button className="flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"><Upload className="h-3.5 w-3.5" /> Upload</button>
          </div>
          <div className="space-y-2">
            {[
              { name: "Driver's License", type: "License", date: "2024-01-15" },
              { name: "Abstract (Must be < 20 days old)", type: "Abstract", date: "2026-02-10", warn: false },
              { name: "CVOR Record (ON drivers only)", type: "CVOR", date: "2025-12-01" },
              { name: "Medical Certificate", type: "Other", date: "2025-08-20" },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center gap-3 rounded-md border p-3 hover:bg-secondary transition-colors">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <span className="text-sm">{doc.name}</span>
                  <span className="ml-2 rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{doc.type}</span>
                </div>
                <span className="text-xs text-muted-foreground">{doc.date}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-destructive flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" /> Abstract uploads older than 20 days will be rejected.
          </p>
        </div>
      )}

      {activeTab === "Application" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Send className="h-4 w-4 text-accent" /> Driver Application</h3>
          <p className="text-sm text-muted-foreground mb-4">Send application link to driver for digital completion and signature.</p>
          <div className="flex gap-3">
            <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Send Application Link</button>
            <button className="rounded-md border px-4 py-2 text-sm hover:bg-secondary">View Submitted Applications</button>
          </div>
        </div>
      )}

      {activeTab === "Road Test" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Road Test Records</h3>
          <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"><Upload className="h-3.5 w-3.5 inline mr-1" /> Upload Road Test</button>
        </div>
      )}

      {activeTab === "Training Docs" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Training Documents</h3>
          <p className="text-sm text-muted-foreground mb-4">Signed training forms (saved as non-printable PDFs).</p>
          <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"><Upload className="h-3.5 w-3.5 inline mr-1" /> Upload Training Doc</button>
        </div>
      )}

      {activeTab === "Drug Tests" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Syringe className="h-4 w-4 text-accent" /> Drug & Alcohol Testing</h3>
          <div className="space-y-2">
            {[
              { date: "2025-12-01", type: "Random", result: "Negative" },
              { date: "2025-06-15", type: "Pre-employment", result: "Negative" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between rounded-md border p-3">
                <span className="text-sm">{t.date} · {t.type}</span>
                <span className="badge-active rounded-full border px-2 py-0.5 text-xs font-medium">{t.result}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Test Record</button>
        </div>
      )}

      {activeTab === "Convictions" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Shield className="h-4 w-4 text-destructive" /> Driver Convictions</h3>
          <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Conviction</button>
        </div>
      )}

      {activeTab === "Collisions" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-destructive" /> Driver Collisions</h3>
          <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Collision Report</button>
        </div>
      )}

      {activeTab === "Claim Experience" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Claim Experience Letters</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-md border p-4">
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2"><Download className="h-4 w-4 text-accent" /> Issue Driver Report Card</h4>
              <p className="text-xs text-muted-foreground mb-3">Download a full PDF of all convictions, violations, and claims.</p>
              <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Generate Report Card</button>
            </div>
            <div className="rounded-md border p-4">
              <h4 className="text-sm font-semibold mb-2">Old Experience Letters</h4>
              <p className="text-xs text-muted-foreground mb-3">History from previous employers.</p>
              <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"><Upload className="h-3.5 w-3.5 inline mr-1" /> Upload Letter</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Warning Letters" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Warning Letters</h3>
          <div className="space-y-2 mb-4">
            {["First Warning", "Second Warning", "Third Warning", "Final Warning", "Termination Notice"].map((w) => (
              <div key={w} className="flex items-center justify-between rounded-md border p-3 hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-sm">{w}</span>
                <div className="flex gap-2">
                  <button className="rounded-md border px-2 py-1 text-xs hover:bg-secondary">Print</button>
                  <button className="rounded-md bg-accent px-2 py-1 text-xs text-accent-foreground">Email to Driver</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
