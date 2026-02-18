import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddClient() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Add New Client</h1>
      </div>

      <div className="max-w-2xl rounded-lg border bg-card p-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Company Name *</label>
            <input type="text" placeholder="Company name" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Region *</label>
            <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
              <option>Alberta</option><option>Ontario</option><option>British Columbia</option><option>Saskatchewan</option><option>Manitoba</option><option>Quebec</option><option>Nova Scotia</option><option>New Brunswick</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Client Type *</label>
            <select className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm">
              <option>Carrier</option><option>Broker</option><option>Owner-Operator</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" placeholder="client@email.com" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input type="tel" placeholder="(xxx) xxx-xxxx" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Address</label>
            <input type="text" placeholder="Full address" className="mt-1 w-full rounded-md border bg-secondary px-3 py-2 text-sm" />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={() => navigate("/clients")} className="rounded-md border px-4 py-2 text-sm hover:bg-secondary transition-colors">Cancel</button>
          <button onClick={() => navigate("/clients")} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">Create Client</button>
        </div>
      </div>
    </div>
  );
}
