import { DashboardLayout } from "@/components/DashboardLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age can children start gymnastics?",
    answer: "Children can start gymnastics as early as 18 months old with parent-tot classes. Our structured classes begin at age 3."
  },
  {
    question: "What are the benefits of gymnastics?",
    answer: "Gymnastics develops strength, flexibility, coordination, discipline, and confidence. It's also great for cognitive development and social skills."
  },
  {
    question: "How often should a child attend classes?",
    answer: "We recommend at least once per week for recreational students. Competitive team members typically train 2-4 times per week."
  },
  {
    question: "What should children wear to class?",
    answer: "Comfortable, form-fitting athletic wear like leotards or shorts and t-shirts. No loose clothing or jewelry."
  }
];

export default function FAQs() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">
          Quick answers to common questions about our gymnastics programs
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </DashboardLayout>
  );
}