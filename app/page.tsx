export default function Page() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-[#e0f2fe]">
        <div className="flex h-full w-[1200px] items-center justify-center bg-[#0f172a]">
          <p
            className="mx-8 text-center text-3xl text-[#e0f2fe] md:mx-12 md:text-4xl lg:mx-16 lg:text-5xl"
            style={{ fontFamily: "var(--font-fantasy)" }}
          >
            Cada error te enseña, cada línea escrita te acerca a convertirte en programador. Sigue
            practicando, mantén la curiosidad, y recuerda que el esfuerzo constante transforma dudas en
            habilidades reales. Tu futuro en tecnología empieza hoy.
          </p>
        </div>
      </div>
      <section className="h-[450px] w-screen bg-[#2563eb]" />
      <section className="h-[450px] w-screen bg-[#1d4ed8]" />
    </>
  )
}
