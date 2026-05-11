import { ProjectSection } from "../Sections/ProjectSection.jsx"
import { Seperator } from "../Features/Seperator.jsx"
import { ProjectApi } from "../Apis/ProjectApi.js"

export const Projects = () =>{return(<>

<Seperator Lefttext={"Projects"} />
<ProjectSection ProjectsData={[...ProjectApi].sort((a, b) => b.ProjectId - a.ProjectId)} />


</>)}