import Nav from "@/components/nav"
import Hero from "@/components/sections/hero"
import Skill from "@/components/sections/skill"
import { Timeline } from "@/components/ui/timeline"

function Home() {

  return (
    <div>
      <Nav/>
      <Hero/>
      <Timeline data={[{title:"Skills",content:<Skill/>}]}/>
      {/* <Skill/> */}
    </div>
  )
  
}

export default Home