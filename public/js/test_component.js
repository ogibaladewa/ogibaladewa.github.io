'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (
        <div class="fixed w-full bg-slate-900/50 top-16 z-50">
          <a href="#"><div class="w-full py-4 text-center text-slate-200 tracking-wider">Home</div></a>
          <a href="#portfolio"><div class="w-full py-4 text-center text-slate-200 tracking-wider">Portfolio</div></a>
          <a href="#about"><div class="w-full py-4 text-center text-slate-200 tracking-wider">About</div></a>
          <a href="#contact"><div class="w-full py-4 text-center text-slate-200 tracking-wider">Contact</div></a>
        </div>
        );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Likeeee'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));