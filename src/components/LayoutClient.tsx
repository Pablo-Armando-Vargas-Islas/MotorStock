export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen bg-background">
      <div className="px-3">
        {children}
      </div>
    </main>
  );
}
