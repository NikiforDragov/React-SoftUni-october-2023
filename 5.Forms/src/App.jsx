import UncontrolledForm from './components/UncontrolledForm';
import ControlledFormRaw from './components/ControlledFormRaw';
import ControlledForm from './components/ControlledForm';
import './App.css';
import { useRef } from 'react';

function App() {
    const resetButtonRef = useRef();

    return (
        <div>
            <ControlledForm buttonRef={resetButtonRef}/>

            <button
                type='submit'
                ref={resetButtonRef}
            >
                Reset
            </button>
        </div>
    );
}

export default App;
