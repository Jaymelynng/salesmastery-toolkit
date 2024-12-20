import { DashboardLayout } from "@/components/DashboardLayout";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const locations = [
  "Location 1",
  "Location 2",
  "Location 3",
  "Location 4",
  "Location 5",
  "Location 6",
  "Location 7",
  "Location 8",
  "Location 9",
  "Location 10",
];

const scripts = [
  {
    situation: "Initial Contact",
    content: "Hi, thank you for your interest in our gymnastics programs...",
  },
  {
    situation: "Price Objection",
    content: "I understand that cost is an important factor in your decision...",
  },
  {
    situation: "Schedule Concerns",
    content: "We offer flexible class times throughout the week...",
  },
];

const tips = [
  {
    title: "Building Trust",
    content: "Focus on understanding the family's needs before discussing programs.",
  },
  {
    title: "Active Listening",
    content: "Pay attention to parents' concerns and address them specifically.",
  },
  {
    title: "Follow Up",
    content: "Always follow up within 24 hours of initial contact.",
  },
];

const faqs = [
  {
    question: "What age can children start gymnastics?",
    answer: "Children can start as early as 18 months with parent-tot classes.",
  },
  {
    question: "What are the benefits of gymnastics?",
    answer: "Gymnastics develops strength, flexibility, coordination, and confidence.",
  },
  {
    question: "How often should a child attend classes?",
    answer: "We recommend at least once per week for recreational students.",
  },
];

export default function Notepad() {
  const [notes, setNotes] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Sales Toolkit</h1>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="scripts" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="scripts">Scripts</TabsTrigger>
            <TabsTrigger value="tips">Tips</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="scripts">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Sales Scripts</h2>
              <Accordion type="single" collapsible className="w-full">
                {scripts.map((script, index) => (
                  <AccordionItem key={index} value={`script-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      {script.situation}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {script.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </TabsContent>

          <TabsContent value="tips">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Sales Tips</h2>
              <div className="grid gap-4">
                {tips.map((tip, index) => (
                  <Card key={index} className="p-4 bg-secondary/10">
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.content}</p>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="faqs">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </TabsContent>

          <TabsContent value="notes">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Notes</h2>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Type your notes here..."
                className="min-h-[300px] resize-none"
              />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}