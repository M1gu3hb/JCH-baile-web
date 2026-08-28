export function VenueSchematic({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`venue-schematic ${compact ? "is-compact" : ""}`} aria-label="Esquema visual del Salón de los Espejos">
      <div className="venue-schematic__stage">Escenario</div>
      <div className="venue-schematic__floor">
        <span>Pista</span>
        <i /><i /><i />
      </div>
      <div className="venue-schematic__legend">
        <span>Espacio cubierto</span>
        <span>Audio</span>
        <span>Iluminación</span>
      </div>
    </div>
  );
}
