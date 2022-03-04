import React from 'react';

const App = () => {
    return <>
        <h1>Hello There</h1>
        <div>Time right now: {new Date().toTimeString()}</div>
    </>
}
export default App;