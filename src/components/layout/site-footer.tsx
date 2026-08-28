import { ArrowUpRight, Globe2, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navigation, site, whatsappHref } from "@/lib/site-data";

export function SiteFooter() {
  const contactHref = whatsappHref("Hola, quiero información sobre las clases de baile en Jardines Club Hípico.");

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <span className="eyebrow">Tu siguiente paso</span>
          <h2>
            La pista ya está.
            <em> Faltas tú.</em>
          </h2>
        </div>
        <a href={contactHref} target="_blank" rel="noreferrer" className="footer-cta">
          Hablar por WhatsApp <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="site-footer__grid">
        <div className="footer-brand">
          <Image src="/images/jch-logo.png" alt="" width={683} height={671} />
          <div>
            <strong>JCH Baile</strong>
            <span>Jardines Club Hípico</span>
          </div>
        </div>

        <nav aria-label="Navegación del pie">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={site.mapUrl} target="_blank" rel="noreferrer">
            <MapPin size={16} aria-hidden="true" /> {site.addressShort}
          </a>
          <a href={contactHref} target="_blank" rel="noreferrer">
            <MessageCircle size={16} aria-hidden="true" /> {site.phone}
          </a>
          <a href={site.parentSite} target="_blank" rel="noreferrer">
            <Globe2 size={16} aria-hidden="true" /> Sitio de Jardines Club Hípico
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Jardines Club Hípico</span>
        <span>Clases de baile en Xochimilco</span>
      </div>
    </footer>
  );
}
