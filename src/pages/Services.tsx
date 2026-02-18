import { DollarSign, Plus } from "lucide-react";

const services = [
  { client: "Northern Transport", service: "Safety Compliance", amount: "$2,500.00", status: "Paid", date: "2026-01-15" },
  { client: "Prairie Logistics", service: "IFTA Filing", amount: "$800.00", status: "Pending", date: "2026-02-01" },
  { client: "Eastern Freight", service: "CVOR Monitoring", amount: "$1,200.00", status: "Paid", date: "2026-01-20" },
  { client: "Mountain Express", service: "Drug Testing", amount: "$450.00", status: "Overdue", date: "2025-12-15" },
  { client: "Northern Transport", service: "Training Modules", amount: "$600.00", status: "Pending", date: "2026-02-10" },
];

export default function Services() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Services & Billing</h1>
        <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          <Plus className="h-4 w-4" /> New Invoice
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Revenue (MTD)", value: "$12,450.00", color: "text-success" },
          { label: "Pending Invoices", value: "$1,400.00", color: "text-warning" },
          { label: "Overdue", value: "$450.00", color: "text-destructive" },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
            <p className={`text-xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Client</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Service</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Amount</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-medium">{s.client}</td>
                <td className="px-4 py-3">{s.service}</td>
                <td className="px-4 py-3 text-right font-mono">{s.amount}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.date}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                    s.status === "Paid" ? "badge-active" : s.status === "Pending" ? "badge-warning" : "badge-inactive"
                  }`}>{s.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
