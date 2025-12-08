(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/app/hooks/useProfile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "useProfile",
    ()=>useProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$alertSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/alertSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$slices$2f$profileSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/store/slices/profileSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const useProfile = ()=>{
    _s();
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
        dispatch
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
_s(useProfile, "cUlU3LfFt6/wEBe959P0O+2qcdY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/app/(dashboard)/add-education/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/hooks/useProfile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AddEducation = ()=>{
    _s();
    const [Checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: Checked,
        description: ''
    });
    const { addEducation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"])();
    const changeHandler = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            await addEducation(formData);
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
                children: "Add Your Education"
            }, void 0, false, {
                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                lineNumber: 37,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "lead",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fas fa-graduation-cap"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 39,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Add any school, bootcamp, etc that you have attended"
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                lineNumber: 38,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "* = required field"
            }, void 0, false, {
                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                lineNumber: 42,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "form",
                onSubmit: submitHandler,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "* School or Bootcamp",
                            name: "school",
                            onChange: (e)=>changeHandler(e),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                            lineNumber: 47,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 46,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "* Degree or Certificate",
                            name: "degree",
                            onChange: (e)=>changeHandler(e),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                            lineNumber: 56,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 55,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Field Of Study",
                            name: "fieldofstudy",
                            onChange: (e)=>changeHandler(e)
                        }, void 0, false, {
                            fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                            lineNumber: 65,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "From Date"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                                lineNumber: 73,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                name: "from",
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                                lineNumber: 74,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 72,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    name: "current",
                                    checked: Checked,
                                    onChange: ()=>setChecked(!Checked)
                                }, void 0, false, {
                                    fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                ' ',
                                "Current School or Bootcamp"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                            lineNumber: 81,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 80,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "To Date"
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                                lineNumber: 92,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                name: "to",
                                onChange: (e)=>changeHandler(e)
                            }, void 0, false, {
                                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                                lineNumber: 93,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 91,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "description",
                            cols: 30,
                            rows: 5,
                            onChange: (e)=>changeHandler(e),
                            placeholder: "Program Description"
                        }, void 0, false, {
                            fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                            lineNumber: 100,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 99,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 107,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "btn btn-light my-1",
                        href: "/dashboard",
                        children: "Go Back"
                    }, void 0, false, {
                        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                        lineNumber: 108,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/(dashboard)/add-education/page.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddEducation, "QG/0hSJvXrSURWrWExTFH/hePWY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"]
    ];
});
_c = AddEducation;
const __TURBOPACK__default__export__ = AddEducation;
var _c;
__turbopack_context__.k.register(_c, "AddEducation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_app_f611db3d._.js.map