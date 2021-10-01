import './App.css';

// Amplify imports
import Amplify from '@aws-amplify/core'
import awsExports from './aws-exports'
Amplify.configure(awsExports)

function App() {
  return (
    <div className="App">
      <h1>Task Tracker</h1>
    </div>
  );
}

export default App;
