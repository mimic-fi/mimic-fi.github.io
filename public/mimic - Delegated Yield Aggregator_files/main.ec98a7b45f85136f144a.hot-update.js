webpackHotUpdate("main",{

/***/ "./src/components/PortfolioTable.js":
/*!******************************************!*\
  !*** ./src/components/PortfolioTable.js ***!
  \******************************************/
/*! exports provided: PortfolioTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioTable", function() { return PortfolioTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var _hooks_useUSDCPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useUSDCPrice */ "./src/hooks/useUSDCPrice.js");
/* harmony import */ var _hooks_useTokensBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTokensBalance */ "./src/hooks/useTokensBalance.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _context_managerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/managerContext */ "./src/context/managerContext.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _usedapp_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @usedapp/core */ "./node_modules/@usedapp/core/dist/esm/src/index.js");
/* harmony import */ var _hooks_useStrategiesBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useStrategiesBalance */ "./src/hooks/useStrategiesBalance.js");
/* harmony import */ var _hooks_useStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useStyles */ "./src/hooks/useStyles.js");
/* harmony import */ var _hooks_useVaultBalance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useVaultBalance */ "./src/hooks/useVaultBalance.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _helpers_enviroment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/enviroment */ "./src/helpers/enviroment.js");
/* harmony import */ var _hooks_useMainTokens__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useMainTokens */ "./src/hooks/useMainTokens.js");
/* harmony import */ var _TableCommon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TableCommon */ "./src/components/TableCommon.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/brunitob/GitHub/mimic/frontend/src/components/PortfolioTable.js",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();



















function PortfolioTable(_ref) {
  _s();

  let {
    agreementAddress
  } = _ref;
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
  const {
    buttonBorderStyle
  } = Object(_hooks_useStyles__WEBPACK_IMPORTED_MODULE_10__["useStyles"])();
  const {
    chainId
  } = Object(_usedapp_core__WEBPACK_IMPORTED_MODULE_8__["useEthers"])();
  const mainTokens = Object(_hooks_useMainTokens__WEBPACK_IMPORTED_MODULE_14__["useMainTokens"])();
  const tokensBalance = Object(_hooks_useTokensBalance__WEBPACK_IMPORTED_MODULE_3__["useTokensBalance"])(agreementAddress);
  const strategiesBalance = Object(_hooks_useStrategiesBalance__WEBPACK_IMPORTED_MODULE_9__["default"])(agreementAddress);
  const {
    data: vaultBalance,
    isLoading: vaultBalanceLoading
  } = Object(_hooks_useVaultBalance__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const isLoading = strategiesBalance.isLoading && vaultBalanceLoading;
  const isReadOnly = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isAddress"])(agreementAddress);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Thead"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tr"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Th"], {
          borderBottom: buttonBorderStyle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            color: "white",
            children: "PORTFOLIO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_TableCommon__WEBPACK_IMPORTED_MODULE_15__["TableHead"], {
          children: t("portfolioAllocation")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_TableCommon__WEBPACK_IMPORTED_MODULE_15__["TableHead"], {
          children: t("totalUsd")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_TableCommon__WEBPACK_IMPORTED_MODULE_15__["Thh"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tbody"], {
      children: mainTokens && mainTokens.map(token => {
        const tk = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isAddress"])(token[chainId]);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(TableRow, {
          token: token,
          isReadOnly: isReadOnly,
          agreementBalance: tokensBalance && tokensBalance[tk],
          vaultBalance: vaultBalance && Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getBalanceByToken"])(vaultBalance, tk),
          strategyBalance: strategiesBalance && strategiesBalance.holdings[tk],
          strategyInvested: strategiesBalance && strategiesBalance.invested[tk],
          strategySumApy: strategiesBalance && strategiesBalance.sumApy[tk],
          isLoading: isLoading,
          chainId: chainId
        }, token[chainId], false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(PortfolioTable, "VTW+GQ6WcWX1NgVrWCODsUxgnFI=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"], _hooks_useStyles__WEBPACK_IMPORTED_MODULE_10__["useStyles"], _usedapp_core__WEBPACK_IMPORTED_MODULE_8__["useEthers"], _hooks_useMainTokens__WEBPACK_IMPORTED_MODULE_14__["useMainTokens"], _hooks_useTokensBalance__WEBPACK_IMPORTED_MODULE_3__["useTokensBalance"], _hooks_useStrategiesBalance__WEBPACK_IMPORTED_MODULE_9__["default"], _hooks_useVaultBalance__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = PortfolioTable;

function TableRow(_ref2) {
  _s2();

  let {
    token,
    agreementBalance,
    vaultBalance,
    strategyBalance,
    strategyInvested,
    strategySumApy,
    isLoading,
    chainId,
    isReadOnly
  } = _ref2;
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
  const {
    buttonBorderStyle,
    bgHover,
    colorTitle
  } = Object(_hooks_useStyles__WEBPACK_IMPORTED_MODULE_10__["useStyles"])();
  const {
    name,
    decimals
  } = token;
  const agreementTotal = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["formatBNPrice"])(agreementBalance, decimals);
  const vaultBalanceAccount = vaultBalance ? Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["formatBNPrice"])(vaultBalance, decimals) : "0"; // balance from the vault for this pair token/account

  const portfolioBalance = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["sumBN"])(agreementTotal, vaultBalanceAccount);
  const totalAssetsStrategy = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["formatBNPrice"])(strategyBalance, decimals);
  const gainsStrategies = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["subBN"])(strategyBalance, strategyInvested);
  const totalGainsStrategy = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["formatBNUnits"])(gainsStrategies, decimals);
  console.log('gainsStrategies', name, gainsStrategies, strategyBalance, strategyInvested);
  const totalSum = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["sumBN"])(portfolioBalance, totalAssetsStrategy);
  const totalUSD = Object(_hooks_useUSDCPrice__WEBPACK_IMPORTED_MODULE_2__["default"])(token[1], totalSum); // hardcode mainnet to get assetPrice

  const totalUSDPortfolio = Object(_hooks_useUSDCPrice__WEBPACK_IMPORTED_MODULE_2__["default"])(token[1], portfolioBalance); // hardcode mainnet to get assetPrice

  const totalGainsUSD = Object(_hooks_useUSDCPrice__WEBPACK_IMPORTED_MODULE_2__["default"])(token[1], totalGainsStrategy); // hardcode mainnet to get assetPrice

  const {
    updatePortfolioBalance
  } = Object(_context_managerContext__WEBPACK_IMPORTED_MODULE_5__["useManagerDispatch"])();
  const withdrawFromVaultModalToggle = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useWithdrawFromVaultModalToggle"])(token[chainId]);
  const transferToAgreementModalToggle = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useTransferToAgreementModalToggle"])(token[chainId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updatePortfolioBalance({
      address: token[chainId],
      total: totalUSD,
      gains: totalGainsUSD,
      sumApy: strategySumApy
    }); // eslint-disable-next-line
  }, [totalUSD, totalGainsUSD, token, chainId, updatePortfolioBalance, strategySumApy]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tr"], {
    _hover: {
      bg: bgHover
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
      borderBottom: buttonBorderStyle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_TableCommon__WEBPACK_IMPORTED_MODULE_15__["AssetCell"], {
        name: name,
        mainnet: token[_usedapp_core__WEBPACK_IMPORTED_MODULE_8__["ChainId"].Mainnet]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
      isNumeric: true,
      borderBottom: buttonBorderStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_TableCommon__WEBPACK_IMPORTED_MODULE_15__["ShowValue"], {
        value: portfolioBalance
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this), " ", !Object(_helpers_enviroment__WEBPACK_IMPORTED_MODULE_13__["isProduction"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        color: "orange",
        children: ["(", agreementTotal, " + ", vaultBalanceAccount, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
      isNumeric: true,
      borderBottom: buttonBorderStyle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_TableCommon__WEBPACK_IMPORTED_MODULE_15__["ShowValue"], {
        value: totalUSDPortfolio,
        price: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
      borderBottom: buttonBorderStyle,
      children: !isReadOnly && (isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
        size: "sm"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          color: colorTitle,
          justify: "space-evenly",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            variant: "ghost",
            px: "2",
            onClick: () => transferToAgreementModalToggle(),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontWeight: "600",
              pl: 2,
              fontSize: "sm",
              mr: "1",
              children: t("deposit")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__["AiOutlineDownload"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            variant: "ghost",
            px: "2",
            onClick: () => withdrawFromVaultModalToggle(),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontWeight: "600",
              pl: 2,
              fontSize: "sm",
              mr: "1",
              children: t("withdraw")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__["AiOutlineExport"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 15
        }, this)
      }, void 0, false))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this)]
  }, token[chainId], true, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 5
  }, this);
}

_s2(TableRow, "HZ80aHKjha5S/aUMysssXiV4QN8=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"], _hooks_useStyles__WEBPACK_IMPORTED_MODULE_10__["useStyles"], _hooks_useUSDCPrice__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_useUSDCPrice__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_useUSDCPrice__WEBPACK_IMPORTED_MODULE_2__["default"], _context_managerContext__WEBPACK_IMPORTED_MODULE_5__["useManagerDispatch"], _hooks__WEBPACK_IMPORTED_MODULE_6__["useWithdrawFromVaultModalToggle"], _hooks__WEBPACK_IMPORTED_MODULE_6__["useTransferToAgreementModalToggle"]];
});

_c2 = TableRow;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "PortfolioTable");
__webpack_require__.$Refresh$.register(_c2, "TableRow");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.ec98a7b45f85136f144a.hot-update.js.map