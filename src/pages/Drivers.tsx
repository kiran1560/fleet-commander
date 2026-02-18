import { Plus, Search, UserCheck, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const driversData = [
  { id: 1, name: "John Smith", dob: "1985-06-15", license: "AB-123456", province: "Alberta", expiry: "2027-06-15", status: "Active", phone: "(780) 555-0101", email: "john@email.com" },
  { id: 2, name: "Sarah Johnson", dob: "1990-03-22", license: "ON-789012", province: "Ontario", expiry: "2026-03-22", status: "Active", phone: "(416) 555-0202", email: "sarah@email.com" },
  { id: 3, name: "Mike Davis", dob: "1988-11-08", license: "AB-345678", province: "Alberta", expiry: "2026-11-08", status: "Deactivated", phone: "(780) 555-0303", email: "mike@email.com" },
  { id: 4, name: "Emily Brown", dob: "1992-01-30", license: "BC-901234", province: "British Columbia", expiry: "2027-01-30", status: "Active", phone: "(604) 555-0404", email: "emily@email.com" },
  { id: 5, name: "David Wilson", dob: "1983-09-12", license: "ON-567890", province: "Ontario", expiry: "2026-09-12", status: "Active", phone: "(905) 555-0505", email: "david@email.com" },
];

const AddDriverModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm">
    <div className="w-full max-w-lg rounded-xl border bg-card p-6 shadow-xl max-h-[90vh] overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Add New Driver</h2>
      <div className="space-y-4">
        {[
          { label: "Driver Name *", type: "text", placeholder: "Full name" },
          { label: "Date of Birth *", type: "date" },
          { label: "License # *", type: "text", placeholder: "License number" },
        ].map((f) => (
          <div key={f.label}>
            <label className="text-sm font-medium">{f.label}</label>
            <input type={f.type} placeholder={f.placeholder} className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
          </div>
        ))}
        <div>
          <label className="text-sm font-medium">License Province *</label>
          <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
            <option>Alberta</option><option>Ontario</option><option>British Columbia</option><option>Saskatchewan</option><option>Manitoba</option><option>Quebec</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">License Expiry Date *</label>
          <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium">Status *</label>
          <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
            <option>Active</option><option>Deactivated</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Email *</label>
          <input type="email" placeholder="driver@email.com" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium">Phone Number *</label>
          <input type="tel" placeholder="(xxx) xxx-xxxx" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium">Date of Activation</label>
          <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium">Date of Deactivation</label>
          <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
      </div>
      <div className="flex gap-3 mt-6 justify-end">
        <button onClick={onClose} className="rounded-md border px-4 py-2 text-sm hover:bg-secondary transition-colors">Cancel</button>
        <button onClick={onClose} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Create Driver</button>
      </div>
    </div>
  </div>
);

export default function Drivers() {
  const navigate = useNavigate();
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Drivers</h1>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          <Plus className="h-4 w-4" /> Add Driver
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search drivers..." className="h-9 w-full rounded-md border bg-secondary pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>
        <select className="h-9 rounded-md border bg-secondary px-3 text-sm"><option>All Status</option><option>Active</option><option>Deactivated</option></select>
      </div>

      <div className="rounded-lg border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Driver</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">License #</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Province</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Lic. Expiry</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Phone</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {driversData.map((d) => (
              <tr key={d.id} onClick={() => navigate(`/drivers/${d.id}`)} className="border-b last:border-0 hover:bg-secondary/30 cursor-pointer transition-colors">
                <td className="px-4 py-3 font-medium flex items-center gap-2"><UserCheck className="h-4 w-4 text-muted-foreground" />{d.name}</td>
                <td className="px-4 py-3 font-mono text-xs">{d.license}</td>
                <td className="px-4 py-3">{d.province}</td>
                <td className="px-4 py-3 text-muted-foreground">{d.expiry}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${d.status === "Active" ? "badge-active" : "badge-inactive"}`}>{d.status}</span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{d.phone}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={(e) => e.stopPropagation()} className="rounded-md p-1 hover:bg-secondary"><MoreVertical className="h-4 w-4 text-muted-foreground" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdd && <AddDriverModal onClose={() => setShowAdd(false)} />}
    </div>
  );
}
