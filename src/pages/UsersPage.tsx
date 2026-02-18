import { UserCog, Plus, Shield, FolderOpen } from "lucide-react";

const users = [
  { name: "Admin User", role: "Admin", email: "admin@apex.com", access: "Full Access" },
  { name: "Jane Operator", role: "Staff", email: "jane@apex.com", access: "Clients, Vehicles, Drivers" },
  { name: "Client: Northern Transport", role: "Client", email: "admin@northern.ca", access: "Upload & View Only" },
  { name: "Client: Prairie Logistics", role: "Client", email: "admin@prairie.ca", access: "Upload & View Only" },
];

const folders = [
  "APEX Forms", "Clients", "Vehicles", "Drivers", "Inspections", "Maintenance",
  "Collision Reports", "Warning Letters", "IFTA", "Trainings", "Services",
];

export default function UsersPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Users & Permissions</h1>
        <button className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          <Plus className="h-4 w-4" /> Add User
        </button>
      </div>

      <div className="rounded-lg border bg-card overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-secondary/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">User</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Access</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email} className="border-b last:border-0 hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <UserCog className="h-4 w-4 text-muted-foreground" />{u.name}
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                    u.role === "Admin" ? "badge-active" : u.role === "Staff" ? "badge-warning" : "bg-secondary"
                  }`}>{u.role}</span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{u.access}</td>
                <td className="px-4 py-3 text-right">
                  <button className="rounded-md border px-2 py-1 text-xs hover:bg-secondary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="section-title flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> Folder Access Control</h3>
        <p className="text-sm text-muted-foreground mb-4">Select folders to grant access when creating or editing staff/client users.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {folders.map((f) => (
            <label key={f} className="flex items-center gap-2 rounded-md border p-2.5 hover:bg-secondary cursor-pointer transition-colors">
              <input type="checkbox" className="rounded" />
              <FolderOpen className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">{f}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-card p-6">
        <h3 className="section-title">Permission Rules</h3>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2"><span className="badge-active rounded-full border px-2 py-0.5 text-xs font-medium">Admin</span> Can download, upload, view, and delete all files.</p>
          <p className="flex items-center gap-2"><span className="badge-warning rounded-full border px-2 py-0.5 text-xs font-medium">Staff</span> Access limited to assigned folders.</p>
          <p className="flex items-center gap-2"><span className="rounded-full border bg-secondary px-2 py-0.5 text-xs font-medium">Client</span> Can upload and view only. Cannot download or delete.</p>
        </div>
      </div>
    </div>
  );
}
