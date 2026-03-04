import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { MailingList } from "@/components/mailing-list"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <MailingList />
      <Footer />
    </main>
  )
}
