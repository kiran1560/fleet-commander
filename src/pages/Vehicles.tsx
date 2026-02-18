import { Plus, Search, Truck, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const vehiclesData = [
  { id: 1, unit: "Unit-001", plate: "ABC-1234", radius: "Provincial", status: "Active", activatedDate: "2024-01-15", client: "Northern Transport" },
  { id: 2, unit: "Unit-002", plate: "", radius: "IRP", status: "Active", activatedDate: "2024-02-01", client: "Northern Transport" },
  { id: 3, unit: "Unit-003", plate: "DEF-5678", radius: "IRP", status: "OOS", activatedDate: "2023-11-10", client: "Prairie Logistics" },
  { id: 4, unit: "Unit-004", plate: "GHI-9012", radius: "Provincial", status: "Active", activatedDate: "2024-03-20", client: "Eastern Freight" },
  { id: 5, unit: "Unit-005", plate: "", radius: "IRP", status: "Deactivated", activatedDate: "2023-06-01", client: "Pacific Haulers" },
  { id: 6, unit: "Unit-006", plate: "JKL-3456", radius: "Provincial", status: "Active", activatedDate: "2024-05-12", client: "Mountain Express" },
];

const AddVehicleModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm">
    <div className="w-full max-w-lg rounded-xl border bg-card p-6 shadow-xl">
      <h2 className="text-lg font-bold mb-4">Add New Vehicle</h2>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Vehicle Unit Number *</label>
          <input type="text" placeholder="e.g. Unit-007" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium">Plate Number (Optional)</label>
          <input type="text" placeholder="e.g. ABC-1234" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium">Operational Radius *</label>
          <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
            <option>Provincial</option>
            <option>IRP</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Status *</label>
          <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
            <option>Active</option>
            <option>Deactivated</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Date of Activation *</label>
          <input type="date" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium">Assign to Client *</label>
          <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
            <option>Northern Transport</option>
            <option>Prairie Logistics</option>
            <option>Eastern Freight</option>
          </select>
        </div>
      </div>
      <div className="flex gap-3 mt-6 justify-end">
        <button onClick={onClose} className="rounded-md border px-4 py-2 text-sm hover:bg-secondary transition-colors">Cancel</button>
        <button onClick={onClose} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity">Create Vehicle</button>
      </div>
    </div>
  </div>
);

export default function Vehicles() {
  const navigate = useNavigate();
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Vehicles</h1>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" /> Add Vehicle
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search by unit number..." className="h-9 w-full rounded-md border bg-secondary pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>
        <select className="h-9 rounded-md border bg-secondary px-3 text-sm">
          <option>All Status</option><option>Active</option><option>OOS</option><option>Deactivated</option>
        </select>
      </div>

      <div className="rounded-lg border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Unit #</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Plate</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Client</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Radius</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Activated</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehiclesData.map((v) => (
              <tr key={v.id} onClick={() => navigate(`/vehicles/${v.id}`)} className="border-b last:border-0 hover:bg-secondary/30 cursor-pointer transition-colors">
                <td className="px-4 py-3 font-medium flex items-center gap-2"><Truck className="h-4 w-4 text-muted-foreground" />{v.unit}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.plate || "—"}</td>
                <td className="px-4 py-3">{v.client}</td>
                <td className="px-4 py-3"><span className="rounded-full border px-2 py-0.5 text-xs">{v.radius}</span></td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${
                    v.status === "Active" ? "badge-active" : v.status === "OOS" ? "badge-warning" : "badge-inactive"
                  }`}>{v.status}</span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{v.activatedDate}</td>
                <td className="px-4 py-3 text-right">
                  <button onClick={(e) => e.stopPropagation()} className="rounded-md p-1 hover:bg-secondary"><MoreVertical className="h-4 w-4 text-muted-foreground" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdd && <AddVehicleModal onClose={() => setShowAdd(false)} />}
    </div>
  );
}
