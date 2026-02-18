import { FileText, Download, Search } from "lucide-react";

const templates = [
  { name: "Carrier-Shipper Agreement", category: "Agreement", description: "Standard carrier and shipper contract" },
  { name: "Owner-Operator Lease Agreement", category: "Agreement", description: "Lease agreement for owner-operators" },
  { name: "Broker-Carrier Agreement", category: "Agreement", description: "Agreement between broker and carrier" },
  { name: "Driver Employment Agreement", category: "Agreement", description: "Standard driver employment contract" },
  { name: "Consent to Release Information", category: "Consent", description: "Authorization to release driver records" },
  { name: "Drug & Alcohol Testing Consent", category: "Consent", description: "Consent for drug and alcohol testing" },
  { name: "Background Check Authorization", category: "Authorization", description: "Authorization for background check" },
  { name: "MVR Authorization", category: "Authorization", description: "Motor Vehicle Record check authorization" },
  { name: "CVOR Consent Form", category: "Consent", description: "Commercial Vehicle Operator consent form" },
  { name: "Rate Confirmation Sheet", category: "Agreement", description: "Rate confirmation between parties" },
  { name: "Bill of Lading Template", category: "Agreement", description: "Standard bill of lading form" },
  { name: "Cargo Insurance Authorization", category: "Authorization", description: "Cargo insurance authorization form" },
];

export default function ApexForms() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">APEX Forms</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search templates..."
            className="h-9 w-64 rounded-md border bg-secondary pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        {["All", "Agreement", "Consent", "Authorization"].map((cat) => (
          <button
            key={cat}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              cat === "All" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div key={template.name} className="rounded-lg border bg-card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-accent/10 p-2">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold mb-1">{template.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{template.description}</p>
                <span className="inline-block rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {template.category}
                </span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                Use Template
              </button>
              <button className="rounded-md border px-3 py-1.5 text-xs hover:bg-secondary transition-colors">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
