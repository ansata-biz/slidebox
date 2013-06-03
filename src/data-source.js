define(function(require, exports, module) {
    var Base = require('base');
    var $ = require('$');

    var DataSource = Base.extend({

        attrs: {
            source: [],
            type: 'array'
        },

        initialize: function(config) {
            DataSource.superclass.initialize.call(this, config);

            var source = this.get('source');
            if ($.isArray(source)) {
                this.set('type', 'array');
            } else if ($.isFunction(source)) {
                this.set('type', 'function');
            } else {
                throw new Error('Source Type Error');
            }
        },

        getData: function(query) {
            return this['_get' + capitalize(this.get('type') || '') + 'Data'](query);
        },

        // 完成数据请求，getData => done
        _done: function(data) {
            this.trigger('data', data);
        },

        _getArrayData: function() {
            var source = this.get('source');
            this._done(source);
            return source;
        },

        _getFunctionData: function(query) {
            var that = this, func = this.get('source');
            // 如果返回 false 可阻止执行
            function done(data) {
                that._done(data);
            }
            var data = func.call(this, query, done);
            if (data) {
                this._done(data);
            }
        }
    });

    module.exports = DataSource;

    function capitalize(str) {
        return str.replace(
            /^([a-z])/,
            function(f, m) {
                return m.toUpperCase();
            }
        );
    }
});
