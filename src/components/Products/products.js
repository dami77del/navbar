import {useState} from 'react';

const products = () => {
    const [counter, setCounter] = useState(0);

    const changeCounter =(value) => {
        setCounter (counter +value);
    }
    return (
    <>
    <div className="container">
        <button onClick={() => changeCounter(counter + 1)}>Sumar</button>
        Counter:{counter} 
        

    </div>
    </>
    )
    }
    
export default products;
