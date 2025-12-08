(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/app/hooks/useProfile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "useProfile",
    ()=>useProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/profileSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const useProfile = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const profileState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "useProfile.useAppSelector[profileState]": (state)=>state.profile
    }["useProfile.useAppSelector[profileState]"]);
    // Wrap in useCallback to prevent recreating on every render
    const fetchCurrentProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProfile.useCallback[fetchCurrentProfile]": async ()=>{
            try {
                const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentProfile"])()).unwrap();
                return response;
            } catch (error) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'error',
                    message: error?.message || 'Profile Error',
                    duration: 5000
                }));
            }
        }
    }["useProfile.useCallback[fetchCurrentProfile]"], [
        dispatch,
        router
    ]);
    const fetchProfileById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProfile.useCallback[fetchProfileById]": async (userId)=>{
            try {
                const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProfileById"])(userId)).unwrap();
                return response;
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
        }
    }["useProfile.useCallback[fetchProfileById]"], [
        dispatch
    ]);
    const saveProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProfile.useCallback[saveProfile]": async (profileData)=>{
            try {
                const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUpdateProfile"])(profileData)).unwrap();
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'success',
                    message: 'Profile saved successfully',
                    duration: 5000
                }));
                return response;
            } catch (error) {
                const errorMsg = error;
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'error',
                    message: errorMsg || 'Failed to save profile',
                    duration: 5000
                }));
                throw error;
            }
        }
    }["useProfile.useCallback[saveProfile]"], [
        dispatch
    ]);
    const addExperienceToProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProfile.useCallback[addExperienceToProfile]": async (experienceData)=>{
            try {
                const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExperience"])(experienceData)).unwrap();
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'success',
                    message: 'Experience added successfully',
                    duration: 5000
                }));
                return response;
            } catch (error) {
                const errorMsg = error;
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'error',
                    message: errorMsg || 'Failed to add experience',
                    duration: 5000
                }));
                throw error;
            }
        }
    }["useProfile.useCallback[addExperienceToProfile]"], [
        dispatch
    ]);
    const useDeleteExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProfile.useCallback[useDeleteExperience]": async (expId)=>{
            try {
                const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteExperience"])(expId)).unwrap();
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'success',
                    message: 'Experience deleted successfully',
                    duration: 5000
                }));
                return response;
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
        }
    }["useProfile.useCallback[useDeleteExperience]"], [
        dispatch
    ]);
    const addEducationToProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProfile.useCallback[addEducationToProfile]": async (educationData)=>{
            try {
                const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEducation"])(educationData)).unwrap();
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'success',
                    message: 'Education added successfully',
                    duration: 5000
                }));
                return response;
            } catch (error) {
                const errorMsg = error;
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'error',
                    message: errorMsg || 'Failed to add education',
                    duration: 5000
                }));
                throw error;
            }
        }
    }["useProfile.useCallback[addEducationToProfile]"], [
        dispatch
    ]);
    const useDeleteEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProfile.useCallback[useDeleteEducation]": async (eduId)=>{
            try {
                const response = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteEducation"])(eduId)).unwrap();
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAlert"])({
                    id: `${Date.now()}`,
                    type: 'success',
                    message: 'Education deleted successfully',
                    duration: 5000
                }));
                return response;
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
        }
    }["useProfile.useCallback[useDeleteEducation]"], [
        dispatch
    ]);
    return {
        profile: profileState.profile,
        profiles: profileState.profiles,
        profileLoading: profileState.isLoading,
        profileError: profileState.error,
        getCurrentProfile: fetchCurrentProfile,
        getProfileById: fetchProfileById,
        createUpdateProfile: saveProfile,
        addExperience: addExperienceToProfile,
        deleteExperience: useDeleteExperience,
        addEducation: addEducationToProfile,
        deleteEducation: useDeleteEducation,
        clearProfile: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearProfile"])()),
        clearProfileError: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearError"])())
    };
};
_s(useProfile, "ohWRwFM7oFllr9uqnOBJeH201ys=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/app/(dashboard)/profile-form/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/hooks/useProfile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ProfileForm = ()=>{
    _s();
    const { createUpdateProfile, profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: profile?.status || '',
        company: profile?.company || '',
        website: profile?.website || '',
        location: profile?.location || '',
        bio: profile?.bio || '',
        githubusername: profile?.githubusername || '',
        skills: profile?.skills.toString() || '',
        youtube: profile?.social?.youtube || '',
        facebook: profile?.social?.facebook || '',
        twitter: profile?.social?.twitter || '',
        instagram: profile?.social?.instagram || '',
        linkedin: profile?.social?.linkedin || ''
    });
    const { status, company, website, location, bio, githubusername, skills, youtube, facebook, twitter, instagram, linkedin } = formData;
    const changeHandler = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            await createUpdateProfile(formData);
        // redirect to dashboard after successful save
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "large text-primary",
                children: "Create Your Profile"
            }, void 0, false, {
                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                lineNumber: 59,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "lead",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fas fa-user"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Lets get some information to make your profile stand out"
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                lineNumber: 60,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "* required field"
            }, void 0, false, {
                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                lineNumber: 64,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "form",
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "status",
                                value: status,
                                onChange: (e)=>changeHandler(e),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "0",
                                        children: [
                                            "* ",
                                            status !== '' ? status : 'Select Professional Status'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Developer",
                                        children: "Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Junior Developer",
                                        children: "Junior Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Senior Developer",
                                        children: "Senior Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Manager",
                                        children: "Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Student or Learning",
                                        children: "Student or Learning"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Instructor",
                                        children: "Instructor or Teacher"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Intern",
                                        children: "Intern"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Other",
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 69,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "Give us an idea of where you are at in your career"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 85,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 68,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Company",
                                name: "company",
                                value: company,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 90,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "Could be your own company or one you work for"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 97,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 89,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Website",
                                name: "website",
                                value: website,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 102,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "Could be your own or a company website"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 109,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 101,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Location",
                                name: "location",
                                value: location,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 114,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "City & state suggested (eg. Boston, MA)"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 121,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 113,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "* Skills",
                                name: "skills",
                                value: skills,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 126,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 133,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 125,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Github Username",
                                name: "githubusername",
                                value: githubusername,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 138,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "If you want your latest repos and a Github link, include your username"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 145,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 137,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "A short bio of yourself",
                                name: "bio",
                                value: bio,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 151,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "form-text",
                                children: "Tell us a little about yourself"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 156,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 150,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-primary",
                                children: "Add Social Network Links"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 160,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Optional"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 161,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 159,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group social-input",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fab fa-twitter fa-2x"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 165,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Twitter URL",
                                name: "twitter",
                                value: twitter,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 166,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 164,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group social-input",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fab fa-facebook fa-2x"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 176,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Facebook URL",
                                name: "facebook",
                                value: facebook,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 177,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 175,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group social-input",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fab fa-youtube fa-2x"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 187,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "YouTube URL",
                                name: "youtube",
                                value: youtube,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 188,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 186,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group social-input",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fab fa-linkedin fa-2x"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 198,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Linkedin URL",
                                name: "linkedin",
                                value: linkedin,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 199,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 197,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group social-input",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fab fa-instagram fa-2x"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 209,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Instagram URL",
                                name: "instagram",
                                value: instagram,
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                                lineNumber: 210,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 208,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        children: "submit"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 218,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "btn btn-light my-1",
                        href: "/dashboard",
                        children: "Go Back"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                        lineNumber: 223,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
                lineNumber: 65,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/(dashboard)/profile-form/page.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfileForm, "Hz8idWN+L3hgbO2RfflycFqDt3w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"]
    ];
});
_c = ProfileForm;
const __TURBOPACK__default__export__ = ProfileForm;
var _c;
__turbopack_context__.k.register(_c, "ProfileForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_app_e3e8aed8._.js.map