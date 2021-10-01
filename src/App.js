import './App.css';
import FormHeader from './components/Form/FormHeader'
import List from './components/Display/List'

// Amplify imports
import Amplify from '@aws-amplify/core'
import awsExports from './aws-exports'
Amplify.configure(awsExports)

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Task Tracker</h1>
      </header>
      <FormHeader />
      <List />
    </div>
  );
}

export default App;
