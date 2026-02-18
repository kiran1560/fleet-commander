import { Link as LinkIcon, ExternalLink } from "lucide-react";

const integrations = [
  {
    name: "Zoho CRM",
    description: "Sync client data, contacts, and service records with Zoho CRM.",
    status: "Available",
    logo: "Z",
  },
  {
    name: "QuickBooks",
    description: "Integrate billing, invoicing, and financial tracking with QuickBooks.",
    status: "Available",
    logo: "QB",
  },
  {
    name: "BIS Training",
    description: "Connect to BIS Safety Software for online training modules and compliance tracking.",
    status: "Available",
    logo: "BIS",
  },
];

export default function Integrations() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Integrations</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {integrations.map((int) => (
          <div key={int.name} className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-lg">
                {int.logo}
              </div>
              <div>
                <h3 className="font-semibold">{int.name}</h3>
                <span className="badge-warning rounded-full border px-2 py-0.5 text-xs font-medium">{int.status}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{int.description}</p>
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              <LinkIcon className="h-3.5 w-3.5" /> Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
