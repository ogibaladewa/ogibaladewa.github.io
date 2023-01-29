'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return React.createElement(
          "div",
          { "class": "fixed w-full bg-slate-900/50 top-16 z-50" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement(
              "div",
              { "class": "w-full py-4 text-center text-slate-200 tracking-wider" },
              "Home"
            )
          ),
          React.createElement(
            "a",
            { href: "#portfolio" },
            React.createElement(
              "div",
              { "class": "w-full py-4 text-center text-slate-200 tracking-wider" },
              "Portfolio"
            )
          ),
          React.createElement(
            "a",
            { href: "#about" },
            React.createElement(
              "div",
              { "class": "w-full py-4 text-center text-slate-200 tracking-wider" },
              "About"
            )
          ),
          React.createElement(
            "a",
            { href: "#contact" },
            React.createElement(
              "div",
              { "class": "w-full py-4 text-center text-slate-200 tracking-wider" },
              "Contact"
            )
          )
        );
      }

      return e('button', { onClick: function onClick() {
          return _this2.setState({ liked: true });
        } }, 'Likeeee');
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
var root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));