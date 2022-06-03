"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Filters = void 0;
var react_select_1 = require("react-select");
var stitches_1 = require("@/stitches");
var helpers_1 = require("lib/helpers");
var filterOptions = [
    {
        label: 'status',
        values: ['alive', 'dead', 'unknown']
    },
    {
        label: 'species',
        values: [
            'alien',
            'human',
            'poopybutthole',
            'humanoid',
            'mythological',
            'unknown',
            'animal',
            'disease',
            'robot',
            'cronenberg',
            'planet',
        ]
    },
    {
        label: 'gender',
        values: ['female', 'male', 'genderless', 'unknown']
    },
];
var Filter = function (_a) {
    var onFilterClick = _a.onFilterClick, label = _a.label, values = _a.values;
    return (<FilterContainer>
      <p className="label">{label}</p>
      <react_select_1["default"] styles={selectStyles} onChange={function (_a) {
        var value = _a.value;
        return onFilterClick(label, value);
    }} options={values.map(function (v) {
            return {
                value: v,
                label: (0, helpers_1.capitalize)(v)
            };
        })}/>
    </FilterContainer>);
};
var Filters = function (_a) {
    var onClear = _a.onClear, onFilterChange = _a.onFilterChange;
    return (<Container className="flex">
      <div className="actions flex">
        {filterOptions.map(function (filter, index) {
            return <Filter {...filter} key={index} onFilterClick={onFilterChange}/>;
        })}

        <button onClick={onClear}>Clear All</button>
      </div>
    </Container>);
};
exports.Filters = Filters;
var Container = (0, stitches_1.styled)('div', {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    '*': {
        outline: '1px dotted red'
    },
    '.header': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    '.actions': {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        border: 0,
        backgroundColor: 'transparent',
        color: '$blue',
        cursor: 'pointer',
        fontSize: 16
    }
});
var FilterContainer = (0, stitches_1.styled)('div', {
    marginTop: 20,
    marginLeft: '5px',
    marginRight: '5px',
    '.label': {
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 5
    }
});
var selectStyles = {
    container: function (styles) { return (__assign(__assign({}, styles), { width: 200 })); },
    input: function (styles) { return (__assign(__assign({}, styles), { fontSize: 15, height: 25 })); },
    placeholder: function (styles) { return (__assign(__assign({}, styles), { fontSize: 15 })); },
    singleValue: function (styles) { return (__assign(__assign({}, styles), { fontSize: 15 })); },
    option: function (styles) { return (__assign(__assign({}, styles), { fontSize: 15 })); }
};
