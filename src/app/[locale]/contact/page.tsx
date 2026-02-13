import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { getContact } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const contact = await getContact(locale);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title={locale === "fr" ? "Contact" : "Contact"}
        description={
          locale === "fr"
            ? "Discutons de vos besoins data."
            : "Let’s discuss your data needs."
        }
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="space-y-4">
            <p className="text-sm text-foreground/70">
              {locale === "fr"
                ? "Réponse rapide par email."
                : "Fast response by email."}
            </p>
            <Button asChild>
              <Link href={`mailto:${contact.email}`}>
                <Mail className="h-4 w-4" />
                {contact.email}
              </Link>
            </Button>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="ghost">
                <Link href={contact.linkedin}>
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={contact.github}>
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4">
            <p className="text-sm text-foreground/70">
              {locale === "fr"
                ? "Télécharger le CV en PDF."
                : "Download the CV in PDF."}
            </p>
            <Button asChild>
              <Link href={contact.cv}>
                <Download className="h-4 w-4" />
                {locale === "fr" ? "Telecharger CV" : "Download CV"}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
