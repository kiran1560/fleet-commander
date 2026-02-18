// import { Link as LinkIcon, ExternalLink } from "lucide-react";

// const integrations = [
//   {
//     name: "Zoho CRM",
//     description: "Sync client data, contacts, and service records with Zoho CRM.",
//     status: "Available",
//     logo: "Z",
//   },
//   {
//     name: "QuickBooks",
//     description: "Integrate billing, invoicing, and financial tracking with QuickBooks.",
//     status: "Available",
//     logo: "QB",
//   },
//   {
//     name: "BIS Training",
//     description: "Connect to BIS Safety Software for online training modules and compliance tracking.",
//     status: "Available",
//     logo: "BIS",
//   },
// ];

// export default function Integrations() {
//   return (
//     <div>
//       <div className="page-header">
//         <h1 className="page-title">Integrations</h1>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {integrations.map((int) => (
//           <div key={int.name} className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-lg">
//                 {int.logo}
//               </div>
//               <div>
//                 <h3 className="font-semibold">{int.name}</h3>
//                 <span className="badge-warning rounded-full border px-2 py-0.5 text-xs font-medium">{int.status}</span>
//               </div>
//             </div>
//             <p className="text-sm text-muted-foreground mb-4">{int.description}</p>
//             <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
//               <LinkIcon className="h-3.5 w-3.5" /> Connect
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { FileText, ExternalLink } from "lucide-react";

const integrations = [
  {
    name: "Dry Van Rate Sheet",
    description: "Standard per-mile and lane pricing for dry van shipments.",
    status: "Active",
    logo: "DV",
  },
  {
    name: "Reefer Rate Sheet",
    description: "Temperature-controlled freight rates including fuel surcharge.",
    status: "Active",
    logo: "RF",
  },
  {
    name: "Flatbed Rate Sheet",
    description: "Regional and long-haul flatbed pricing structure.",
    status: "Active",
    logo: "FB",
  },
  {
    name: "Owner Operator Rate Sheet",
    description: "Pay structure and load percentage rates for owner operators.",
    status: "Draft",
    logo: "OO",
  },
  {
    name: "Broker Contract Rates",
    description: "Negotiated broker lane rates and confirmations.",
    status: "Active",
    logo: "BR",
  },
  {
    name: "Dedicated Lane Pricing",
    description: "Fixed monthly or weekly dedicated route pricing.",
    status: "Draft",
    logo: "DL",
  },
];

export default function RateSheet() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Rate Sheets</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {integrations.map((int) => (
          <div
            key={int.name}
            className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-lg">
                {int.logo}
              </div>
              <div>
                <h3 className="font-semibold">{int.name}</h3>
                <span className="badge-warning rounded-full border px-2 py-0.5 text-xs font-medium">
                  {int.status}
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {int.description}
            </p>

            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              <FileText className="h-3.5 w-3.5" /> Open Rate Sheet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
