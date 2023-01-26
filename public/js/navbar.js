'use strict';

const e = React.createElement;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNavbar: false };
  }

  render() {
    if (this.state.showNavbar) {
        const hiddenNavbarClass = "fixed w-full bg-slate-900/50 top-16 z-50";
        const hidden_navbar = document.getElementById("hidden_navbar");
        hidden_navbar.className = hiddenNavbarClass;

        showNavbar = true;
    }

    return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
  }
}

const domContainer = document.querySelector('#nav_toggle');
const root = ReactDOM.createRoot(domContainer);


root.render(e(Navbar));