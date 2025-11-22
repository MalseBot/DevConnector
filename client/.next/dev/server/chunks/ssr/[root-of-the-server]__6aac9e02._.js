module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/client/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/client/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/client/utils/api.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api"),
    headers: {
        'Content-Type': 'application/json'
    }
});
const __TURBOPACK__default__export__ = api;
}),
"[project]/client/app/store/slices/loginSlice.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "clearError",
    ()=>clearError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "loadUserFromToken",
    ()=>loadUserFromToken,
    "loginSlice",
    ()=>loginSlice,
    "loginUser",
    ()=>loginUser,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/utils/api.js [app-rsc] (ecmascript)");
;
;
const initialState = {
    user: null,
    isLoading: true,
    error: null,
    isAuthenticated: false
};
const loginUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('login/loginUser', async (credentials, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post('/auth', credentials);
        // Assuming the API returns { token, user: { id, name, email } }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.errors?.[0].msg || 'Login failed');
    }
});
const loginSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'login',
    initialState,
    reducers: {
        // Logout user
        logout: (state)=>{
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
            // Clear token and user data from localStorage
            console.log(window);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        // Clear error
        clearError: (state)=>{
            state.error = null;
            state.isLoading = false;
        },
        // Load user from token (on app init)
        loadUserFromToken: (state, action)=>{
            if (action.payload) {
                state.user = action.payload;
                state.isLoading = false;
                state.isAuthenticated = true;
            }
        }
    },
    extraReducers: (builder)=>{
        builder// Pending state
        .addCase(loginUser.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        })// Fulfilled state
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.error = null;
            console.log(action);
            const token = action.payload.token;
            if (token) {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const userId = decodedToken.user.id;
                state.user = {
                    id: userId,
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                    token: token
                };
            }
            // Save token and user data to localStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        })// Rejected state
        .addCase(loginUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        });
    }
});
const { logout, clearError, loadUserFromToken } = loginSlice.actions;
const __TURBOPACK__default__export__ = loginSlice.reducer;
}),
"[project]/client/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/loginSlice.ts [app-rsc] (ecmascript)");
"use";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "landing",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dark-overlay",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "landing-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "x-large",
                        children: "Developer Connector"
                    }, void 0, false, {
                        fileName: "[project]/client/app/page.tsx",
                        lineNumber: 9,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lead",
                        children: "Create a developer profile/portfolio, share posts and get help from other developers"
                    }, void 0, false, {
                        fileName: "[project]/client/app/page.tsx",
                        lineNumber: 10,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "register.html",
                                className: "btn btn-primary",
                                children: "Sign Up"
                            }, void 0, false, {
                                fileName: "[project]/client/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"])(),
                                children: "log out"
                            }, void 0, false, {
                                fileName: "[project]/client/app/page.tsx",
                                lineNumber: 20,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "login.html",
                                className: "btn btn-light",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/client/app/page.tsx",
                                lineNumber: 21,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/page.tsx",
                        lineNumber: 14,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/page.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/app/page.tsx",
            lineNumber: 7,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/client/app/page.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, this);
}
}),
"[project]/client/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/client/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6aac9e02._.js.map