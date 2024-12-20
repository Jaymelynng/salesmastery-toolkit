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
    <Card 
      className={cn(
        "p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group", 
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-primary group-hover:text-primary/80 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}