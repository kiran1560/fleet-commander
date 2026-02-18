import { FolderOpen, Plus, FolderPlus } from "lucide-react";

const quarters = [
  { name: "Q1 2026", folders: ["Fuel Receipts", "Mileage Reports", "Tax Filing"] },
  { name: "Q4 2025", folders: ["Fuel Receipts", "Mileage Reports", "Tax Filing", "Amendments"] },
  { name: "Q3 2025", folders: ["Fuel Receipts", "Mileage Reports", "Tax Filing"] },
];

export default function IFTA() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">IFTA — Quarterly Tax Tracking</h1>
        <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          <FolderPlus className="h-4 w-4" /> New Quarter
        </button>
      </div>

      <div className="space-y-4">
        {quarters.map((q) => (
          <div key={q.name} className="rounded-lg border bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="section-title mb-0 flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-accent" /> {q.name}
              </h3>
              <button className="flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-secondary">
                <Plus className="h-3 w-3" /> Add Sub-folder
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {q.folders.map((f) => (
                <div key={f} className="flex items-center gap-2 rounded-md border p-3 hover:bg-secondary cursor-pointer transition-colors">
                  <FolderOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
