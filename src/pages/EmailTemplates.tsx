import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Mail, Star, Clock, UserPlus } from "lucide-react";

const templates = [
  {
    icon: <UserPlus className="w-6 h-6 text-primary" />,
    title: "Welcome Email",
    description: "Initial welcome message for new inquiries",
    template: "Dear [Name],\n\nThank you for your interest in our gymnastics programs..."
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Trial Class Follow-up",
    description: "Follow up after a trial class",
    template: "Hi [Name],\n\nWe hope [Child's Name] enjoyed their trial class..."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Schedule Change",
    description: "Notify about class schedule changes",
    template: "Dear [Parent Name],\n\nWe're reaching out regarding upcoming schedule changes..."
  },
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Special Promotion",
    description: "Promotional offer announcement",
    template: "Hello [Name],\n\nWe're excited to share a special offer..."
  }
];

export default function EmailTemplates() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Email Templates</h1>
        <p className="text-lg text-muted-foreground">
          Ready-to-use email templates for common situations
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {templates.map((template, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                {template.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{template.title}</h3>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </div>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm">{template.template}</pre>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}