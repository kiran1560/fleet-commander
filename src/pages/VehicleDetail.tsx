import { ArrowLeft, Truck, Upload, FileText, AlertTriangle, Wrench, Droplets, Car } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const vehicleTabs = ["Documents", "CVIP", "Collisions", "Convictions", "PM (Quarterly)", "Oil Changes", "Repairs & Other"];

export default function VehicleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Documents");

  return (
    <div>
      <button onClick={() => navigate("/vehicles")} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Vehicles
      </button>

      <div className="page-header">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-accent/10 p-3"><Truck className="h-6 w-6 text-accent" /></div>
          <div>
            <h1 className="page-title mb-0">Unit-00{id}</h1>
            <p className="text-sm text-muted-foreground">Provincial · Northern Transport</p>
          </div>
        </div>
        <span className="badge-active inline-flex rounded-full border px-3 py-1 text-sm font-medium">Active</span>
      </div>

      {/* Vehicle Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Plate", value: "ABC-1234" },
          { label: "Radius", value: "Provincial" },
          { label: "Activated", value: "2024-01-15" },
          { label: "CVIP Expiry", value: "2026-06-30" },
        ].map((info) => (
          <div key={info.label} className="stat-card">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
            <p className="text-sm font-semibold mt-1">{info.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b mb-6 overflow-x-auto">
        {vehicleTabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >{tab}</button>
        ))}
      </div>

      {activeTab === "Documents" && (
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="section-title mb-0">Vehicle Documents (More documents can be added and given label)</h3>
            <button className="flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"><Upload className="h-3.5 w-3.5" /> Upload</button>
          </div>
          <div className="space-y-2">
            {["Registration Certificate", "Insurance Policy", "Safety Certificate"].map((doc) => (
              <div key={doc} className="flex items-center gap-3 rounded-md border p-3 hover:bg-secondary transition-colors">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm flex-1">{doc}</span>
                <span className="text-xs text-muted-foreground">Uploaded Jan 15, 2024</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "CVIP" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">CVIP Records</h3>
          <div className="space-y-3">
            {[
              { date: "2025-06-15", expiry: "2026-06-15", status: "Valid", mechanic: "ABC Auto" },
              { date: "2024-06-10", expiry: "2025-06-10", status: "Expired", mechanic: "XYZ Repairs" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-4 rounded-md border p-3">
                <div className="flex-1">
                  <p className="text-sm font-medium">Inspection: {r.date}</p>
                  <p className="text-xs text-muted-foreground">Mechanic: {r.mechanic}</p>
                </div>
                <p className="text-xs text-muted-foreground">Expiry: {r.expiry}</p>
                <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${r.status === "Valid" ? "badge-active" : "badge-inactive"}`}>{r.status}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add CVIP Record</button>
        </div>
      )}

      {activeTab === "Collisions" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-destructive" /> Collision History</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 rounded-md border p-3">
              <div className="flex-1">
                <p className="text-sm font-medium">Rear-end collision on Hwy 2</p>
                <p className="text-xs text-muted-foreground">Date: 2025-03-12 · Driver: J. Smith</p>
              </div>
              <span className="badge-warning rounded-full border px-2 py-0.5 text-xs font-medium">Under Review</span>
            </div>
          </div>
          <button className="mt-4 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Collision Report</button>
        </div>
      )}

      {activeTab === "Convictions" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title">Vehicle Convictions</h3>
          <p className="text-sm text-muted-foreground mb-4">Records of convictions associated with this vehicle.</p>
          <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Conviction</button>
        </div>
      )}

      {activeTab === "PM (Quarterly)" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Wrench className="h-4 w-4 text-accent" /> Preventive Maintenance</h3>
          <div className="space-y-3">
            {["Q1 2026", "Q4 2025", "Q3 2025"].map((q) => (
              <div key={q} className="flex items-center justify-between rounded-md border p-3">
                <span className="text-sm font-medium">{q}</span>
                <span className="badge-active rounded-full border px-2 py-0.5 text-xs font-medium">Completed</span>
              </div>
            ))}
          </div>
          <button className="mt-4 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add PM Record</button>
        </div>
      )}

      {activeTab === "Oil Changes" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Droplets className="h-4 w-4 text-accent" /> Oil Change Records</h3>
          <div className="space-y-3">
            {[{ date: "2026-01-20", km: "145,200" }, { date: "2025-10-15", km: "138,400" }].map((r, i) => (
              <div key={i} className="flex items-center justify-between rounded-md border p-3">
                <span className="text-sm">Date: {r.date}</span>
                <span className="text-sm text-muted-foreground">{r.km} km</span>
              </div>
            ))}
          </div>
          <button className="mt-4 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Oil Change</button>
        </div>
      )}

      {activeTab === "Repairs & Other" && (
        <div className="rounded-lg border bg-card p-6">
          <h3 className="section-title flex items-center gap-2"><Car className="h-4 w-4 text-accent" /> Repairs & Other</h3>
          <p className="text-sm text-muted-foreground mb-4">General repair and maintenance records.</p>
          <button className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Add Repair Record</button>
        </div>
      )}
    </div>
  );
}
