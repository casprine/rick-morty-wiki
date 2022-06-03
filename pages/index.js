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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var react_1 = require("react");
var head_1 = require("next/head");
var router_1 = require("next/router");
var index_1 = require("@/components/index");
var stitches_1 = require("@/stitches");
var requests_1 = require("lib/requests");
var transformCharacters = function (data) {
    return data.map(function (_a) {
        var name = _a.name, status = _a.status, species = _a.species, location = _a.location, gender = _a.gender, id = _a.id, image = _a.image;
        return {
            name: name,
            status: status.toLocaleLowerCase(),
            species: species,
            location: location,
            gender: gender,
            id: id,
            image: image
        };
    });
};
var isEmpty = function (value) { return value.length === 0; };
function getServerSideProps() {
    return __awaiter(this, void 0, void 0, function () {
        var requestInfo, characters, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestInfo = {};
                    characters = {};
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, requests_1.getCharacters)({
                            status: '',
                            gender: '',
                            species: '',
                            pageNumber: 1
                        })];
                case 2:
                    response = _a.sent();
                    requestInfo = response.info;
                    characters = transformCharacters(response.results);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, {
                        props: {
                            requestInfo: requestInfo,
                            characters: characters
                        }
                    }];
            }
        });
    });
}
exports.getServerSideProps = getServerSideProps;
var initialFilters = {
    status: '',
    gender: '',
    species: ''
};
var Home = function (_a) {
    var _b = _a.characters, propInCharacters = _b === void 0 ? [] : _b, _c = _a.requestInfo, propInRequestInfo = _c === void 0 ? {} : _c;
    var _d = (0, react_1.useState)(propInCharacters), characters = _d[0], setCharacters = _d[1];
    var _e = (0, react_1.useState)(1), pageNumber = _e[0], setPageNumber = _e[1];
    var _f = (0, react_1.useState)(propInRequestInfo), requestInfo = _f[0], setInfo = _f[1];
    var _g = (0, react_1.useState)(initialFilters), filters = _g[0], setFilters = _g[1];
    if (isEmpty(propInCharacters)) {
        return <NoCharacters />;
    }
    function getfilteredCharacters(args) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, requests_1.getCharacters)(args)];
                    case 1:
                        results = (_a.sent()).results;
                        if (results) {
                            setCharacters(transformCharacters(results));
                            return [2 /*return*/];
                        }
                        setCharacters([]);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onFilterChange(type, value) {
        var _a;
        var newFilters = __assign(__assign({}, filters), (_a = {}, _a[type] = value, _a));
        setFilters(newFilters);
        getfilteredCharacters(newFilters);
    }
    function onFilterClear() {
        setFilters(initialFilters);
        setCharacters(propInCharacters);
    }
    return (<div>
      <head_1["default"]>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </head_1["default"]>

      <MainLayout>
        <index_1.Header title="All Characters"/>
        <div className="filters">
          <index_1.Filters onClear={onFilterClear} onFilterChange={onFilterChange}/>
        </div>
        <div className="grid">
          <div className="content">
            {isEmpty(characters) ? (<EmptyFilters />) : (<>
                {characters.map(function (character) { return (<index_1.CharacterCard {...character} key={character.id}/>); })}
              </>)}
          </div>
        </div>
      </MainLayout>
    </div>);
};
var NoCharacters = function () {
    return (<NoCharactersContainer className="flex">
      <p>Hey, We {"couldn't"} find any rick and morty characters</p>
      <button onClick={function () { return router_1["default"].reload(); }}>Reload page</button>
    </NoCharactersContainer>);
};
var EmptyFilters = function () {
    return (<div className="empty-filter-results flex">
      <p>Sorry, we are unable to find any characters for this filter</p>
    </div>);
};
var NoCharactersContainer = (0, stitches_1.styled)('div', {
    justifyContent: 'center',
    alignItems: 'center',
    outline: '1px dotted red',
    height: '100vh',
    flexDirection: 'column',
    button: {
        border: '0px',
        backgroundColor: '$blue',
        marginTop: 10,
        height: 46,
        padding: '0 25px',
        color: '$loContrast',
        borderRadius: 4,
        cursor: 'pointer'
    }
});
var MainLayout = (0, stitches_1.styled)('section', {
    fontFamily: '$system',
    maxWidth: '1280px',
    margin: '0 auto',
    '.page-header': {
        textAlign: 'center'
    },
    '.empty-filter-results': {
        width: '100%',
        gridColumn: 'span 8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '.grid': {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 10,
        '.content': {
            gridColumn: 'span 12',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyContent: 'space-between',
            gap: 20
        }
    }
});
exports["default"] = Home;
