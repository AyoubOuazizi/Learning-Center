import About from '@/components/About'
import LoanForm from '@/components/LoanForm'
import Database from '@/components/database'
import LearningCenter from '@/components/learningCenter'
import Nouveautes from '@/components/nouveautes'
import Nouveautes2 from '@/components/nouveautes2'
import SearchSection from '@/components/searchSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SearchSection/>
      <About/>
      {/* <LearningCenter/> */}
      <Nouveautes/>
      <LoanForm/>
      <Nouveautes2/>
      {/* <Database/> */}
    </main>
  )
}
