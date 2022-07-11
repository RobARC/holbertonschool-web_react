import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];
const listNotifications = [
  { id: 1, type: 'default', value: 'New resume available' },
  { id: 2, type: 'default', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.LogOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {

    const { isLoggedIn } = this.props;

    return (
      <Fragment>
        < Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
        </div>
        <div className="App-body">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some Random Text</p>
          </BodySection>
          <div className="App-footer">
            <Footer />

          </div>
        </div>
      </Fragment>
    );
  }
}
App.defaultProps = {
  isLoggedIn: false,
  LogOut: () => { },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

const cssVars = {
  mainColor: '#e01d3f',
};

const styles = StyleSheet.create({
  app: {
    borderBottom: `3px solid ${cssVars.mainColor}`,
  },

  body: {
    display: 'flex',
    justifyContent: 'center',
  },

  footer: {
    borderTop: `3px solid ${cssVars.mainColor}`,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    buttom: 0,
    fontStyle: 'italic',
  },
})


export default App;
