import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Bell, Search, User } from "lucide-react";
import { TodoPopup } from "./TodoPopup";

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      <div className={`transition-all duration-300 ${collapsed ? "ml-16" : "ml-64"}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search clients, vehicles, drivers..."
                className="h-9 w-80 rounded-md border bg-secondary pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTodo(true)}
              className="relative rounded-md p-2 text-muted-foreground hover:bg-secondary transition-colors"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
            </button>
            <div className="flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {showTodo && <TodoPopup onClose={() => setShowTodo(false)} />}
    </div>
  );
}
