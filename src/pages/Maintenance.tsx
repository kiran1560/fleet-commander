import { useState } from "react";
import { Wrench, Droplets, Car, Plus, Upload } from "lucide-react";

const tabs = ["PM (Quarterly)", "Oil Changes", "Other Repairs"];

export default function Maintenance() {
  const [activeTab, setActiveTab] = useState("PM (Quarterly)");

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Maintenance</h1>
        <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          <Plus className="h-4 w-4" /> Add Record
        </button>
      </div>

      <div className="flex gap-1 border-b mb-6">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >{tab}</button>
        ))}
      </div>

      {activeTab === "PM (Quarterly)" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Wrench className="h-4 w-4 text-accent" /> Preventive Maintenance</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium">Date of Inspection *</label>
              <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Vehicle Unit # *</label>
              <input type="text" placeholder="Unit number" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Any Repair Required? *</label>
              <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
                <option>No</option><option>Yes</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Mechanic Name *</label>
              <input type="text" placeholder="Mechanic name" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border rounded-md bg-secondary/50 mb-4">
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">If repair marked Yes, upload invoice</span>
            <button className="ml-auto rounded-md bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">Upload Invoice</button>
          </div>
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Save PM Record</button>
        </div>
      )}

      {activeTab === "Oil Changes" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Droplets className="h-4 w-4 text-accent" /> Oil Changes</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium">Date of Oil Change *</label>
              <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Vehicle Unit # *</label>
              <input type="text" placeholder="Unit number" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
          </div>
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Save Oil Change</button>
        </div>
      )}

      {activeTab === "Other Repairs" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Car className="h-4 w-4 text-accent" /> Other Repairs</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium">Date of Repair *</label>
              <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Vehicle Unit # *</label>
              <input type="text" placeholder="Unit number" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
            </div>
          </div>
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Save Repair Record</button>
        </div>
      )}
    </div>
  );
}
