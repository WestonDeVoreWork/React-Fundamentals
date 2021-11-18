import { Row } from 'reactstrap';

import {
    Route,
    Link,
    Routes
  } from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/functionalcomponent/FunctionalComponentDemo';
import JSXRules from '../concepts/functionalcomponent/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects'
import PropsDemo from '../concepts/PropsDemo';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list list-unstyled'>
                <ul claaName='sidebar-list list-unstyled'>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Function Component</Link></li>
                    <li><Link to='/jsxrules'>JSX Rules</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to='propsdemo'>Props Demo</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                </ul>
                
            </div>
            <div className='sidebar-route'>
                {/* ROUTES */}
                <Routes>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path ='/resources'><Resources /></Route>
                    <Route exact path ='/'><Home /></Route>
                    <Route exact path='/functionalcomponent'><FunctionalComponentDemo /></Route>
                    <Route exact path='/jsxrules'><JSXRules /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo /></Route>
                    <Route exact path="/timer"><TimePiecesApp /></Route>
                </Routes>

                

            </div>
        </div>
    );
};

export default Sidebar;