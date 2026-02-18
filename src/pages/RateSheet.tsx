import { FileText, Download, Edit, Plus } from "lucide-react";

const rateSheets = [
  {
    name: "Standard Dry Van Rates",
    type: "Dry Van",
    description: "Standard lane-based dry van pricing",
    lastUpdated: "Jan 12, 2026",
  },
  {
    name: "Reefer Long Haul",
    type: "Reefer",
    description: "Temperature-controlled long haul pricing",
    lastUpdated: "Jan 10, 2026",
  },
  {
    name: "Flatbed Regional Rates",
    type: "Flatbed",
    description: "Regional flatbed freight pricing",
    lastUpdated: "Jan 8, 2026",
  },
];

export default function RateSheet() {
  return (
    <div>
      {/* Header */}
      <div className="page-header flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title text-2xl font-bold">Rate Sheets</h1>
          <p className="text-sm text-muted-foreground">
            Manage and customize your carrier rate sheets
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" />
          Create Rate Sheet
        </button>
      </div>

      {/* Rate Sheet Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rateSheets.map((sheet) => (
          <div
            key={sheet.name}
            className="rounded-lg border bg-card p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-accent/10 p-2">
                <FileText className="h-5 w-5 text-accent" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold mb-1">
                  {sheet.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {sheet.description}
                </p>

                <span className="inline-block rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {sheet.type}
                </span>

                <p className="mt-2 text-xs text-muted-foreground">
                  Last Updated: {sheet.lastUpdated}
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                <Edit className="h-3.5 w-3.5 inline mr-1" />
                Edit
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
