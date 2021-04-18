import React from 'react'
import Launches from './components/Launches'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LaunchDetail from './components/LaunchDetail'

const App = () => {
    return (
        <div className="bg-dark">
            <Navbar />
            <div className="container my-3">
                <Router >
                    <Switch>
                        <Route exact path="/" component={Launches} />
                        <Route exact path="/launch/:id" component={LaunchDetail} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App
