"use client"

import { useState } from "react"

export function MailingList() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <h2 className="text-2xl leading-snug text-foreground text-balance md:text-3xl">
          Be the first to hear when our first book is ready.
        </h2>

        {submitted ? (
          <p className="mt-8 text-lg text-muted-foreground italic">
            Thank you. We will be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex w-full max-w-sm flex-col gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full border border-foreground/30 bg-transparent px-4 py-3 font-serif text-base text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-foreground px-6 py-3 font-serif text-base text-background transition-opacity duration-200 hover:opacity-90"
            >
              Join
            </button>
          </form>
        )}

        {!submitted && (
          <p className="mt-6 text-sm text-muted-foreground italic">
            No frequency. Only when there is something worth saying.
          </p>
        )}
      </div>
    </section>
  )
}
