import Nav from "@/components/nav"
import Footer from "@/components/sections/footer"
import Hero from "@/components/sections/hero"
import Project from "@/components/sections/project"
import Skill from "@/components/sections/skill"
import { Timeline } from "@/components/ui/timeline"

function Home() {

  return (
    <div>
      <Nav/>
      <Hero/>
      <Timeline data={[{title:"Skills & Tools",content:<Skill/>},{title:"Projects",content:<Project/>}]}/>
      {/* <Skill/> */}
      
      <Footer/>
    </div>
  )
  
}

export default Home