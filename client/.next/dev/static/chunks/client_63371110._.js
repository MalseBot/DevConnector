(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/app/hooks/useAlert.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "useAlert",
    ()=>useAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/client/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useAlert = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const showAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAlert.useCallback[showAlert]": (alert)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                ...alert,
                id
            }));
            return id;
        }
    }["useAlert.useCallback[showAlert]"], [
        dispatch
    ]);
    const hideAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAlert.useCallback[hideAlert]": (id)=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAlert"])(id));
        }
    }["useAlert.useCallback[hideAlert]"], [
        dispatch
    ]);
    return {
        showAlert,
        hideAlert
    };
};
_s(useAlert, "0X0hywZN0pHRYI1+3ksRrUdRk3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/app/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/registerSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/loginSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const useAuth = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const registerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "useAuth.useAppSelector[registerState]": (state)=>state.register
    }["useAuth.useAppSelector[registerState]"]);
    const loginState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "useAuth.useAppSelector[loginState]": (state)=>state.login
    }["useAuth.useAppSelector[loginState]"]);
    const handleRegister = async (userData)=>{
        try {
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerUser"])(userData)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Registration successful! Please log in.',
                duration: 5000
            }));
            return result;
        } catch (error) {
            const errorMsg = error;
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg,
                duration: 5000
            }));
            throw error;
        }
    };
    const handleLogin = async (credentials)=>{
        try {
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"])(credentials)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Login successful!',
                duration: 5000
            }));
            return result;
        } catch (error) {
            const errorMsg = error;
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg,
                duration: 5000
            }));
            throw error;
        }
    };
    const handleLogout = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])());
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
            id: `${Date.now()}`,
            type: 'info',
            message: 'Logged out successfully',
            duration: 3000
        }));
    };
    return {
        // Register
        register: handleRegister,
        registerLoading: registerState.isLoading,
        registerError: registerState.error,
        registerUser: registerState.user,
        clearRegisterState: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearRegisterState"])()),
        clearRegisterError: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearError"])()),
        // Login
        login: handleLogin,
        loginLoading: loginState.isLoading,
        loginError: loginState.error,
        user: loginState.user,
        isAuthenticated: loginState.isAuthenticated,
        logout: handleLogout,
        clearLoginError: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearError"])()),
        loadUserFromToken: (user)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadUserFromToken"])(user))
    };
};
_s(useAuth, "DOh8z3qRwTU3ENUKnlXoF6qOaaY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/app/(auth)/register/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/hooks/useAlert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Register() {
    _s();
    const { register, registerLoading, registerError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formData;
    const changeHandler = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    const submitHandler = async (e)=>{
        e.preventDefault();
        if (password !== password2) {
            return console.log('password does not match');
        } else {
            try {
                await register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])('/login', __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedirectType"].replace);
            // Navigate to login
            } catch (err) {
                console.error(err);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "large text-primary",
                children: "Sign Up"
            }, void 0, false, {
                fileName: "[project]/client/app/(auth)/register/page.tsx",
                lineNumber: 54,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "lead",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fas fa-user"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(auth)/register/page.tsx",
                        lineNumber: 56,
                        columnNumber: 5
                    }, this),
                    " Create Your Account"
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/(auth)/register/page.tsx",
                lineNumber: 55,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "form",
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Name",
                            name: "name",
                            value: name,
                            onChange: (e)=>changeHandler(e),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/client/app/(auth)/register/page.tsx",
                            lineNumber: 62,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/app/(auth)/register/page.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "Email Address",
                                name: "email",
                                value: email,
                                onChange: (e)=>changeHandler(e),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/client/app/(auth)/register/page.tsx",
                                lineNumber: 72,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "This site uses Gravatar so if you want a profile image, use a Gravatar email"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(auth)/register/page.tsx",
                                lineNumber: 80,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(auth)/register/page.tsx",
                        lineNumber: 71,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Password",
                            name: "password",
                            minLength: 6,
                            value: password,
                            onChange: (e)=>changeHandler(e),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/client/app/(auth)/register/page.tsx",
                            lineNumber: 86,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/app/(auth)/register/page.tsx",
                        lineNumber: 85,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Confirm Password",
                            name: "password2",
                            minLength: 6,
                            value: password2,
                            onChange: (e)=>changeHandler(e)
                        }, void 0, false, {
                            fileName: "[project]/client/app/(auth)/register/page.tsx",
                            lineNumber: 97,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/app/(auth)/register/page.tsx",
                        lineNumber: 96,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: registerLoading,
                        children: registerLoading ? 'Registering...' : 'Register'
                    }, void 0, false, {
                        fileName: "[project]/client/app/(auth)/register/page.tsx",
                        lineNumber: 106,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/(auth)/register/page.tsx",
                lineNumber: 58,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "my-1",
                children: [
                    "Already have an account? ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "login",
                        children: "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(auth)/register/page.tsx",
                        lineNumber: 111,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/(auth)/register/page.tsx",
                lineNumber: 110,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/(auth)/register/page.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, this);
}
_s(Register, "/9vvmVdXvfvtDZyXo+Y7ZDtU4/A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAlert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAlert"]
    ];
});
_c = Register;
var _c;
__turbopack_context__.k.register(_c, "Register");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/node_modules/uuid/dist/native.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const __TURBOPACK__default__export__ = {
    randomUUID
};
}),
"[project]/client/node_modules/uuid/dist/rng.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}
}),
"[project]/client/node_modules/uuid/dist/regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/client/node_modules/uuid/dist/validate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/uuid/dist/regex.js [app-client] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/client/node_modules/uuid/dist/stringify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/uuid/dist/validate.js [app-client] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/client/node_modules/uuid/dist/v4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/uuid/dist/native.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/uuid/dist/rng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/uuid/dist/stringify.js [app-client] (ecmascript)");
;
;
;
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    return _v4(options, buf, offset);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/client/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/uuid/dist/v4.js [app-client] (ecmascript)");
}),
"[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/client/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=client_63371110._.js.map