import React from 'react';
import {connect} from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import {handleInitialData} from '../actions/shared'

class App extends React.Component{
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <span className="navbar-brand mx-auto">Redux React Binding Store Tutorial</span>
        </nav>
        <section className="container mt-5 py-5">
          <div className="row">
            {this.props.loading 
              ? (<div className="text-center col-12"><div className="spinner-grow" role="status"></div></div>) : (
              <React.Fragment>
                <ConnectedTodos />
                <ConnectedGoals />
              </React.Fragment>
            )}
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const ConnectedApp = connect((state) => ({
  loading: state.loading
}))(App)

export default ConnectedApp;
