import './App.css';
import {useMediaQuery} from 'react-responsive';
import Home from "./Home";
import MobilePage from "./Mobile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 992})
    return isDesktop ? children : null
}
const Tablet = ({children}) => {
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 991})
    return isTablet ? children : null
}
const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767})
    return isMobile ? children : null
}
function App() {
    return (
        <div>
            <Desktop>
               <Home/>
            </Desktop>
            <Mobile>
                <MobilePage/>
            </Mobile>
        </div>
    );
}

export default App;
