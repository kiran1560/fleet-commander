import { AlertTriangle, Plus } from "lucide-react";

export default function Collisions() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Collision Reports</h1>
        <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          <Plus className="h-4 w-4" /> Add Report
        </button>
      </div>

      <div className="rounded-lg border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Driver</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Vehicle</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Location</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "2026-01-20", driver: "John Smith", unit: "Unit-001", location: "Hwy 2, Edmonton", status: "Under Review" },
              { date: "2025-09-15", driver: "Sarah Johnson", unit: "Unit-002", location: "Hwy 401, Toronto", status: "Closed" },
            ].map((r, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3 font-medium">{r.driver}</td>
                <td className="px-4 py-3">{r.unit}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.location}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${r.status === "Closed" ? "badge-active" : "badge-warning"}`}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
