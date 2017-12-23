var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Get(url) {
  var HttpReq = new XMLHttpRequest(); // a new request
  HttpReq.open("GET", url, false);
  HttpReq.send(null);
  return HttpReq.responseText;
}

var countries = JSON.parse(Get('https://restcountries.eu/rest/v2/all?fields=name'));
console.log(countries);

countries.map(function (element, index) {
  countries[index] = element.name;
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(InputBox, null);
    }
  }]);

  return App;
}(React.Component);

var InputBox = function (_React$Component2) {
  _inherits(InputBox, _React$Component2);

  function InputBox() {
    _classCallCheck(this, InputBox);

    var _this2 = _possibleConstructorReturn(this, (InputBox.__proto__ || Object.getPrototypeOf(InputBox)).call(this));

    _this2.handleChange = function (event) {
      var matches = [];
      if (event.target.value) {
        for (var i = 0; i < _this2.state.data.length; i++) {
          if (_this2.state.data[i].toLowerCase().startsWith(event.target.value.toLowerCase())) {
            matches.push(_this2.state.data[i]);
          }
        }
      }
      _this2.setState({ userInput: event.target.value, matches: matches });
      //console.log(this.state)
    };

    _this2.state = {
      data: '',
      matches: [],
      userInput: '',
      rowHighLighted: -1
    };
    return _this2;
  }

  _createClass(InputBox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.state.data = countries;
    }
  }, {
    key: 'selectAutoComplete',
    value: function selectAutoComplete(i) {
      this.setState({
        userInput: this.state.matches[i],
        matches: []
      });
    }
  }, {
    key: 'setRowHighlighted',
    value: function setRowHighlighted(i) {
      this.setState({
        rowHighLighted: i
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { id: 'search' },
        React.createElement('input', { id: 'autocomplete-input', value: this.state.userInput, type: 'text', placeholder: 'Search By Country', onChange: this.handleChange }),
        React.createElement(
          'ul',
          { id: 'auto-complete-suggestions' },
          this.state.matches.map(function (element, index) {
            var background = _this3.state.rowHighLighted === index ? 'rgba(105, 111, 118, 0.8)' : 'rgba(0, 0, 0, 0)';
            return React.createElement(
              'li',
              { key: index, style: { background: background }, onClick: function onClick() {
                  return _this3.selectAutoComplete(index);
                }, onMouseOver: function onMouseOver() {
                  return _this3.setRowHighlighted(index);
                } },
              ' ',
              element,
              ' '
            );
          })
        )
      );
    }
  }]);

  return InputBox;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));