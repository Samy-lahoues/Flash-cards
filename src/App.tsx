import { useState } from 'react'
import Message from './components/Message'
import Number from './components/Number'
import Button from './components/Button'
import BurgerMenu from './components/BurgerMenu'
const App = () => {
    const [changeStep, setChangeStep] = useState(0)
    // don't use a single distracturing element and use it to update the value because that is a bad practice
    const [isOpen, setIsOpen] = useState(true)
    // const [display, setDisplay] = useState('block') an other way to apear and disapeare an element
    const prevStep = () => {
        setChangeStep((prevStep) => (prevStep === 0 ? 2 : prevStep - 1 ))
    }
    const nextStep = () => {
        setChangeStep((prevStep) => (prevStep === 2 ? 0 : prevStep + 1))
    }
    return (
        <>
            <button className={`close menu ${isOpen && 'active'}`} onClick={ () => setIsOpen(prev => !prev)}> {/*use a callback function to get the current value of the state */}
                <BurgerMenu />
            </button>
            {isOpen && (<div className='steps' > {/*using style attribute style={{display : display}}*/}
                <div className="numbers">
                    <Number className={changeStep >= 0 ? 'active' : ''} value={1}/>
                    <Number className={changeStep >= 1 ? 'active' : ''} value={2}/>
                    <Number className={changeStep >= 2 ? 'active' : ''} value={3}/>
                </div>
                <Message step={changeStep} />
                <div className="buttons">
                    <Button 
                    text='Previous'
                    onClick={prevStep}
                    />
                    <Button 
                    text='Next'
                    onClick={nextStep} />
                </div>
            </div>)
            }
        </>
    )
}

export default App;