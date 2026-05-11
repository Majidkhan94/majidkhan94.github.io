import '../index.css';
import { HeroSection } from '../Sections/HeroSection.jsx';
import { AboutusSection } from '../Sections/AboutusSection.jsx';
import { AboutusApis } from '../Apis/AboutusApis.js';
import { TechnicalexpertiseSection } from '../Sections/TechnicalexpertiseSection.jsx';
import { ProjectSection } from '../Sections/ProjectSection.jsx';
import { ProjectApi } from '../Apis/ProjectApi.js';
import { ContactusSection } from '../Sections/ContactusSection.jsx';
import { Seperator } from "../Features/Seperator.jsx";

export const Home = ()=>{
  return(<>
  
{/* Hero_Section */}
<HeroSection />

{/* About_Section */}
<Seperator Lefttext={"AboutUs"} Righttext={"View More"} to={"/Aboutus"} />
<AboutusSection AboutusData={AboutusApis.slice(0, 2)} />

{/* Technical Expertise Section */}
<Seperator Lefttext={"Technical Expertise"} Righttext={"View More"} to={"/Technicalexpertise"} />
<TechnicalexpertiseSection />

{/* Project Section */}
<Seperator Lefttext={"Projects"} Righttext={"View More"} to={"/Projects"} />
<ProjectSection ProjectsData={[...ProjectApi].slice(0,6).sort((a, b)=> b.ProjectId - a.ProjectId)}/>

{/* ContactUs Section */}
<Seperator Lefttext={"Contactus"} Righttext={"View More"} to={"/Contactus"} />
<ContactusSection />

  </>)}