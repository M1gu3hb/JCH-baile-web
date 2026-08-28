"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, whatsappHref } from "@/lib/site-data";

const contactHref = whatsappHref("Hola, me interesan las clases de baile en Jardines Club Hípico. ¿Me comparten información?");

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setCompact(latest > 56));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="brand-lockup" aria-label="JCH Baile, ir al inicio">
          <Image src="/images/jch-logo.png" width={683} height={671} alt="" priority className="brand-lockup__logo" />
          <span className="brand-lockup__text">
            <b>JCH</b>
            <span>Baile</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.slice(1, 6).map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={contactHref} target="_blank" rel="noreferrer" className="header-cta">
            Quiero bailar <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="menu-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 0 0 28px 28px)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)" }}
            transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Navegación móvil">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "is-active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p>Salón de los Espejos · Xochimilco, CDMX</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
