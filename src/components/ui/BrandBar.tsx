export function BrandBar({ thick = false }: { thick?: boolean }) {
  return <div className={`brand-bar${thick ? " thick" : ""}`} />;
}
