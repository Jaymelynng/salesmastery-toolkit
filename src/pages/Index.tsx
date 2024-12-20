import { BookOpen, FileText, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/DashboardCard";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Sales Toolkit
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to succeed in your sales journey, beautifully organized and easily accessible
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/scripts">
          <DashboardCard
            title="Sales Scripts"
            description="Access proven scripts for handling different sales scenarios and objections"
            icon={<MessageSquare className="w-6 h-6 text-primary" />}
            className="bg-gradient-to-br from-white to-secondary/10 border-secondary/20"
          />
        </Link>
        <Link to="/email-templates">
          <DashboardCard
            title="Email Templates"
            description="Professional email templates for every situation"
            icon={<Mail className="w-6 h-6 text-primary" />}
            className="bg-gradient-to-br from-white to-secondary/10 border-secondary/20"
          />
        </Link>
        <Link to="/faqs">
          <DashboardCard
            title="FAQs"
            description="Quick answers to common questions about gymnastics programs"
            icon={<HelpCircle className="w-6 h-6 text-primary" />}
            className="bg-gradient-to-br from-white to-secondary/10 border-secondary/20"
          />
        </Link>
        <Link to="/tips">
          <DashboardCard
            title="Sales Tips"
            description="Best practices and strategies for closing deals"
            icon={<BookOpen className="w-6 h-6 text-primary" />}
            className="bg-gradient-to-br from-white to-secondary/10 border-secondary/20"
          />
        </Link>
        <Link to="/notepad">
          <DashboardCard
            title="Notepad"
            description="Keep track of important information and thoughts"
            icon={<FileText className="w-6 h-6 text-primary" />}
            className="bg-gradient-to-br from-white to-secondary/10 border-secondary/20"
          />
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default Index;