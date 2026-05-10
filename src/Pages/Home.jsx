import '../index.css';
import { HeroSection } from '../Sections/HeroSection.jsx';
import { Aboutus } from '../Sections/Aboutus.jsx';
import { AboutusApis } from '../Apis/AboutusApis.js';
import { Technicalexpertise } from '../Sections/Technicalexpertise.jsx';
import { Projects } from '../Sections/Projects.jsx';
import { ProjectApi } from '../Apis/ProjectApi.js';
import { Contactus } from '../Sections/Contactus.jsx';

export const Home = ()=>{
  return(<>
  
{/* Hero_Section */}
<HeroSection />

{/* About_Section */}

<Aboutus AboutusData={AboutusApis.slice(0, 2)} />

{/* Technical Expertise Section */}

<Technicalexpertise />

{/* Project Section */}

<Projects ProjectsData={ProjectApi.slice(0,6)}/>

{/* ContactUs Section */}

<Contactus />

  </>)}