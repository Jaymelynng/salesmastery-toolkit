import { DashboardLayout } from "@/components/DashboardLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const scriptCategories = [
  {
    title: "Initial Contact",
    scripts: [
      { title: "Warm Introduction", content: "Hi [Name], I noticed you've shown interest in gymnastics programs for [child's name]..." },
      { title: "Cold Call", content: "Hello, this is [Your Name] from [Gym Name]. We're currently enrolling new students..." },
    ]
  },
  {
    title: "Objection Handling",
    scripts: [
      { title: "Price Concerns", content: "I understand that cost is an important factor..." },
      { title: "Schedule Conflicts", content: "We offer flexible class times..." },
    ]
  },
  {
    title: "Closing",
    scripts: [
      { title: "Trial Class Offer", content: "Would you like to schedule a free trial class?" },
      { title: "Enrollment Process", content: "Let me walk you through our simple enrollment process..." },
    ]
  }
];

export default function Scripts() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Sales Scripts</h1>
        <p className="text-lg text-muted-foreground">
          Ready-to-use scripts for every sales situation
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {scriptCategories.map((category, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border p-4">
            <AccordionTrigger className="text-xl font-semibold">{category.title}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 mt-4">
                {category.scripts.map((script, scriptIndex) => (
                  <div key={scriptIndex} className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{script.title}</h3>
                    <p className="text-muted-foreground">{script.content}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </DashboardLayout>
  );
}