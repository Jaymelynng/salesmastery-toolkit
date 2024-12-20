import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function DashboardCard({ title, description, icon, className }: DashboardCardProps) {
  return (
    <Card className={cn("p-6 card-hover", className)}>
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}