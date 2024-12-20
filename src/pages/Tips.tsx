import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Users, Clock } from "lucide-react";

const tips = [
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Build Trust First",
    description: "Focus on understanding the family's needs before discussing programs."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Highlight Benefits",
    description: "Emphasize skill development, confidence building, and physical fitness."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Community Focus",
    description: "Stress the social aspects and friendships formed in gymnastics classes."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Timing is Key",
    description: "Follow up within 24 hours of initial contact for best results."
  }
];

export default function Tips() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Sales Tips</h1>
        <p className="text-lg text-muted-foreground">
          Best practices and strategies for successful sales
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {tips.map((tip, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                {tip.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}