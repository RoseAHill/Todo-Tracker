import './App.css';

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
    </div>
  );
}

export default App;
