module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/client/app/store/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
const useAppDispatch = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"];
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

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
"[project]/client/utils/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api"),
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add request interceptor to attach the current token from localStorage on every request
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const __TURBOPACK__default__export__ = api;
}),
"[project]/client/errorHandler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMessage",
    ()=>getErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const getErrorMessage = (error)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
        return error.response?.data?.errors?.[0]?.msg || error.response?.data?.message || error.message || 'Unknown server error';
    }
    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;
    return 'Unknown error';
};
}),
"[project]/client/app/store/slices/registerSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "clearError",
    ()=>clearError,
    "clearRegisterState",
    ()=>clearRegisterState,
    "default",
    ()=>__TURBOPACK__default__export__,
    "registerSlice",
    ()=>registerSlice,
    "registerUser",
    ()=>registerUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/utils/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/errorHandler.tsx [app-ssr] (ecmascript)");
;
;
;
const initialState = {
    user: null,
    isLoading: false,
    error: null,
    success: false
};
const registerUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('register/registerUser', async (userData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/users', userData);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to delete education');
    }
});
const registerSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'register',
    initialState,
    reducers: {
        // Clear register state
        clearRegisterState: (state)=>{
            state.user = null;
            state.error = null;
            state.success = false;
        },
        // Clear error
        clearError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Pending state
        .addCase(registerUser.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
            state.success = false;
        })// Fulfilled state
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = true;
            state.error = null;
            const token = action.payload.token;
            if (token) {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const userId = decodedToken.user.id;
                state.user = {
                    _id: userId,
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                    token: token
                };
            }
            // Save token and user data to localStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        })// Rejected state
        .addCase(registerUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
            state.success = false;
            state.user = null;
        });
    }
});
const { clearRegisterState, clearError } = registerSlice.actions;
const __TURBOPACK__default__export__ = registerSlice.reducer;
}),
"[project]/client/app/store/types/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileState",
    ()=>ProfileState
]);
const ProfileState = {
    profile: null,
    profiles: [],
    profileDetail: null,
    repos: [],
    isLoading: false,
    error: null
};
}),
"[project]/client/app/store/slices/profileSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "addEducation",
    ()=>addEducation,
    "addExperience",
    ()=>addExperience,
    "clearError",
    ()=>clearError,
    "clearProfile",
    ()=>clearProfile,
    "clearProfiles",
    ()=>clearProfiles,
    "createUpdateProfile",
    ()=>createUpdateProfile,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteEducation",
    ()=>deleteEducation,
    "deleteExperience",
    ()=>deleteExperience,
    "getAllProfiles",
    ()=>getAllProfiles,
    "getCurrentProfile",
    ()=>getCurrentProfile,
    "getProfileById",
    ()=>getProfileById,
    "profileSlice",
    ()=>profileSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/utils/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$types$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/types/profile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/errorHandler.tsx [app-ssr] (ecmascript)");
;
;
;
;
// helper to extract a string message from unknown errors
const initialState = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$types$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProfileState"];
const getCurrentProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/getCurrentProfile', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/profiles/me');
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error));
    }
});
const getAllProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/getAllProfiles', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/profiles');
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to fetch profiles');
    }
});
const getProfileById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/getProfileById', async (userId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/profiles/user/${userId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to fetch profile');
    }
});
const createUpdateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/createUpdateProfile', async (profileData, { rejectWithValue })=>{
    try {
        console.log(profileData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/profiles', profileData);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error));
    }
});
const addExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/addExperience', async (experienceData, { rejectWithValue })=>{
    try {
        console.log(experienceData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put('/profiles/experience', experienceData);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to save profile');
    }
});
const deleteExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/deleteExperience', async (eduId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/profiles/experience/${eduId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to delete experience');
    }
});
const addEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/addEducation', async (educationData, { rejectWithValue })=>{
    try {
        console.log(educationData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put('/profiles/education', educationData);
        console.log(response);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to save profile');
    }
});
const deleteEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('profile/deleteEducation', async (eduId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/profiles/education/${eduId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to delete education');
    }
});
const profileSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'profile',
    initialState,
    reducers: {
        clearProfile: (state)=>{
            state.profile = null;
            state.error = null;
        },
        // Clear error
        clearError: (state)=>{
            state.error = null;
        },
        // Clear profiles list
        clearProfiles: (state)=>{
            state.profiles = [];
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getCurrentProfile.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getCurrentProfile.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profile = action.payload;
        }).addCase(getCurrentProfile.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getAllProfiles.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getAllProfiles.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profiles = action.payload;
        }).addCase(getAllProfiles.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(getProfileById.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getProfileById.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profileDetail = action.payload;
        }).addCase(getProfileById.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(createUpdateProfile.pending, (state)=>{
            state.isLoading = true;
        }).addCase(createUpdateProfile.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profile = action.payload;
        }).addCase(createUpdateProfile.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        }).addCase(addEducation.pending, (state)=>{
            state.isLoading = true;
        }).addCase(addEducation.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profile = action.payload;
        }).addCase(addEducation.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(deleteEducation.pending, (state)=>{
            state.isLoading = true;
        }).addCase(deleteEducation.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profile = action.payload;
        }).addCase(deleteEducation.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(addExperience.pending, (state)=>{
            state.isLoading = true;
        }).addCase(addExperience.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profile = action.payload;
        }).addCase(addExperience.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(deleteExperience.pending, (state)=>{
            state.isLoading = true;
        }).addCase(deleteExperience.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.profile = action.payload;
        }).addCase(deleteExperience.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
const { clearError, clearProfile, clearProfiles } = profileSlice.actions;
const __TURBOPACK__default__export__ = profileSlice.reducer;
}),
"[project]/client/app/store/slices/loginSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "clearError",
    ()=>clearError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteUser",
    ()=>deleteUser,
    "loadUserFromToken",
    ()=>loadUserFromToken,
    "loginSlice",
    ()=>loginSlice,
    "loginUser",
    ()=>loginUser,
    "logout",
    ()=>logout,
    "validateToken",
    ()=>validateToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/utils/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/profileSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/errorHandler.tsx [app-ssr] (ecmascript)");
;
;
;
;
const initialState = {
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false
};
const loginUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('login/loginUser', async (credentials, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/auth', credentials);
        // Assuming the API returns { token, user: { id, name, email } }
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to delete education');
    }
});
const validateToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('login/validateToken', async (_, { rejectWithValue })=>{
    try {
        // include token in Authorization header (Bearer)
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/auth');
        return response.data; // Assuming it returns user data if token is valid
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to delete education');
    }
});
const deleteUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('register/deleteUser', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$utils$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/profiles`);
        return response.data;
    } catch (error) {
        return rejectWithValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Failed to delete education');
    }
});
const loginSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'login',
    initialState,
    reducers: {
        // Logout user
        logout: (state)=>{
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProfile"])();
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
                state.isAuthenticated = true;
                state.isLoading = false;
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
            state.user = action.payload;
            state.isLoading = false;
            state.isAuthenticated = true;
            console.log(action);
            const token = action.payload.token;
            if (token) {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const userId = decodedToken.user.id;
                state.user = {
                    _id: userId,
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
        })// Validate token lifecycle
        .addCase(validateToken.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        }).addCase(validateToken.fulfilled, (state, action)=>{
            state.isLoading = false;
            // action.payload should contain user info returned by backend
            const payload = action.payload;
            if (payload) {
                // preserve token from localStorage if present
                const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
                state.user = {
                    _id: payload.user?.id || payload.id || '',
                    name: payload.user?.name || payload.name || '',
                    email: payload.user?.email || payload.email || '',
                    token: token || ''
                };
                state.isAuthenticated = true;
                // refresh stored user data
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        }).addCase(validateToken.rejected, (state, action)=>{
            // Token invalid or expired -> force logout
            state.isLoading = false;
            state.error = action.payload || 'Token invalid';
            state.isAuthenticated = false;
            state.user = null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(deleteUser.fulfilled, (state)=>{
            // On user deletion, clear state
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(deleteUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(deleteUser.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        });
    }
});
const { logout, clearError, loadUserFromToken } = loginSlice.actions;
const __TURBOPACK__default__export__ = loginSlice.reducer;
}),
"[project]/client/app/store/slices/alertSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "addAlert",
    ()=>addAlert,
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeAlert",
    ()=>removeAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    alerts: []
};
const alertSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'alert',
    initialState,
    reducers: {
        addAlert: (state, action)=>{
            state.alerts.push(action.payload);
        },
        removeAlert: (state, action)=>{
            state.alerts = state.alerts.filter((alert)=>alert.id !== action.payload);
        }
    }
});
const { addAlert, removeAlert } = alertSlice.actions;
const __TURBOPACK__default__export__ = alertSlice.reducer;
}),
"[project]/client/app/hooks/useProfile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "useProfile",
    ()=>useProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/profileSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/errorHandler.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const useProfile = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const profileState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.profile);
    // Wrap in useCallback to prevent recreating on every render
    const fetchCurrentProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentProfile"])()).unwrap();
            return response;
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error) || 'Profile Error',
                duration: 5000
            }));
        }
    }, [
        dispatch
    ]);
    const fetchProfileById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userId)=>{
        try {
            const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfileById"])(userId)).unwrap();
            return response;
        } catch (error) {
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg,
                duration: 5000
            }));
            throw error;
        }
    }, [
        dispatch
    ]);
    const allProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const res = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllProfiles"])()).unwrap();
            return res;
        } catch (error) {
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg || 'Failed to fetch profiles',
                duration: 5000
            }));
            throw error;
        }
    }, [
        dispatch
    ]);
    const saveProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (profileData)=>{
        try {
            const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUpdateProfile"])(profileData)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Profile saved successfully',
                duration: 5000
            }));
            return response;
        } catch (error) {
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg || 'Failed to save profile',
                duration: 5000
            }));
            throw error;
        }
    }, [
        dispatch
    ]);
    const addExperienceToProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (experienceData)=>{
        try {
            const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addExperience"])(experienceData)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Experience added successfully',
                duration: 5000
            }));
            return response;
        } catch (error) {
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg || 'Failed to add experience',
                duration: 5000
            }));
            throw error;
        }
    }, [
        dispatch
    ]);
    const useDeleteExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (expId)=>{
        try {
            const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteExperience"])(expId)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Experience deleted successfully',
                duration: 5000
            }));
            return response;
        } catch (error) {
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg,
                duration: 5000
            }));
            throw error;
        }
    }, [
        dispatch
    ]);
    const addEducationToProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (educationData)=>{
        try {
            const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEducation"])(educationData)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Education added successfully',
                duration: 5000
            }));
            return response;
        } catch (error) {
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg || 'Failed to add education',
                duration: 5000
            }));
            throw error;
        }
    }, [
        dispatch
    ]);
    const useDeleteEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (eduId)=>{
        try {
            const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteEducation"])(eduId)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Education deleted successfully',
                duration: 5000
            }));
            return response;
        } catch (error) {
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$errorHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg,
                duration: 5000
            }));
            throw error;
        }
    }, [
        dispatch
    ]);
    return {
        profile: profileState.profile,
        profiles: profileState.profiles,
        profileLoading: profileState.isLoading,
        profileError: profileState.error,
        profileDetail: profileState.profileDetail,
        getCurrentProfile: fetchCurrentProfile,
        getAllProfiles: allProfiles,
        getProfileById: fetchProfileById,
        createUpdateProfile: saveProfile,
        addExperience: addExperienceToProfile,
        deleteExperience: useDeleteExperience,
        addEducation: addEducationToProfile,
        deleteEducation: useDeleteEducation,
        clearProfile: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProfile"])()),
        clearProfileError: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearError"])())
    };
};
}),
"[project]/client/app/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/registerSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/loginSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/profileSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/hooks/useProfile.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const useAuth = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const registerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.register);
    const loginState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.login);
    const { getCurrentProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProfile"])();
    const handleRegister = async (userData)=>{
        try {
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerUser"])(userData)).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Registration successful! Please log in.',
                duration: 5000
            }));
            return result;
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: error || 'Registration failed',
                duration: 5000
            }));
        }
    };
    const handleLogin = async (credentials)=>{
        try {
            const res = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginUser"])(credentials)).unwrap();
            if (res) getCurrentProfile();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'Login successful!',
                duration: 5000
            }));
            return res;
        } catch (error) {
            const errorMsg = error;
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: errorMsg?.message || 'Login failed',
                duration: 5000
            }));
        }
    };
    const handleLogout = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearProfile"])();
        // Clear localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        console.log('After logout - localStorage cleared'); // Debug log
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
            id: `${Date.now()}`,
            type: 'info',
            message: 'Logged out successfully',
            duration: 3000
        }));
    };
    const handleDeleteUser = async ()=>{
        try {
            const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteUser"])()).unwrap();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'success',
                message: 'User deleted successfully',
                duration: 5000
            }));
            return result;
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAlert"])({
                id: `${Date.now()}`,
                type: 'error',
                message: error || 'User deletion failed',
                duration: 5000
            }));
        }
    };
    return {
        // Register
        register: handleRegister,
        registerLoading: registerState.isLoading,
        registerError: registerState.error,
        registerUser: registerState.user,
        clearRegisterState: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearRegisterState"])()),
        clearRegisterError: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearError"])()),
        // Login
        login: handleLogin,
        loginLoading: loginState.isLoading,
        loginError: loginState.error,
        user: loginState.user,
        isAuthenticated: loginState.isAuthenticated,
        logout: handleLogout,
        deleteUser: handleDeleteUser,
        clearLoginError: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearError"])()),
        loadUserFromToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((user)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadUserFromToken"])(user)), [
            dispatch
        ])
    };
};
}),
"[project]/client/app/components/layouts/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/cg/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/tb/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/hooks/useAuth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const Navbar = ()=>{
    const { isAuthenticated, user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // Placeholder for auth state
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "navbar bg-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: " self-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-4xl flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCode"], {
                            className: " mx-1"
                        }, void 0, false, {
                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                            lineNumber: 21,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        "DevConnector"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: " md:text-xl flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profiles",
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiUserCommunityLine"], {}, void 0, false, {
                                    fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                    lineNumber: 30,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Developers"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                            lineNumber: 27,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/posts",
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoMdChatbubbles"], {}, void 0, false, {
                                    fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Posts"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                            lineNumber: 35,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: '/dashboard',
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CgProfile"], {}, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 48,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hide-sm",
                                            children: user?.name
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                lineNumber: 44,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>logout(),
                                    className: "flex items-center gap-1",
                                    type: "button",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosLogOut"], {}, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 57,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hide-sm",
                                            children: "Log out"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 58,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                lineNumber: 52,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    className: "flex items-center gap-1",
                                    type: "button",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoCreateOutline"], {}, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 69,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: 'hide-sm',
                                            children: "Register"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 70,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                    lineNumber: 65,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "flex items-center gap-1",
                                    type: " button",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbLogin"], {}, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 78,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: 'hide-sm',
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                            lineNumber: 79,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/components/layouts/Navbar.tsx",
                lineNumber: 25,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/components/layouts/Navbar.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/client/app/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/loginSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/registerSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/profileSlice.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        alert: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        register: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$registerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        login: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        posts: postReducer
    }
});
}),
"[project]/client/app/components/AuthInitializer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "AuthInitializer",
    ()=>AuthInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$loginSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/loginSlice.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function AuthInitializer() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const token = undefined;
    }, [
        dispatch
    ]);
    return null;
}
}),
"[project]/client/app/Providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$components$2f$AuthInitializer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/components/AuthInitializer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$components$2f$AuthInitializer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthInitializer"], {}, void 0, false, {
                fileName: "[project]/client/app/Providers.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/Providers.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
}
}),
"[project]/client/app/components/Alert.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Alert = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const alerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.alert.alerts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        alerts.forEach((alert)=>{
            if (alert.duration) {
                const timer = setTimeout(()=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAlert"])(alert.id));
                }, alert.duration);
                return ()=>clearTimeout(timer);
            }
        });
    }, [
        alerts,
        dispatch
    ]);
    const getAlertStyles = (type)=>{
        const baseStyles = 'p-4 mb-2 rounded-lg shadow-lg transition-all duration-300 transform';
        switch(type){
            case 'success':
                return `${baseStyles} bg-green-100 border border-green-400 text-green-700`;
            case 'error':
                return `${baseStyles} bg-red-100 border border-red-400 text-red-700`;
            case 'warning':
                return `${baseStyles} bg-yellow-100 border border-yellow-400 text-yellow-700`;
            case 'info':
                return `${baseStyles} bg-blue-100 border border-blue-400 text-blue-700`;
            default:
                return `${baseStyles} bg-gray-100 border border-gray-400 text-gray-700`;
        }
    };
    if (alerts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50 w-80 max-w-full",
        children: alerts.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: getAlertStyles(alert.type),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1",
                            children: alert.message
                        }, void 0, false, {
                            fileName: "[project]/client/app/components/Alert.tsx",
                            lineNumber: 51,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAlert"])(alert.id)),
                            className: "ml-2 text-lg font-bold hover:opacity-70 transition-opacity",
                            "aria-label": "Close alert",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/client/app/components/Alert.tsx",
                            lineNumber: 52,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/app/components/Alert.tsx",
                    lineNumber: 50,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, alert.id, false, {
                fileName: "[project]/client/app/components/Alert.tsx",
                lineNumber: 47,
                columnNumber: 6
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/client/app/components/Alert.tsx",
        lineNumber: 45,
        columnNumber: 4
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Alert;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d1b85a6a._.js.map