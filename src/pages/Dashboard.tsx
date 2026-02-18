import { Truck, Users, UserCheck, AlertTriangle, Wrench, Clock, FileText, Shield } from "lucide-react";

const stats = [
  { label: "Active Clients", value: "24", icon: Users, color: "text-chart-1" },
  { label: "Active Vehicles", value: "187", icon: Truck, color: "text-chart-2" },
  { label: "Active Drivers", value: "156", icon: UserCheck, color: "text-chart-3" },
  { label: "OOS Vehicles", value: "3", icon: AlertTriangle, color: "text-chart-4" },
  { label: "Pending PMs", value: "12", icon: Wrench, color: "text-chart-2" },
  { label: "Expiring CVIPs", value: "8", icon: Clock, color: "text-chart-4" },
];

const recentActivity = [
  { text: "Vehicle Unit #45 marked Out of Service", time: "2 hours ago", type: "alert" },
  { text: "Driver John Smith abstract uploaded", time: "3 hours ago", type: "info" },
  { text: "Q4 PM completed for Unit #112", time: "5 hours ago", type: "success" },
  { text: "Warning letter sent to Driver #089", time: "1 day ago", type: "warning" },
  { text: "New client 'Northern Transport' added", time: "1 day ago", type: "info" },
  { text: "CVIP renewal for Unit #78 due in 5 days", time: "1 day ago", type: "alert" },
];

const upcomingReminders = [
  { text: "PM due - Unit #34", date: "Feb 22, 2026" },
  { text: "Oil change - Unit #67", date: "Feb 24, 2026" },
  { text: "CVIP expiry - Unit #12", date: "Feb 28, 2026" },
  { text: "Driver license renewal - D. Brown", date: "Mar 1, 2026" },
  { text: "IFTA Q4 filing deadline", date: "Mar 5, 2026" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <span className="text-sm text-muted-foreground">Welcome back, Admin</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-lg border bg-card p-5">
          <h2 className="section-title flex items-center gap-2">
            <FileText className="h-4 w-4 text-accent" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-md px-3 py-2.5 hover:bg-secondary transition-colors">
                <div
                  className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${
                    item.type === "alert" ? "bg-destructive" :
                    item.type === "success" ? "bg-success" :
                    item.type === "warning" ? "bg-warning" :
                    "bg-chart-1"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{item.text}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Reminders */}
        <div className="rounded-lg border bg-card p-5">
          <h2 className="section-title flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            Upcoming Reminders
          </h2>
          <div className="space-y-3">
            {upcomingReminders.map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-md px-3 py-2.5 hover:bg-secondary transition-colors">
                <span className="text-sm">{item.text}</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 rounded-lg border bg-card p-5">
        <h2 className="section-title flex items-center gap-2">
          <Shield className="h-4 w-4 text-accent" />
          Compliance Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Vehicles with valid CVIP", value: "92%", status: "good" },
            { label: "Drivers with valid abstract", value: "88%", status: "warning" },
            { label: "PM compliance rate", value: "95%", status: "good" },
            { label: "OOS resolution rate", value: "67%", status: "alert" },
          ].map((item) => (
            <div key={item.label} className="rounded-md bg-secondary p-4">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className={`text-xl font-bold ${
                item.status === "good" ? "text-success" :
                item.status === "warning" ? "text-warning" :
                "text-destructive"
              }`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
