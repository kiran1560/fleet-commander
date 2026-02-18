import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  UserCog,
  Truck,
  UserCheck,
  Shield,
  Wrench,
  Car,
  GraduationCap,
  DollarSign,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  AlertTriangle,
  BookOpen,
  Link as LinkIcon,
} from "lucide-react";

const navSections = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "APEX Forms", icon: FileText, path: "/apex-forms" },
  {
    label: "Clients",
    icon: Users,
    children: [
      { label: "All Clients", path: "/clients" },
      { label: "Add Client", path: "/clients/new" },
    ],
  },
  { label: "Vehicles", icon: Truck, path: "/vehicles" },
  { label: "Drivers", icon: UserCheck, path: "/drivers" },
  {
    label: "Inspections",
    icon: Shield,
    children: [
      { label: "Passed Inspections", path: "/inspections/passed" },
      { label: "Out of Service", path: "/inspections/oos" },
      { label: "Driver Convictions", path: "/inspections/driver-convictions" },
      { label: "Company Convictions", path: "/inspections/company-convictions" },
    ],
  },
  {
    label: "Maintenance",
    icon: Wrench,
    children: [
      { label: "PM (Quarterly)", path: "/maintenance/pm" },
      { label: "Oil Changes", path: "/maintenance/oil" },
      { label: "Other Repairs", path: "/maintenance/repairs" },
    ],
  },
  { label: "Collision Reports", icon: AlertTriangle, path: "/collisions" },
  { label: "Warning Letters", icon: BookOpen, path: "/warning-letters" },
  { label: "Users & Permissions", icon: UserCog, path: "/users" },
  { label: "IFTA", icon: FolderOpen, path: "/ifta" },
  { label: "Trainings", icon: GraduationCap, path: "/trainings" },
  { label: "Services & Billing", icon: DollarSign, path: "/services" },
  { label: "Integrations", icon: LinkIcon, path: "/integrations" },
];

export function AppSidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (label: string) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <aside
      className={`sidebar-gradient fixed left-0 top-0 z-40 h-screen flex flex-col border-r border-sidebar-border transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <span className="text-lg font-bold text-sidebar-primary tracking-wide">
            APEX TMS
          </span>
        )}
        <button onClick={onToggle} className="p-1.5 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
          {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {navSections.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                onClick={() => toggle(item.label)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors ${
                  collapsed ? "justify-center" : ""
                }`}
              >
                <item.icon className="h-4.5 w-4.5 flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.label}</span>
                    {expanded[item.label] ? (
                      <ChevronDown className="h-3.5 w-3.5 text-sidebar-muted" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 text-sidebar-muted" />
                    )}
                  </>
                )}
              </button>
              {!collapsed && expanded[item.label] && (
                <div className="ml-7 mt-0.5 space-y-0.5 border-l border-sidebar-border pl-3">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) =>
                        `block rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={item.path}
              to={item.path!}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  collapsed ? "justify-center" : ""
                } ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`
              }
            >
              <item.icon className="h-4.5 w-4.5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          )
        )}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="border-t border-sidebar-border p-4">
          <p className="text-xs text-sidebar-muted">© 2026 APEX TMS</p>
        </div>
      )}
    </aside>
  );
}
