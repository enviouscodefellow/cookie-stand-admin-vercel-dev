export default function Footer({stands}) {
  return (
    <footer className="p-4 mt-8 bg-emerald-500 text-center text-emerald-50">
      {/* <Link href="/careers">Careers</Link> */}
      <p>{stands.length} Locations World Wide</p>
    </footer>
  );
}
