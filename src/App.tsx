import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import WithError from './components/hoc/WithError';
import InputField from './components/InputField'
function App(props: any) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if(count === 5) {
      props.setAlert(true)
    } 
  }, [count])
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <InputField handleChange={(e) => { console.log(e.currentTarget)}} type='text' placeholder='enter some text' />
          <InputField handleChange={(e) => { console.log(e.currentTarget.value)}} type="password" placeholder='enter password' />
        </form>
        <Counter >
          {() => ( <div>
            <code>{count}</code>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>)}
        </Counter>
      </header>
    </div>
  );
}

export default WithError({component: App});
