import { useState } from "react";
import { Shield, AlertTriangle, Search, Plus } from "lucide-react";

const tabs = ["Passed Inspections", "Out of Service (OOS)", "Driver Convictions", "Company Convictions"];

const convictionTypes = [
  "Speeding", "Log Book Violation", "Overweight", "Equipment Defect", "Hours of Service",
  "Lane Departure", "Following Too Closely", "Improper Lane Change", "Brake Defect",
];

export default function Inspections() {
  const [activeTab, setActiveTab] = useState("Passed Inspections");

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Inspections & Convictions</h1>
        <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          <Plus className="h-4 w-4" /> Add Record
        </button>
      </div>

      <div className="flex gap-1 border-b mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >{tab}</button>
        ))}
      </div>

      {activeTab === "Passed Inspections" && (
        <div className="rounded-lg border bg-card p-6">
          <div className="space-y-3">
            {[
              { date: "2026-01-15", driver: "John Smith", unit: "Unit-001", location: "Hwy 2, AB" },
              { date: "2025-12-20", driver: "Emily Brown", unit: "Unit-004", location: "Hwy 401, ON" },
              { date: "2025-11-05", driver: "David Wilson", unit: "Unit-006", location: "Hwy 1, BC" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-4 rounded-md border p-3 hover:bg-secondary transition-colors">
                <Shield className="h-4 w-4 text-success flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{r.driver} — {r.unit}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
                <span className="badge-active rounded-full border px-2 py-0.5 text-xs font-medium">Passed</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Out of Service (OOS)" && (
        <div className="rounded-lg border bg-card p-6">
          <div className="bg-destructive/10 border border-destructive/30 rounded-md p-3 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <p className="text-sm text-destructive">OOS vehicles are blocked until a repair invoice is uploaded.</p>
          </div>
          <div className="space-y-3">
            {[{ date: "2026-02-01", driver: "Mike Davis", unit: "Unit-003", reason: "Brake defect", resolved: false }].map((r, i) => (
              <div key={i} className="flex items-center gap-4 rounded-md border border-destructive/30 p-3">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{r.driver} — {r.unit}</p>
                  <p className="text-xs text-muted-foreground">Reason: {r.reason}</p>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
                <button className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">Upload Invoice</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Driver Convictions" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Add Driver Conviction</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium">Date of Occurrence *</label>
              <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Driver Name *</label>
              <input type="text" placeholder="Select driver" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Vehicle Unit # *</label>
              <input type="text" placeholder="Unit number" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Conviction Type *</label>
              <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
                {convictionTypes.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Save Conviction</button>
        </div>
      )}

      {activeTab === "Company Convictions" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Company Convictions</h3>
          <p className="text-sm text-muted-foreground mb-4">Tickets or fines issued directly to the carrier.</p>
          <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Company Conviction</button>
        </div>
      )}
    </div>
  );
}
