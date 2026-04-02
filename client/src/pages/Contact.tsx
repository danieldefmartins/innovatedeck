import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import PhoneLink from "@/components/PhoneLink";
import { COMPANY } from "@/lib/constants";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-20" style={{ background: "linear-gradient(135deg, #5C3D2E 0%, #3D2820 50%, #2D5A3D 100%)" }}>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/80">
              Ready to start your deck project? Get in touch for a free estimate.
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold mb-2">Get Your Free Estimate</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you with a detailed quote for your project.
              </p>
              <GHLForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-lg p-8 sticky top-24">
                <h3 className="font-display text-xl font-bold mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Phone</p>
                      <PhoneLink className="text-primary hover:underline font-medium" />
                      <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 7am-6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Email</p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {COMPANY.email}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Service Areas</p>
                      <p className="text-sm text-muted-foreground">
                        Massachusetts, New Hampshire,<br />
                        Rhode Island & Southern Maine
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 7:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Licensed & Insured in MA, NH, RI & ME
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Free estimates for all residential and commercial projects.
                    No obligation, no pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
