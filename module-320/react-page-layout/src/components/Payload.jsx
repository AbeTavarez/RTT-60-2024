import {createPortal} from 'react-dom';


 function Payload() {
    return createPortal(<h1>I&apos;m a Portal</h1>, document.getElementById("target"))
}

export default Payload