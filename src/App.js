import './App.css';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import List from './components/2-9.List/List';
import Condition from './components/2-8.ConditionalRendering/Condition';
import Event from './components/2-7.Event/Event';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
// import ClassComponent from './components/2-5.State/ClassComponent';
// import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
// import Extraction from './components/Extraction/Extraction';
// import Composition from './components/2-4.Props/Composition';

function App() {
  return (
    <div className="App">
      <UncontrolledComponent />
      <ControlledComponent />
      <List />
      <Condition />
      <Event />
      <FunctionalComponent />
      {/* <ClassComponent /> */}
      {/* <ClassComponent2 /> */}
      {/* <Extraction /> */}
      {/* <Composition /> */}
    </div>
  );
}

export default App;
