import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <span>404</span>
      <h1>Te saliste del paso.</h1>
      <p>Esta página no existe, pero la pista sigue exactamente donde la dejaste.</p>
      <Link href="/" className="button button--acid">Volver al inicio</Link>
    </section>
  );
}
