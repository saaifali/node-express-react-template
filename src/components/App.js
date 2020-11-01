import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';




class App extends React.Component {
  
  static propTypes = {
      initialData: PropTypes.object.isRequired,
  }

  state = this.props.initialData;

  componentDidMount() {

  }

  componentWillUnmount() {
      // clean timers, listeners
  }

  pageHeader() {
      return 'The Circle Project';
  }


  currentContent() {
      return 'Content';
  }

  render() {
      return (
          <div className="App">
              <Header message={this.pageHeader()} />
              {this.currentContent()}
          </div>
      );
  }
}

export default App;
