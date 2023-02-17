(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.keepaliveComponent = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var CacheStore = /*#__PURE__*/function () {
    function CacheStore() {
      var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      _classCallCheck(this, CacheStore);
      _defineProperty(this, "cache", new Map());
      _defineProperty(this, "max", 0);
      this.cache = new Map();
      this.max = max;
    }
    _createClass(CacheStore, [{
      key: "get",
      value: function get(key) {
        if (!this.cache.has(key)) {
          return null;
        }
        var res = this.cache.get(key);
        this.cache["delete"](key);
        this.cache.set(key, res);
        return this.cache.get(key) || null;
      }
    }, {
      key: "set",
      value: function set(key, value) {
        if (this.cache.has(key)) {
          this.cache.set(key, value);
          return;
        }
        if (this.cache.size >= this.max) {
          this.cache["delete"](this.cache.keys().next().value);
        }
        this.cache.set(key, value);
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        this.cache["delete"](key);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.cache.clear();
      }
    }, {
      key: "map",
      value: function map(cb) {
        var cache = this.cache;
        return _toConsumableArray(cache.keys()).map(function (key) {
          return cb(cache.get(key), key);
        });
      }
    }]);
    return CacheStore;
  }();

  var ACITON_CREATED = "created"; /* 缓存创建 */
  var ACTION_ACTIVED = "actived"; /* 激活完成 */
  var ACTION_UNACTIVED = "unActived"; /* 休眠完成 */
  var KeepaliveStore = /*#__PURE__*/function (_CacheStore) {
    _inherits(KeepaliveStore, _CacheStore);
    var _super = _createSuper(KeepaliveStore);
    function KeepaliveStore(update) {
      var _this;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      _classCallCheck(this, KeepaliveStore);
      _this = _super.call(this, max);
      _defineProperty(_assertThisInitialized(_this), "update", void 0);
      _this.update = update;
      return _this;
    }
    _createClass(KeepaliveStore, [{
      key: "create",
      value: function create(payload) {
        this.set(payload.cacheId, _objectSpread2({
          status: ACITON_CREATED,
          fragment: document.createDocumentFragment()
        }, payload));
        this.active(payload.cacheId);
      }
    }, {
      key: "active",
      value: function active(cacheId) {
        var _item$hooks, _item$hooks$beforeAct;
        var item = this.get(cacheId);
        item === null || item === void 0 ? void 0 : (_item$hooks = item.hooks) === null || _item$hooks === void 0 ? void 0 : (_item$hooks$beforeAct = _item$hooks.beforeActived) === null || _item$hooks$beforeAct === void 0 ? void 0 : _item$hooks$beforeAct.call(_item$hooks, item);
        if (item && item.status !== ACTION_ACTIVED) {
          var _item$hooks2, _item$hooks2$actived;
          item.status = ACTION_ACTIVED;
          this.update({});
          (_item$hooks2 = item.hooks) === null || _item$hooks2 === void 0 ? void 0 : (_item$hooks2$actived = _item$hooks2.actived) === null || _item$hooks2$actived === void 0 ? void 0 : _item$hooks2$actived.call(_item$hooks2, item);
        }
      }
    }, {
      key: "unActive",
      value: function unActive(cacheId) {
        var _item$hooks3, _item$hooks3$beforeUn;
        var item = this.get(cacheId);
        item === null || item === void 0 ? void 0 : (_item$hooks3 = item.hooks) === null || _item$hooks3 === void 0 ? void 0 : (_item$hooks3$beforeUn = _item$hooks3.beforeUnActived) === null || _item$hooks3$beforeUn === void 0 ? void 0 : _item$hooks3$beforeUn.call(_item$hooks3, item);
        if (item && item.status !== ACTION_UNACTIVED) {
          var _item$hooks4, _item$hooks4$unActive;
          item.status = ACTION_UNACTIVED;
          this.update({});
          (_item$hooks4 = item.hooks) === null || _item$hooks4 === void 0 ? void 0 : (_item$hooks4$unActive = _item$hooks4.unActived) === null || _item$hooks4$unActive === void 0 ? void 0 : _item$hooks4$unActive.call(_item$hooks4, item);
        }
      }
    }]);
    return KeepaliveStore;
  }(CacheStore);

  function useKeep() {
    var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var forceUpdate = _useState2[1];
    var _useState3 = React.useState(new KeepaliveStore(forceUpdate)),
      _useState4 = _slicedToArray(_useState3, 1),
      store = _useState4[0];
    React.useEffect(function () {
      return function () {
        store === null || store === void 0 ? void 0 : store.destroy();
      };
    }, []);
    function create(cacheId, children, load) {
      store.create({
        cacheId: cacheId,
        children: children,
        load: load
      });
    }
    function active(cacheId) {
      store.active(cacheId);
    }
    function unActive(cacheId) {
      store.unActive(cacheId);
    }
    return {
      cache: store,
      get: store.get.bind(store),
      create: create,
      active: active,
      unActive: unActive
    };
  }

  function KeepaliveRenderItem(props) {
    var currentDOM = React.useRef(null);
    var children = props.children,
      load = props.load,
      status = props.status,
      fragment = props.fragment;
    var element = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
      ref: currentDOM
    }, children), document.body);
    React.useEffect(function () {
      if (status === ACTION_ACTIVED) {
        load && load(currentDOM.current);
      } else {
        fragment.appendChild(currentDOM.current);
      }
    }, [status]);
    return element;
  }

  var keepaliveContext = /*#__PURE__*/React.createContext({});
  function useKeepaliveContext() {
    return React.useContext(keepaliveContext);
  }
  function KeepaliveContextProvide(_ref) {
    var children = _ref.children;
    var _useKeep = useKeep(),
      cache = _useKeep.cache,
      get = _useKeep.get,
      create = _useKeep.create,
      active = _useKeep.active,
      unActive = _useKeep.unActive;
    return /*#__PURE__*/React.createElement(keepaliveContext.Provider, {
      value: {
        cache: cache,
        get: get,
        create: create,
        active: active,
        unActive: unActive
      }
    }, /*#__PURE__*/React.createElement(React.Fragment, null, children, cache.map(function (item, idx) {
      return /*#__PURE__*/React.createElement(KeepaliveRenderItem, _objectSpread2({
        key: idx
      }, item));
    })));
  }

  function useKeepItem(props) {
    var cacheId = props.cacheId,
      load = props.load,
      children = props.children;
    var _useKeepaliveContext = useKeepaliveContext(),
      get = _useKeepaliveContext.get,
      create = _useKeepaliveContext.create,
      active = _useKeepaliveContext.active,
      unActive = _useKeepaliveContext.unActive;
    var renderChildren = function renderChildren() {
      return /*#__PURE__*/React.createElement(KeepaliveItemContextProvider, {
        cacheId: cacheId
      }, children);
    };
    var first = get(cacheId) ? false : true;
    React.useEffect(function () {
      if (!first) {
        active(cacheId);
      } else {
        create(cacheId, renderChildren(), load);
      }
      return function () {
        unActive(cacheId);
      };
    }, [cacheId, children]);
  }

  var keepaliveItemContext = /*#__PURE__*/React.createContext({});
  function KeepaliveItemContextProvider(props) {
    return /*#__PURE__*/React.createElement(keepaliveItemContext.Provider, {
      value: {
        cacheId: props.cacheId
      }
    }, props.children);
  }
  function useKeepaliveItemContext() {
    return React.useContext(keepaliveItemContext);
  }
  function useKeepaliveItemHooks(hooks) {
    var _useKeepaliveItemCont = useKeepaliveItemContext(),
      cacheId = _useKeepaliveItemCont.cacheId;
    if (!cacheId) {
      return;
    }
    var _useKeepaliveContext = useKeepaliveContext(),
      get = _useKeepaliveContext.get;
    var keepaliveItem = get(cacheId);
    keepaliveItem.hooks = hooks;
  }

  function KeepaliveItem(props) {
    var children = props.children,
      cacheId = props.cacheId;
    var elRef = React.useRef(null);
    var load = function load(currentNode) {
      if (elRef.current) {
        elRef.current.innerHTML = "";
        elRef.current.appendChild(currentNode);
      }
    };
    useKeepItem({
      cacheId: cacheId,
      load: load,
      children: children
    });
    return /*#__PURE__*/React.createElement("div", {
      ref: elRef
    });
  }

  function KeepaliveScope(props) {
    var children = props.children;
    return /*#__PURE__*/React.createElement(KeepaliveContextProvide, null, children);
  }

  exports.KeepaliveItem = KeepaliveItem;
  exports.KeepaliveItemContextProvider = KeepaliveItemContextProvider;
  exports.KeepaliveScope = KeepaliveScope;
  exports.useKeep = useKeep;
  exports.useKeepItem = useKeepItem;
  exports.useKeepaliveContext = useKeepaliveContext;
  exports.useKeepaliveItemContext = useKeepaliveItemContext;
  exports.useKeepaliveItemHooks = useKeepaliveItemHooks;

}));
//# sourceMappingURL=index.js.map
