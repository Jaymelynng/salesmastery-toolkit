import { DashboardLayout } from "@/components/DashboardLayout";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Notepad() {
  const [notes, setNotes] = useState("");

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Sales Notes</h1>
        <p className="text-lg text-muted-foreground">
          Keep track of important information and thoughts
        </p>
      </div>

      <div className="bg-card rounded-lg p-6 shadow-sm">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Type your notes here..."
          className="min-h-[400px] resize-none"
        />
      </div>
    </DashboardLayout>
  );
}