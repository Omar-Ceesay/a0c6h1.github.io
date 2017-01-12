webpackHotUpdate(0,{

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(178);
	
	var _zone = __webpack_require__(256);
	
	var _zone2 = _interopRequireDefault(_zone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = function (_Component) {
	  _inherits(Layout, _Component);
	
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	  }
	
	  _createClass(Layout, [{
	    key: 'render',
	    value: function render() {
	      console.log();
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container-fluid', id: 'stay' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container', id: 'heading' },
	          _react2.default.createElement(
	            'h1',
	            { id: 'title' },
	            _react2.default.createElement(
	              'mongo',
	              { id: 'mongodb' },
	              _react2.default.createElement(
	                'strong',
	                null,
	                'M'
	              ),
	              'ongoDB'
	            ),
	            ' ',
	            _react2.default.createElement(
	              'strong',
	              null,
	              'E'
	            ),
	            'xpress ',
	            _react2.default.createElement(
	              'react',
	              { id: 'react' },
	              _react2.default.createElement(
	                'strong',
	                null,
	                'R'
	              ),
	              'eact'
	            ),
	            ' ',
	            _react2.default.createElement(
	              'node',
	              { id: 'node' },
	              _react2.default.createElement(
	                'strong',
	                null,
	                'N'
	              ),
	              'ode'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'navbar' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav nav-tabs' },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'activeLink', to: '/' },
	                'Home'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'activeLink', to: 'create' },
	                'Create'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'activeLink', to: 'projects' },
	                'Projects'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'activeLink', to: 'about' },
	                'About'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { activeClassName: 'activeLink', to: 'commentFeed' },
	                'Comments'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: 'container test' }),
	        this.props.children,
	        _react2.default.createElement('script', { rel: 'stylesheet', src: '../../javascripts/jq.js' })
	      );
	    }
	  }]);
	
	  return Layout;
	}(_react.Component);
	
	exports.default = Layout;

/***/ }

})
//# sourceMappingURL=public/build/bundle.map