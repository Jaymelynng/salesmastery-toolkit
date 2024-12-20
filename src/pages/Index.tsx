import { BookOpen, FileText, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/DashboardCard";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Sales Toolkit</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to succeed in your sales journey
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Sales Scripts"
          description="Proven scripts for common sales scenarios"
          icon={<MessageSquare className="w-6 h-6 text-primary" />}
        />
        <DashboardCard
          title="Email Templates"
          description="Ready-to-use templates for every situation"
          icon={<Mail className="w-6 h-6 text-primary" />}
        />
        <DashboardCard
          title="FAQs"
          description="Quick answers to common questions"
          icon={<HelpCircle className="w-6 h-6 text-primary" />}
        />
        <DashboardCard
          title="Sales Tips"
          description="Best practices and winning strategies"
          icon={<BookOpen className="w-6 h-6 text-primary" />}
        />
        <DashboardCard
          title="Notepad"
          description="Keep track of your sales notes"
          icon={<FileText className="w-6 h-6 text-primary" />}
        />
      </div>
    </DashboardLayout>
  );
};

export default Index;