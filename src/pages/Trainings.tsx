import { GraduationCap, BookOpen, CheckCircle } from "lucide-react";

const modules = [
  { name: "Hours of Service (HOS)", description: "Federal and provincial HOS regulations training", lessons: 8, status: "Available" },
  { name: "Cargo Securement", description: "Proper cargo loading, securing, and documentation", lessons: 6, status: "Available" },
  { name: "Pre-Trip Inspection (PTI)", description: "Complete vehicle pre-trip inspection procedures", lessons: 5, status: "Available" },
  { name: "Weight & Dimensions", description: "Provincial weight limits and dimension regulations", lessons: 4, status: "Available" },
];

export default function Trainings() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Trainings</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {modules.map((m) => (
          <div key={m.name} className="rounded-lg border bg-card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-accent/10 p-2.5">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-1">{m.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{m.description}</p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <BookOpen className="h-3 w-3" /> {m.lessons} lessons
                  </span>
                  <span className="badge-active rounded-full border px-2 py-0.5 text-xs font-medium">{m.status}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">Assign to Driver</button>
              <button className="rounded-md border px-3 py-1.5 text-xs hover:bg-secondary">View Content</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
