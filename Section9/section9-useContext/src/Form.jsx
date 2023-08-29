import { useContext } from "react"
import { nameAgeContext } from './MyContext';

const Form = () => {

    const user = useContext(nameAgeContext)
    
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};

export default Form;