import { Plus, Search, Settings, MoreVertical, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const clients = [
  { id: 1, name: "Northern Transport Inc.", region: "Alberta", status: "Active", vehicles: 45, drivers: 38, sfc: "SFC-2234" },
  { id: 2, name: "Prairie Logistics Ltd.", region: "Saskatchewan", status: "Active", vehicles: 22, drivers: 18, sfc: "SFC-1187" },
  { id: 3, name: "Eastern Freight Co.", region: "Ontario", status: "Active", vehicles: 67, drivers: 55, sfc: "SFC-3391" },
  { id: 4, name: "Pacific Haulers", region: "British Columbia", status: "Inactive", vehicles: 12, drivers: 0, sfc: "SFC-0842" },
  { id: 5, name: "Mountain Express", region: "Alberta", status: "Active", vehicles: 31, drivers: 27, sfc: "SFC-1965" },
  { id: 6, name: "Lakehead Carriers", region: "Ontario", status: "Active", vehicles: 8, drivers: 6, sfc: "SFC-4412" },
];

export default function Clients() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Clients</h1>
        <button
          onClick={() => navigate("/clients/new")}
          className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
        >
          <Plus className="h-4 w-4" />
          Add Client
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search clients..."
            className="h-9 w-full rounded-md border bg-secondary pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <select className="h-9 rounded-md border bg-secondary px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
          <option>All Regions</option>
          <option>Alberta</option>
          <option>Ontario</option>
          <option>British Columbia</option>
          <option>Saskatchewan</option>
        </select>
        <select className="h-9 rounded-md border bg-secondary px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="rounded-lg border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Client</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Region</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">SFC #</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Vehicles</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Drivers</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                onClick={() => navigate(`/clients/${client.id}`)}
                className="border-b last:border-0 hover:bg-secondary/30 cursor-pointer transition-colors"
              >
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  {client.name}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{client.region}</td>
                <td className="px-4 py-3 font-mono text-xs">{client.sfc}</td>
                <td className="px-4 py-3 text-center">{client.vehicles}</td>
                <td className="px-4 py-3 text-center">{client.drivers}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${
                    client.status === "Active" ? "badge-active" : "badge-inactive"
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={(e) => { e.stopPropagation(); }}
                    className="rounded-md p-1 hover:bg-secondary transition-colors"
                  >
                    <MoreVertical className="h-4 w-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
