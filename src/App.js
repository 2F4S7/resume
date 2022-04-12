import Wrapper from './components/Wrapper';
import Sidebar from './components/SideBar';
import AboutMe from './components/AboutMe';
import contacts from './data/contacts.json';
import techSkills from './data/techSkills.json';
import softSkills from './data/softSkills.json';
import languagesContainer from './data/languagesContainer.json';
import commandProjects from './data/commandProjects.json';
import ownProjects from './data/ownProjects.json';
import experience from './data/experience.json';
import education from './data/education.json';

function App() {
  return (
    <Wrapper>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        languagesContainer={languagesContainer}
      />
      <AboutMe
        commandProjects={commandProjects}
        ownProjects={ownProjects}
        experience={experience}
        education={education}
      />
    </Wrapper>
  );
}

export default App;
