"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export function MailingList() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = email.trim()
    if (!value) return

    setError(null)
    setLoading(true)

    const { error: insertError } = await supabase.from("mailing_list").insert({
      email: value,
    })

    setLoading(false)

    if (insertError) {
      if (process.env.NODE_ENV === "development") {
        console.error("[Supabase mailing_list insert]", insertError)
      }
      if (insertError.code === "23505") {
        setError("This email is already on the list.")
      } else {
        setError(insertError.message || "Something went wrong. Please try again.")
      }
      return
    }

    setSubmitted(true)
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
              disabled={loading}
              className="w-full border border-foreground/30 bg-transparent px-4 py-3 font-serif text-base text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-foreground focus:outline-none disabled:opacity-60"
            />
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-foreground px-6 py-3 font-serif text-base text-background transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Joining…" : "Join"}
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
