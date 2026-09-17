import { ShaderBackground } from "@/components/ui/waves-shader"

export default function Page() {
  return (
    <>
      <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0f172a]">
        <ShaderBackground className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 flex h-full w-full max-w-[1200px] items-center justify-center bg-[#0f172a]/0">
          <p
            className="mx-8 text-center text-2xl text-[#e0f2fe] md:mx-12 md:text-3xl lg:mx-16 lg:text-4xl"
            style={{ fontFamily: "var(--font-fantasy)" }}
          >
            ¿Por qué el programador no se pierde? Porque siempre sigue la ruta del código.
          </p>
        </div>
      </section>
      <section className="h-[450px] w-screen bg-[#2563eb]" />
      <section className="h-[450px] w-screen bg-[#1d4ed8]" />
    </>
  )
}
