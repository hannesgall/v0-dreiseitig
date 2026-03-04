export function Hero() {
  return (
    <section className="px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28 lg:px-16 lg:pt-48 lg:pb-36">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <h1 className="text-sm font-semibold tracking-[0.3em] text-foreground uppercase">
          Dreiseitig Press
        </h1>
        <div className="flex flex-col gap-8">
          <p className="max-w-[58ch] text-xl leading-relaxed text-foreground/90 md:text-2xl md:leading-[1.7]">
            Each language carries a way of seeing the world that no other
            one can replicate: a particular music, a particular light. Some
            languages are leaving, and so this press exists to give them
            their proper literary form: original works, from writers who
            grew up inside them, translated into English on the facing
            page, recorded so the sound of them travels further than the
            page.
          </p>
          <p className="max-w-[58ch] text-xl leading-relaxed text-foreground/90 md:text-2xl md:leading-[1.7]">
            Every book is made with the same care given to any great piece
            of literature, because that is exactly what these are.
            Beautiful to hold, serious in intent, and built to last.
          </p>
        </div>
        <div className="mt-4 border-l border-border pl-6">
          <p className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground italic md:text-xl">
            Dreiseitig — three-sided in German — stands for the three
            elements every book carries: the original language, the
            English translation, and the spoken word.
          </p>
        </div>
      </div>
    </section>
  )
}
