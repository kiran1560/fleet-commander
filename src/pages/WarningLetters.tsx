import { BookOpen, Send, Printer } from "lucide-react";
import { useState } from "react";

const templates = [
  "First Warning Letter",
  "Second Warning Letter",
  "Third Warning Letter",
  "Final Warning Letter",
  "Termination Notice",
];

export default function WarningLetters() {
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Warning Letters</h1>
      </div>

      <div className="rounded-lg border bg-card p-6 mb-6">
        <h3 className="section-title">Generate Warning Letter</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Select Driver *</label>
            <select value={selectedDriver} onChange={(e) => setSelectedDriver(e.target.value)} className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
              <option value="">Choose driver...</option>
              <option>John Smith</option><option>Sarah Johnson</option><option>Emily Brown</option><option>David Wilson</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Warning Template *</label>
            <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)} className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
              <option value="">Choose template...</option>
              {templates.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Date of Letter</label>
            <input type="date" defaultValue="2026-02-18" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <Printer className="h-3.5 w-3.5" /> Print Letter
          </button>
          <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <Send className="h-3.5 w-3.5" /> Email to Driver
          </button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="section-title">Templates</h3>
        <div className="space-y-2">
          {templates.map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-md border p-3 hover:bg-secondary transition-colors">
              <BookOpen className="h-4 w-4 text-accent" />
              <span className="text-sm flex-1">{t}</span>
              <button className="rounded-md border px-2 py-1 text-xs hover:bg-secondary">Preview</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
