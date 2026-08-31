module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/randomizer.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    const [survivorLoadout, setSurvivorLoadout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [killerLoadout, setKillerLoadout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("both");
    const [omitIds, setOmitIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const handleRandomizeSurvivor = (newOmit)=>{
        const newOmitIds = newOmit ? new Set(omitIds).add(newOmit) : new Set();
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomizeSurvivor"])(Array.from(newOmitIds));
        if (result) {
            setSurvivorLoadout({
                ...result,
                offering: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomOffering"])("survivor")
            });
            if (newOmit) setOmitIds(newOmitIds);
        }
    };
    const handleRandomizeKiller = (newOmit)=>{
        const newOmitIds = newOmit ? new Set(omitIds).add(newOmit) : new Set();
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomizeKiller"])(Array.from(newOmitIds));
        if (result) {
            setKillerLoadout({
                ...result,
                offering: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomOffering"])("killer")
            });
            if (newOmit) setOmitIds(newOmitIds);
        }
    };
    const handleRandomizeAll = ()=>{
        setOmitIds(new Set());
        const survResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomizeSurvivor"])();
        const killResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomizeKiller"])();
        if (survResult) {
            setSurvivorLoadout({
                ...survResult,
                offering: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomOffering"])("survivor")
            });
        }
        if (killResult) {
            setKillerLoadout({
                ...killResult,
                offering: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomOffering"])("killer")
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-slate-900 to-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold text-white mb-4",
                            children: "DBD Randomizer"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-300",
                            children: "Ad-free, lightweight randomizer for Dead by Daylight"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4 mb-8 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActiveTab("survivor");
                                setOmitIds(new Set());
                            },
                            className: `px-6 py-2 rounded-lg font-bold transition ${activeTab === "survivor" ? "bg-blue-600 text-white" : "bg-slate-700 text-gray-300 hover:bg-slate-600"}`,
                            children: "🎮 Survivor"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActiveTab("killer");
                                setOmitIds(new Set());
                            },
                            className: `px-6 py-2 rounded-lg font-bold transition ${activeTab === "killer" ? "bg-red-600 text-white" : "bg-slate-700 text-gray-300 hover:bg-slate-600"}`,
                            children: "🔪 Killer"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActiveTab("both");
                                setOmitIds(new Set());
                            },
                            className: `px-6 py-2 rounded-lg font-bold transition ${activeTab === "both" ? "bg-purple-600 text-white" : "bg-slate-700 text-gray-300 hover:bg-slate-600"}`,
                            children: "⚙️ Both"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        (activeTab === "survivor" || activeTab === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800 rounded-lg p-8 mb-8 border border-blue-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white mb-6",
                                    children: "Survivor Randomizer"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mb-6 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleRandomizeSurvivor(),
                                            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition",
                                            children: "🎲 Randomize"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>survivorLoadout && handleRandomizeSurvivor(),
                                            className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50",
                                            disabled: !survivorLoadout,
                                            children: "↻ Respin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>survivorLoadout && handleRandomizeSurvivor(survivorLoadout.survivor.id),
                                            className: "bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50",
                                            disabled: !survivorLoadout,
                                            children: "↻ Omit & Respin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this),
                                survivorLoadout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-700 rounded p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white mb-2",
                                                    children: survivorLoadout.survivor.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 mb-2",
                                                    children: survivorLoadout.survivor.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400",
                                                    children: [
                                                        "Difficulty: ",
                                                        survivorLoadout.survivor.difficulty
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-bold text-white mb-2",
                                                    children: "Perks (4)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-4 gap-2",
                                                    children: survivorLoadout.perks.map((perk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-700 rounded p-3 hover:bg-slate-600 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white font-semibold text-sm",
                                                                    children: perk.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-300",
                                                                    children: perk.effect
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, perk.id, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this),
                                        survivorLoadout.item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-bold text-white mb-2",
                                                    children: "Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-700 rounded p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-semibold",
                                                            children: survivorLoadout.item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-300 mb-2",
                                                            children: survivorLoadout.item.effect
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 mb-2",
                                                            children: [
                                                                "Rarity: ",
                                                                survivorLoadout.item.rarity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 25
                                                        }, this),
                                                        survivorLoadout.addons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t border-slate-600 pt-2 mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold text-yellow-300 mb-1",
                                                                    children: "Add-ons:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: survivorLoadout.addons.map((addon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "bg-slate-600 text-xs px-2 py-1 rounded",
                                                                            children: addon
                                                                        }, addon, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 21
                                        }, this),
                                        survivorLoadout.offering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-bold text-white mb-2",
                                                    children: "Offering"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-700 rounded p-3 border-l-4 border-yellow-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-semibold",
                                                            children: survivorLoadout.offering.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-300",
                                                            children: survivorLoadout.offering.effect
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 mt-1",
                                                            children: [
                                                                "Rarity: ",
                                                                survivorLoadout.offering.rarity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        (activeTab === "killer" || activeTab === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800 rounded-lg p-8 mb-8 border border-red-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white mb-6",
                                    children: "Killer Randomizer"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mb-6 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleRandomizeKiller(),
                                            className: "bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition",
                                            children: "🎲 Randomize"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>killerLoadout && handleRandomizeKiller(),
                                            className: "bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50",
                                            disabled: !killerLoadout,
                                            children: "↻ Respin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>killerLoadout && handleRandomizeKiller(killerLoadout.killer.id),
                                            className: "bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50",
                                            disabled: !killerLoadout,
                                            children: "↻ Omit & Respin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                killerLoadout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-700 rounded p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white mb-2",
                                                    children: killerLoadout.killer.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 mb-2",
                                                    children: killerLoadout.killer.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400 mb-1",
                                                    children: [
                                                        "Power: ",
                                                        killerLoadout.killer.power
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400",
                                                    children: [
                                                        "Difficulty: ",
                                                        killerLoadout.killer.difficulty
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-bold text-white mb-2",
                                                    children: "Perks (4)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-4 gap-2",
                                                    children: killerLoadout.perks.map((perk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-700 rounded p-3 hover:bg-slate-600 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white font-semibold text-sm",
                                                                    children: perk.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-300",
                                                                    children: perk.effect
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, perk.id, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-bold text-white mb-2",
                                                    children: "Add-ons"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                                                    children: killerLoadout.addons.map((addon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-700 rounded p-3 hover:bg-slate-600 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white font-semibold",
                                                                    children: addon.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-300",
                                                                    children: addon.effect
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-400 mt-1",
                                                                    children: [
                                                                        "Rarity: ",
                                                                        addon.rarity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, addon.id, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, this),
                                        killerLoadout.offering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-bold text-white mb-2",
                                                    children: "Offering"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-700 rounded p-3 border-l-4 border-red-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-semibold",
                                                            children: killerLoadout.offering.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-300",
                                                            children: killerLoadout.offering.effect
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 mt-1",
                                                            children: [
                                                                "Rarity: ",
                                                                killerLoadout.offering.rarity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this),
                        activeTab === "both" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleRandomizeAll,
                                className: "bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition",
                                children: "🎲 Randomize Full Game"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 400,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 399,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800 rounded-lg p-8 border border-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-white mb-4",
                                    children: "Database Stats"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-5 gap-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-blue-400",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSurvivors"])().length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400",
                                                    children: "Survivors"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-red-400",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$randomizer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKillers"])().length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400",
                                                    children: "Killers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-yellow-400",
                                                    children: "30+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400",
                                                    children: "Perks"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-green-400",
                                                    children: "15+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400",
                                                    children: "Items"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold text-purple-400",
                                                    children: "15+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400",
                                                    children: "Offerings"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data/addons.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "scratched_mirror",
        "name": "Scratched Mirror",
        "type": "Power Add-on",
        "killer": "The Wraith",
        "rarity": "Ultra Rare",
        "effect": "See survivors while cloaked",
        "description": "While cloaked, you can see the auras of survivors within 16 meters."
    },
    {
        "id": "bone_clapper",
        "name": "Bone Clapper",
        "type": "Power Add-on",
        "killer": "The Wraith",
        "rarity": "Common",
        "effect": "Loosen bell",
        "description": "The Wailing Bell causes 0% terror radius reduction to your uncloak."
    },
    {
        "id": "carburetor_tuning_kit",
        "name": "Carburetor Tuning Kit",
        "type": "Power Add-on",
        "killer": "The Hillbilly",
        "rarity": "Uncommon",
        "effect": "Faster chainsaw rev",
        "description": "Reduce the charge time of the Chainsaw by 10%."
    },
    {
        "id": "iridescent_stone",
        "name": "Iridescent Stone",
        "type": "Power Add-on",
        "killer": "The Hillbilly",
        "rarity": "Ultra Rare",
        "effect": "Cross-map chainsaw",
        "description": "Increase the speed of the Chainsaw sprint by 15% and grant the ability to boost farther."
    },
    {
        "id": "queen_walkers_emblem",
        "name": "Queen Walker's Emblem",
        "type": "Power Add-on",
        "killer": "The Nurse",
        "rarity": "Uncommon",
        "effect": "Faster blink",
        "description": "Reduce the blink action duration by 10%."
    },
    {
        "id": "amangeaux_ward",
        "name": "Amangeaux Ward",
        "type": "Power Add-on",
        "killer": "The Nurse",
        "rarity": "Rare",
        "effect": "See during blinks",
        "description": "Reveal survivor auras within 24 meters while blinking."
    },
    {
        "id": "iridescent_head",
        "name": "Iridescent Head",
        "type": "Power Add-on",
        "killer": "The Huntress",
        "rarity": "Ultra Rare",
        "effect": "One-shot hatchets",
        "description": "Thrown hatchets down survivors in a single hit but caps your hatchet count at 1."
    },
    {
        "id": "shattered_piece_of_mirrors",
        "name": "Shattered Piece of Mirrors",
        "type": "Power Add-on",
        "killer": "Michael Myers",
        "rarity": "Rare",
        "effect": "Extend Evil Within range",
        "description": "Increase the range of the Evil Within by 6 meters."
    },
    {
        "id": "memorial_flower",
        "name": "Memorial Flower",
        "type": "Power Add-on",
        "killer": "The Spirit",
        "rarity": "Uncommon",
        "effect": "Faster phasing",
        "description": "Reduce the phase duration cooldown by 10%."
    },
    {
        "id": "prayer_beads_bracelet",
        "name": "Prayer Beads Bracelet",
        "type": "Power Add-on",
        "killer": "The Spirit",
        "rarity": "Rare",
        "effect": "Silent phasing",
        "description": "Survivors receive no audio notification when you start phasing."
    },
    {
        "id": "blood_amber",
        "name": "Blood Amber",
        "type": "Power Add-on",
        "killer": "The Blight",
        "rarity": "Uncommon",
        "effect": "Faster rush",
        "description": "Increase the movement speed of the Lethal Dash by 5%."
    },
    {
        "id": "blight_core",
        "name": "Blight Core",
        "type": "Power Add-on",
        "killer": "The Blight",
        "rarity": "Ultra Rare",
        "effect": "Double dash charges",
        "description": "Grant an additional charge to the Lethal Dash (maximum of 4)."
    },
    {
        "id": "rotting_pumpkin",
        "name": "Rotting Pumpkin",
        "type": "Power Add-on",
        "killer": "The Plague",
        "rarity": "Uncommon",
        "effect": "Enhanced putrification",
        "description": "Increase the range of Vile Purge projectiles by 2 meters."
    },
    {
        "id": "medical_practice_exam",
        "name": "Medical Practice Exam",
        "type": "Power Add-on",
        "killer": "Nemesis",
        "rarity": "Uncommon",
        "effect": "Faster mutation",
        "description": "Reduce the time required to mutate to the next tier by 15%."
    },
    {
        "id": "special_serum",
        "name": "Special Serum",
        "type": "Power Add-on",
        "killer": "Nemesis",
        "rarity": "Rare",
        "effect": "Increased mutation strength",
        "description": "Gain +1 to mutation progression speed per nearby survivor."
    },
    {
        "id": "bandages",
        "name": "Bandages",
        "type": "Add-on",
        "item": "Med-Kit",
        "rarity": "Common",
        "effect": "Healing efficiency",
        "description": "Increase healing efficiency by 5%."
    },
    {
        "id": "medical_tape",
        "name": "Medical Tape",
        "type": "Add-on",
        "item": "Med-Kit",
        "rarity": "Uncommon",
        "effect": "Faster healing",
        "description": "Reduce healing time by 10%."
    },
    {
        "id": "first_aid_spray",
        "name": "First Aid Spray",
        "type": "Add-on",
        "item": "Med-Kit",
        "rarity": "Uncommon",
        "effect": "Portable healing",
        "description": "Healing with this kit generates 0% exhaustion."
    }
];
}),
"[project]/lib/data/items.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "med_kit",
        "name": "Med-Kit",
        "type": "Item",
        "rarity": "Common",
        "effect": "Heal yourself and teammates",
        "description": "A medical kit containing healing supplies. Use it to heal yourself or teammates faster.",
        "addons": [
            "bandages",
            "medical_tape",
            "first_aid_spray",
            "gel_accelerant",
            "styptic_agent"
        ]
    },
    {
        "id": "flashlight",
        "name": "Flashlight",
        "type": "Item",
        "rarity": "Common",
        "effect": "Blind the killer",
        "description": "A hand-held flashlight that can blind the Killer momentarily.",
        "addons": [
            "fresh_batteries",
            "high_flux_battery",
            "thick_filament_bulb"
        ]
    },
    {
        "id": "toolbox",
        "name": "Toolbox",
        "type": "Item",
        "rarity": "Uncommon",
        "effect": "Repair generators faster",
        "description": "A toolbox containing various tools to repair generators quickly.",
        "addons": [
            "filing_cabinet",
            "hacksaw",
            "yellow_lockpick"
        ]
    },
    {
        "id": "key",
        "name": "Key",
        "type": "Item",
        "rarity": "Rare",
        "effect": "Opens chests and hatch",
        "description": "A mysterious key that can open treasure chests and the hatch.",
        "addons": [
            "skeleton_key",
            "rusted_key",
            "ornate_key"
        ]
    },
    {
        "id": "map",
        "name": "Map",
        "type": "Item",
        "rarity": "Common",
        "effect": "Reveals the trial ground layout",
        "description": "A map of the trial ground showing generators, chests, and other locations.",
        "addons": [
            "old_map",
            "worn_notebook",
            "blood_stained_note"
        ]
    },
    {
        "id": "rope",
        "name": "Rope",
        "type": "Item",
        "rarity": "Uncommon",
        "effect": "Opens chests",
        "description": "A coil of rope used to open chests and retrieve items.",
        "addons": [
            "hemp_rope",
            "leather_cord",
            "twin_rope"
        ]
    },
    {
        "id": "pebble",
        "name": "Pebble",
        "type": "Item",
        "rarity": "Common",
        "effect": "Distract the killer",
        "description": "A small pebble that can be thrown to distract the Killer.",
        "addons": []
    },
    {
        "id": "broken_key",
        "name": "Broken Key",
        "type": "Item",
        "rarity": "Rare",
        "effect": "Limited hatch opening",
        "description": "A damaged key with limited charges to open the hatch.",
        "addons": [
            "shiny_fragment",
            "crystal_fragment",
            "dull_fragment"
        ]
    },
    {
        "id": "garden_rake",
        "name": "Garden Rake",
        "type": "Item",
        "rarity": "Common",
        "effect": "Scratch marks effect",
        "description": "A garden tool that slightly reduces scratch mark clarity.",
        "addons": []
    },
    {
        "id": "lockpick",
        "name": "Lockpick",
        "type": "Item",
        "rarity": "Uncommon",
        "effect": "Unlock chests",
        "description": "A lockpick set for opening chests and locks.",
        "addons": [
            "skeleton_key",
            "rusted_lockpick"
        ]
    }
];
}),
"[project]/lib/data/killers.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "trapper",
        "name": "The Trapper",
        "realName": "Evan MacMillan",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "power": "Bear Traps",
        "difficulty": "Medium",
        "perks": [
            "unnerving_presence",
            "hex_the_third_seal",
            "agitation"
        ],
        "description": "A hunter using elaborate traps."
    },
    {
        "id": "wraith",
        "name": "The Wraith",
        "realName": "Philip Ojomo",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "power": "Wailing Bell",
        "difficulty": "Easy",
        "perks": [
            "bloodhound",
            "shadowborn",
            "predator"
        ],
        "description": "A vigilante who hides in invisibility."
    },
    {
        "id": "hillbilly",
        "name": "The Hillbilly",
        "realName": "Max Thompson Jr.",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "power": "Chainsaw",
        "difficulty": "Medium",
        "perks": [
            "hex_make_your_choice",
            "enduring",
            "tinkerer"
        ],
        "description": "A killer with a chainsaw."
    },
    {
        "id": "nurse",
        "name": "The Nurse",
        "realName": "Sally Smithson",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "power": "Spencer's Last Breath",
        "difficulty": "Hard",
        "perks": [
            "hex_ruin",
            "stridor",
            "thanatophobia"
        ],
        "description": "A nurse who blinks between locations."
    },
    {
        "id": "shape",
        "name": "The Shape",
        "realName": "Michael Myers",
        "chapter": "Halloween",
        "releaseDate": "2018-09-05",
        "power": "Evil Within",
        "difficulty": "Hard",
        "perks": [
            "hex_ruin",
            "hex_devour_hope",
            "dying_light"
        ],
        "description": "An unstoppable killer driven by pure evil."
    },
    {
        "id": "huntress",
        "name": "The Huntress",
        "realName": "Anna",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-10-04",
        "power": "Hatchets",
        "difficulty": "Medium",
        "perks": [
            "hex_ruin",
            "territorial_imperative"
        ],
        "description": "A hunter with deadly hatchets."
    },
    {
        "id": "cannibal",
        "name": "The Cannibal",
        "realName": "Bubba Sawyer",
        "chapter": "Texas Chainsaw Massacre",
        "releaseDate": "2016-12-14",
        "power": "Chainsaw",
        "difficulty": "Medium",
        "perks": [
            "barbecue_and_chili",
            "knock_out"
        ],
        "description": "A deranged killer with a chainsaw."
    },
    {
        "id": "nightmare",
        "name": "A Nightmare on Elm Street",
        "realName": "Freddy Krueger",
        "chapter": "A Nightmare on Elm Street",
        "releaseDate": "2017-11-08",
        "power": "Dream World",
        "difficulty": "Hard",
        "perks": [
            "remember_me",
            "blood_warden",
            "fire_up"
        ],
        "description": "A dream demon who rules the nightmare realm."
    },
    {
        "id": "spirit",
        "name": "The Spirit",
        "realName": "Rin Yamaoka",
        "chapter": "Curtain Call",
        "releaseDate": "2017-12-13",
        "power": "Yamaoka's Haunting",
        "difficulty": "Hard",
        "perks": [
            "hex_haunted_ground",
            "rancor",
            "play_with_your_food"
        ],
        "description": "A vengeful spirit who phases through reality."
    },
    {
        "id": "legion",
        "name": "The Legion",
        "realName": "Frank Morrison",
        "chapter": "Dead by Daylight",
        "releaseDate": "2017-09-12",
        "power": "Feral Frenzy",
        "difficulty": "Medium",
        "perks": [
            "discordance",
            "mad_grit"
        ],
        "description": "A group of adolescent killers."
    },
    {
        "id": "plague",
        "name": "The Plague",
        "realName": "Adiris",
        "chapter": "Dead by Daylight",
        "releaseDate": "2019-03-19",
        "power": "Vile Purge",
        "difficulty": "Medium",
        "perks": [
            "infectious_fright",
            "corrupt_intervention",
            "dark_devotion"
        ],
        "description": "A priestess spreading pestilence."
    },
    {
        "id": "demogorgon",
        "name": "The Demogorgon",
        "realName": "Demogorgon",
        "chapter": "Stranger Things",
        "releaseDate": "2019-11-06",
        "power": "Demonic Claws",
        "difficulty": "Medium",
        "perks": [
            "surge",
            "monitor_and_abuse"
        ],
        "description": "A beast from the Upside Down."
    },
    {
        "id": "oni",
        "name": "The Oni",
        "realName": "Kazan Yamaoka",
        "chapter": "Cursed Legacy",
        "releaseDate": "2019-11-19",
        "power": "Yamaoka's Wrath",
        "difficulty": "Hard",
        "perks": [
            "zanshin_tactic",
            "blood_security"
        ],
        "description": "A demon of vengeance and rage."
    },
    {
        "id": "blight",
        "name": "The Blight",
        "realName": "Talbot Grady",
        "chapter": "Chains of Hate",
        "releaseDate": "2020-07-07",
        "power": "Compound 21",
        "difficulty": "Hard",
        "perks": [
            "hex_undying",
            "blood_echo",
            "corrupted_intervention"
        ],
        "description": "A scientist enhanced by serum."
    },
    {
        "id": "deathslinger",
        "name": "The Deathslinger",
        "realName": "Caleb Quinn",
        "chapter": "Special Delivery",
        "releaseDate": "2020-04-14",
        "power": "Redeemer",
        "difficulty": "Hard",
        "perks": [
            "hex_retribution",
            "dead_man_switch"
        ],
        "description": "A gunslinger with a harpoon."
    },
    {
        "id": "executioner",
        "name": "Pyramid Head",
        "realName": "The Executioner",
        "chapter": "Silent Hill",
        "releaseDate": "2021-06-16",
        "power": "Rites of Judgement",
        "difficulty": "Hard",
        "perks": [
            "deathbound",
            "trail_of_torment"
        ],
        "description": "An executioner from Silent Hill."
    },
    {
        "id": "nemesis",
        "name": "Nemesis",
        "realName": "Nemesis T-Type",
        "chapter": "Resident Evil",
        "releaseDate": "2021-04-14",
        "power": "T-Virus",
        "difficulty": "Hard",
        "perks": [
            "lethal_pursuer",
            "hysteria",
            "superior_anatomy"
        ],
        "description": "A bioweapon of terrible power."
    },
    {
        "id": "twins",
        "name": "The Twins",
        "realName": "Victor & Charlotte Deshayes",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-02-02",
        "power": "Fraternal Bond",
        "difficulty": "Hard",
        "perks": [
            "incapacitate",
            "potential"
        ],
        "description": "Conjoined twins with horrifying origins."
    },
    {
        "id": "trickster",
        "name": "The Trickster",
        "realName": "Ji-Woon Hak",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-03-30",
        "power": "Showstopper",
        "difficulty": "Medium",
        "perks": [
            "no_time_to_heal",
            "crowd_control"
        ],
        "description": "A K-pop idol turned killer."
    },
    {
        "id": "wesker",
        "name": "Wesker",
        "realName": "Albert Wesker",
        "chapter": "Resident Evil",
        "releaseDate": "2024-10-02",
        "power": "Virulent Bound",
        "difficulty": "Hard",
        "perks": [
            "awakening",
            "superior_anatomy"
        ],
        "description": "A scientist with superhuman abilities."
    },
    {
        "id": "sadako",
        "name": "Sadako",
        "realName": "Sadako Yamamura",
        "chapter": "Ring",
        "releaseDate": "2019-10-02",
        "power": "Cursed Tape",
        "difficulty": "Medium",
        "perks": [
            "ringu",
            "recursion"
        ],
        "description": "A vengeful spirit from the Ring."
    },
    {
        "id": "cenobite",
        "name": "The Cenobite",
        "realName": "Elliott Spencer",
        "chapter": "Dead by Daylight",
        "releaseDate": "2022-06-14",
        "power": "Lament Configuration",
        "difficulty": "Hard",
        "perks": [
            "gift_of_pain",
            "deadlock"
        ],
        "description": "A sadomasochistic being from Hell."
    },
    {
        "id": "artist",
        "name": "The Artist",
        "realName": "Carmina Mora",
        "chapter": "Dead by Daylight",
        "releaseDate": "2022-05-17",
        "power": "Dire Crows",
        "difficulty": "Hard",
        "perks": [
            "hex_pentimento",
            "repressed_alliance"
        ],
        "description": "An occultist with dark powers."
    },
    {
        "id": "onryo",
        "name": "Onryo",
        "realName": "Sadako",
        "chapter": "Dead by Daylight",
        "releaseDate": "2023-01-31",
        "power": "Cursed Gaze",
        "difficulty": "Medium",
        "perks": [
            "scourge_hook_floods_of_wrath"
        ],
        "description": "A vengeful spirit from Japanese horror."
    },
    {
        "id": "skull_merchant",
        "name": "The Skull Merchant",
        "realName": "Adriana",
        "chapter": "Dead by Daylight",
        "releaseDate": "2023-02-14",
        "power": "Skull Echoes",
        "difficulty": "Medium",
        "perks": [
            "gearhead",
            "hoarder"
        ],
        "description": "A criminal mastermind."
    },
    {
        "id": "dredge",
        "name": "The Dredge",
        "realName": "The Dredge",
        "chapter": "Dead by Daylight",
        "releaseDate": "2022-09-06",
        "power": "Reign of Darkness",
        "difficulty": "Hard",
        "perks": [
            "scourge_hook_crowd_control"
        ],
        "description": "A creature of shadow and darkness."
    }
];
}),
"[project]/lib/data/offerings.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "strode_house_basement_key",
        "name": "Strode House Basement Key",
        "type": "Survivor Offering",
        "rarity": "Uncommon",
        "effect": "Increase chance of being sent to Haddonfield",
        "description": "An old key from Laurie's house. Use this offering to increase the likelihood of spawning on Haddonfield."
    },
    {
        "id": "saltwood_dinner_set",
        "name": "Saltwood Dinner Set",
        "type": "Survivor Offering",
        "rarity": "Common",
        "effect": "Increase bloodpoints from repairs",
        "description": "A fine china set. Grants +25% bonus Objective bloodpoints."
    },
    {
        "id": "the_last_will",
        "name": "The Last Will",
        "type": "Survivor Offering",
        "rarity": "Rare",
        "effect": "Protect survivors at the end game",
        "description": "A final testament. Survivors who haven't been hooked receive additional protection during end game collapse."
    },
    {
        "id": "escape_cake",
        "name": "Escape Cake",
        "type": "Survivor Offering",
        "rarity": "Uncommon",
        "effect": "Increase all bloodpoints",
        "description": "A delicious cake. Grants +25% bonus bloodpoints for all categories."
    },
    {
        "id": "bloody_party_streamers",
        "name": "Bloody Party Streamers",
        "type": "Killer Offering",
        "rarity": "Uncommon",
        "effect": "Increase bloodpoints for all players",
        "description": "Festive decorations. All players earn +25% bonus bloodpoints."
    },
    {
        "id": "ebony_mori",
        "name": "Ebony Mori",
        "type": "Killer Offering",
        "rarity": "Very Rare",
        "effect": "Eliminate survivors without the hatch",
        "description": "A black candle. Grants the ability to sacrifice any survivor."
    },
    {
        "id": "ivory_mori",
        "name": "Ivory Mori",
        "type": "Killer Offering",
        "rarity": "Rare",
        "effect": "Sacrifice dying survivors",
        "description": "A white candle. Grants the ability to sacrifice survivors who are in a dying state."
    },
    {
        "id": "realm_beyond_offering",
        "name": "The Realm Beyond",
        "type": "Survivor Offering",
        "rarity": "Very Rare",
        "effect": "Transcendence",
        "description": "A mysterious offering. Grants the ability to see beyond death."
    },
    {
        "id": "nectar_of_the_fog",
        "name": "Nectar of the Fog",
        "type": "Killer Offering",
        "rarity": "Common",
        "effect": "Increase killer speed",
        "description": "A strange substance. Grants +5% movement speed."
    },
    {
        "id": "old_coin",
        "name": "Old Coin",
        "type": "Survivor Offering",
        "rarity": "Common",
        "effect": "Luck-based bonus",
        "description": "An antique coin. Grants a random bonus bloodpoint boost."
    },
    {
        "id": "picture_of_the_twins",
        "name": "Picture of the Twins",
        "type": "Survivor Offering",
        "rarity": "Rare",
        "effect": "Family reunion",
        "description": "A photograph of siblings. Grants enhanced perception of nearby survivors."
    },
    {
        "id": "scourge_hook_offering",
        "name": "Hex: Scourge Hook",
        "type": "Killer Offering",
        "rarity": "Rare",
        "effect": "Cursed hooks",
        "description": "Corruption spreads to the hooks. Hooked survivors suffer from afflictions."
    },
    {
        "id": "survivor_pudding",
        "name": "Survivor Pudding",
        "type": "Survivor Offering",
        "rarity": "Uncommon",
        "effect": "Reveal killer",
        "description": "A sweet treat. Survivors see the killer's aura periodically."
    },
    {
        "id": "killer_pudding",
        "name": "Killer Pudding",
        "type": "Killer Offering",
        "rarity": "Uncommon",
        "effect": "Find survivors",
        "description": "A bitter brew. See survivor auras for the first 30 seconds."
    },
    {
        "id": "resilience_offering",
        "name": "Offering of Resilience",
        "type": "Survivor Offering",
        "rarity": "Common",
        "effect": "Stealth bonus",
        "description": "A token of perseverance. Grants increased stealth for the trial."
    }
];
}),
"[project]/lib/data/perks.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "decisive_strike",
        "name": "Decisive Strike",
        "type": "Survivor",
        "character": "Laurie Strode",
        "rarity": "Rare",
        "effect": "Escape the Killer's grasp",
        "cooldown": 60,
        "description": "When being carried by the Killer, press the Active Ability button when at the right moment to escape their grasp. Causes 5% exhaustion of your Sprint Burst."
    },
    {
        "id": "self_care",
        "name": "Self-Care",
        "type": "Survivor",
        "character": "Cheryl Mason",
        "rarity": "Uncommon",
        "effect": "Heal yourself",
        "description": "Unlock the ability to heal yourself without needing a Med-Kit, but at a reduced rate."
    },
    {
        "id": "spine_chill",
        "name": "Spine Chill",
        "type": "Survivor",
        "character": "Bill Overbeck",
        "rarity": "Uncommon",
        "effect": "Alerts you when Killer is nearby",
        "description": "When the Killer comes within 12 meters, the Perk activates, revealing their presence."
    },
    {
        "id": "bond",
        "name": "Bond",
        "type": "Survivor",
        "character": "Quentin Smith",
        "rarity": "Uncommon",
        "effect": "Reveal teammates",
        "description": "Reveals the location of teammates within 28 meters of you."
    },
    {
        "id": "unbreakable",
        "name": "Unbreakable",
        "type": "Survivor",
        "character": "Bill Overbeck",
        "rarity": "Rare",
        "effect": "Recover from broken status",
        "description": "Recover from the Broken status effect without needing external intervention."
    },
    {
        "id": "borrowed_time",
        "name": "Borrowed Time",
        "type": "Survivor",
        "character": "Bill Overbeck",
        "rarity": "Rare",
        "effect": "Protect teammates from being hit",
        "description": "After unhooking a teammate, they are protected from being damaged for 12 seconds."
    },
    {
        "id": "inner_strength",
        "name": "Inner Strength",
        "type": "Survivor",
        "character": "Nancy Wheeler",
        "rarity": "Rare",
        "effect": "Heal inside lockers",
        "description": "While in a locker, you can enter a meditative state and heal yourself without a Med-Kit."
    },
    {
        "id": "lucky_break",
        "name": "Lucky Break",
        "type": "Survivor",
        "character": "Claire Redfield",
        "rarity": "Rare",
        "effect": "Hide scratch marks",
        "description": "Scratch marks you leave are hidden for 80 seconds after entering the injured state."
    },
    {
        "id": "blast_mine",
        "name": "Blast Mine",
        "type": "Survivor",
        "character": "Jill Valentine",
        "rarity": "Rare",
        "effect": "Trigger explosions",
        "description": "After repairing a generator for a total of 3 seconds, press the activate ability button to set a trap."
    },
    {
        "id": "hex_ruin",
        "name": "Hex: Ruin",
        "type": "Killer",
        "character": "Rin Yamaoka",
        "rarity": "Rare",
        "effect": "Slows generator repairs",
        "description": "Causes all generators to regress at 150% speed when not being repaired."
    },
    {
        "id": "hex_devour_hope",
        "name": "Hex: Devour Hope",
        "type": "Killer",
        "character": "Michael Myers",
        "rarity": "Rare",
        "effect": "Gain power from hooks",
        "description": "Each time a survivor is hooked, gain a token and gain effects based on token count."
    },
    {
        "id": "dying_light",
        "name": "Dying Light",
        "type": "Killer",
        "character": "Michael Myers",
        "rarity": "Rare",
        "effect": "Slow survivor repair speed",
        "description": "When a survivor is in a dying state, all other survivors suffer from a stack of -3% repair speed."
    },
    {
        "id": "hex_haunted_ground",
        "name": "Hex: Haunted Ground",
        "type": "Killer",
        "character": "The Spirit",
        "rarity": "Uncommon",
        "effect": "Curse unhooking survivors",
        "description": "When a survivor unhooks another survivor, both are exposed for 60 seconds."
    },
    {
        "id": "stridor",
        "name": "Stridor",
        "type": "Killer",
        "character": "Sally Smithson",
        "rarity": "Uncommon",
        "effect": "Hear survivor breathing",
        "description": "The breathing sounds of survivors are 25% louder to you."
    },
    {
        "id": "thanatophobia",
        "name": "Thanatophobia",
        "type": "Killer",
        "character": "Sally Smithson",
        "rarity": "Rare",
        "effect": "Slow repairs when injured",
        "description": "For each survivor in an injured state, all generators repair 4% slower."
    },
    {
        "id": "bbq_chili",
        "name": "BBQ & Chili",
        "type": "Killer",
        "character": "Leatherface",
        "rarity": "Rare",
        "effect": "Reveal survivors after hook",
        "description": "After hooking a survivor, all survivors auras are revealed for 4 seconds."
    },
    {
        "id": "iron_grasp",
        "name": "Iron Grasp",
        "type": "Killer",
        "character": "Evan MacMillan",
        "rarity": "Uncommon",
        "effect": "Slow escape attempts",
        "description": "Reduce the struggle effect that causes you to lose time when carrying a survivor by 10%."
    },
    {
        "id": "agitation",
        "name": "Agitation",
        "type": "Killer",
        "character": "Evan MacMillan",
        "rarity": "Uncommon",
        "effect": "Faster carrying",
        "description": "Increase the movement speed of the Killer by 10% while carrying a survivor."
    },
    {
        "id": "enduring",
        "name": "Enduring",
        "type": "Killer",
        "character": "Max Thompson Jr.",
        "rarity": "Uncommon",
        "effect": "Reduce stun duration",
        "description": "Reduce the duration of time the Killer is stunned by 25%."
    },
    {
        "id": "tinkerer",
        "name": "Tinkerer",
        "type": "Killer",
        "character": "Max Thompson Jr.",
        "rarity": "Rare",
        "effect": "See generator alerts",
        "description": "When a survivor starts repairing a generator for the first time, you receive a notification and see the generator's aura."
    }
];
}),
"[project]/lib/data/survivors.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "dwight_fairfield",
        "name": "Dwight Fairfield",
        "realName": "Dwight Fairfield",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "difficulty": "Easy",
        "perks": [
            "leader",
            "prove_thyself",
            "spine_chill"
        ],
        "description": "A determined leader and office worker."
    },
    {
        "id": "meg_thomas",
        "name": "Meg Thomas",
        "realName": "Meg Thomas",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "difficulty": "Easy",
        "perks": [
            "sprint_burst",
            "adrenaline",
            "resilience"
        ],
        "description": "A runner and athlete known for her speed."
    },
    {
        "id": "claudette_morel",
        "name": "Claudette Morel",
        "realName": "Claudette Morel",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "difficulty": "Easy",
        "perks": [
            "self_care",
            "botany_knowledge",
            "empathy"
        ],
        "description": "A medic devoted to helping others survive."
    },
    {
        "id": "jake_park",
        "name": "Jake Park",
        "realName": "Jake Park",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-06-14",
        "difficulty": "Medium",
        "perks": [
            "sabotage",
            "calm_spirit",
            "iron_will"
        ],
        "description": "A resourceful hiker and outdoorsman."
    },
    {
        "id": "nea_karlsson",
        "name": "Nea Karlsson",
        "realName": "Nea Karlsson",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-09-07",
        "difficulty": "Medium",
        "perks": [
            "urban_evasion",
            "windows_of_opportunity",
            "streetwise"
        ],
        "description": "A rebellious graffiti artist."
    },
    {
        "id": "laurie_strode",
        "name": "Laurie Strode",
        "realName": "Laurie Strode",
        "chapter": "Halloween",
        "releaseDate": "2018-09-05",
        "difficulty": "Medium",
        "perks": [
            "decisive_strike",
            "tenacity",
            "object_of_obsession"
        ],
        "description": "A survivor of Michael Myers."
    },
    {
        "id": "david_king",
        "name": "David King",
        "realName": "David King",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-08-11",
        "difficulty": "Medium",
        "perks": [
            "dead_hard",
            "we_will_make_it",
            "no_mither"
        ],
        "description": "A tough boxer and fighter."
    },
    {
        "id": "quentin_smith",
        "name": "Quentin Smith",
        "realName": "Quentin Smith",
        "chapter": "A Nightmare on Elm Street",
        "releaseDate": "2017-11-08",
        "difficulty": "Hard",
        "perks": [
            "pharmacy",
            "vigil",
            "wake_up"
        ],
        "description": "A teen pulled into Freddy's nightmare."
    },
    {
        "id": "bill_overbeck",
        "name": "Bill Overbeck",
        "realName": "Bill Overbeck",
        "chapter": "Left 4 Dead",
        "releaseDate": "2015-02-25",
        "difficulty": "Easy",
        "perks": [
            "left_for_dead",
            "borrowed_time",
            "unbreakable"
        ],
        "description": "A hardened soldier from L4D."
    },
    {
        "id": "ace_visconti",
        "name": "Ace Visconti",
        "realName": "Ace Visconti",
        "chapter": "Dead by Daylight",
        "releaseDate": "2017-12-13",
        "difficulty": "Easy",
        "perks": [
            "up_the_ante",
            "open_handed",
            "deliverance"
        ],
        "description": "A lucky gambler and con artist."
    },
    {
        "id": "feng_min",
        "name": "Feng Min",
        "realName": "Feng Min",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-07-13",
        "difficulty": "Medium",
        "perks": [
            "alert",
            "technician",
            "balanced_landing"
        ],
        "description": "A skilled esports professional."
    },
    {
        "id": "jane_romero",
        "name": "Jane Romero",
        "realName": "Jane Romero",
        "chapter": "Dead by Daylight",
        "releaseDate": "2018-08-01",
        "difficulty": "Hard",
        "perks": [
            "poised",
            "sacrifice",
            "nemesis"
        ],
        "description": "An investigative journalist."
    },
    {
        "id": "nancy_wheeler",
        "name": "Nancy Wheeler",
        "realName": "Nancy Wheeler",
        "chapter": "Stranger Things",
        "releaseDate": "2019-11-06",
        "difficulty": "Medium",
        "perks": [
            "better_together",
            "inner_strength",
            "fixated"
        ],
        "description": "A determined teen from the Upside Down."
    },
    {
        "id": "steve_harrington",
        "name": "Steve Harrington",
        "realName": "Steve Harrington",
        "chapter": "Stranger Things",
        "releaseDate": "2019-11-06",
        "difficulty": "Easy",
        "perks": [
            "babysitter",
            "camaraderie",
            "second_wind"
        ],
        "description": "A charismatic leader and friend."
    },
    {
        "id": "cheryl_mason",
        "name": "Cheryl Mason",
        "realName": "Cheryl Mason",
        "chapter": "Silent Hill",
        "releaseDate": "2021-06-16",
        "difficulty": "Hard",
        "perks": [
            "red_herring",
            "cherish",
            "soul_guard"
        ],
        "description": "A girl tormented by Silent Hill."
    },
    {
        "id": "claire_redfield",
        "name": "Claire Redfield",
        "realName": "Claire Redfield",
        "chapter": "Resident Evil",
        "releaseDate": "2021-04-14",
        "difficulty": "Medium",
        "perks": [
            "lucky_break",
            "inner_healing",
            "protective_hit"
        ],
        "description": "A skilled survivor and explorer."
    },
    {
        "id": "jill_valentine",
        "name": "Jill Valentine",
        "realName": "Jill Valentine",
        "chapter": "Resident Evil",
        "releaseDate": "2021-04-14",
        "difficulty": "Hard",
        "perks": [
            "blast_mine",
            "counterforce"
        ],
        "description": "A tactical expert from RE."
    },
    {
        "id": "rebecca_chambers",
        "name": "Rebecca Chambers",
        "realName": "Rebecca Chambers",
        "chapter": "Resident Evil",
        "releaseDate": "2021-04-14",
        "difficulty": "Medium",
        "perks": [
            "self_aware",
            "finesse"
        ],
        "description": "A brilliant medic and scientist."
    },
    {
        "id": "chris_redfield",
        "name": "Chris Redfield",
        "realName": "Chris Redfield",
        "chapter": "Resident Evil",
        "releaseDate": "2021-04-14",
        "difficulty": "Easy",
        "perks": [
            "quick_gambit",
            "reassurance"
        ],
        "description": "A veteran soldier."
    },
    {
        "id": "ada_wong",
        "name": "Ada Wong",
        "realName": "Ada Wong",
        "chapter": "Resident Evil",
        "releaseDate": "2024-10-02",
        "difficulty": "Medium",
        "perks": [
            "rookie_spirit",
            "wiretap"
        ],
        "description": "A mysterious spy."
    },
    {
        "id": "yoichi_asakawa",
        "name": "Yoichi Asakawa",
        "realName": "Yoichi Asakawa",
        "chapter": "Ring",
        "releaseDate": "2019-10-02",
        "difficulty": "Medium",
        "perks": [
            "ringu",
            "calm_spirit"
        ],
        "description": "A boy cursed by the Ring."
    },
    {
        "id": "mikaela_reid",
        "name": "Mikaela Reid",
        "realName": "Mikaela Reid",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-02-03",
        "difficulty": "Hard",
        "perks": [
            "inner_focus",
            "parental_instinct"
        ],
        "description": "A young woman with mystical powers."
    },
    {
        "id": "vittorio_tassoni",
        "name": "Vittorio Tassoni",
        "realName": "Vittorio Tassoni",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-09-08",
        "difficulty": "Medium",
        "perks": [
            "potential",
            "quick_gambit"
        ],
        "description": "A determined filmmaker."
    },
    {
        "id": "cheryl_dempsey",
        "name": "Cheryl Dempsey",
        "realName": "Cheryl Dempsey",
        "chapter": "Dead by Daylight",
        "releaseDate": "2023-02-14",
        "difficulty": "Medium",
        "perks": [
            "appraise",
            "inner_power"
        ],
        "description": "A woman with inner strength."
    },
    {
        "id": "sable_ward",
        "name": "Sable Ward",
        "realName": "Sable Ward",
        "chapter": "Dead by Daylight",
        "releaseDate": "2023-05-30",
        "difficulty": "Medium",
        "perks": [
            "deception",
            "overcharge"
        ],
        "description": "A resourceful technician."
    },
    {
        "id": "haddie_kaur",
        "name": "Haddie Kaur",
        "realName": "Haddie Kaur",
        "chapter": "Dead by Daylight",
        "releaseDate": "2020-08-04",
        "difficulty": "Hard",
        "perks": [
            "inner_focus",
            "potential"
        ],
        "description": "A person with supernatural abilities."
    },
    {
        "id": "elodie_rakoto",
        "name": "Elodie Rakoto",
        "realName": "Elodie Rakoto",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-05-25",
        "difficulty": "Medium",
        "perks": [
            "inner_healing",
            "appraise"
        ],
        "description": "An explorer and scholar."
    },
    {
        "id": "jonah_vasquez",
        "name": "Jonah Vasquez",
        "realName": "Jonah Vasquez",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-05-25",
        "difficulty": "Medium",
        "perks": [
            "inner_strength",
            "quick_gambit"
        ],
        "description": "An investigative journalist."
    },
    {
        "id": "yun_jin_lee",
        "name": "Yun-Jin Lee",
        "realName": "Yun-Jin Lee",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-03-30",
        "difficulty": "Medium",
        "perks": [
            "self_preservation",
            "fast_track"
        ],
        "description": "A music producer."
    },
    {
        "id": "kate_denson",
        "name": "Kate Denson",
        "realName": "Kate Denson",
        "chapter": "Dead by Daylight",
        "releaseDate": "2016-10-04",
        "difficulty": "Easy",
        "perks": [
            "windows_of_opportunity",
            "dance_with_me"
        ],
        "description": "A singer and musician."
    },
    {
        "id": "cheryl_mitchell",
        "name": "Cheryl Mitchell",
        "realName": "Cheryl Mitchell",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-06-16",
        "difficulty": "Medium",
        "perks": [
            "red_herring",
            "cherish"
        ],
        "description": "A resilient survivor."
    },
    {
        "id": "jeff_johansen",
        "name": "Jeff Johansen",
        "realName": "Jeff Johansen",
        "chapter": "Dead by Daylight",
        "releaseDate": "2017-03-08",
        "difficulty": "Medium",
        "perks": [
            "breakdown",
            "distortion"
        ],
        "description": "A metal fan and mechanic."
    },
    {
        "id": "adam_francis",
        "name": "Adam Francis",
        "realName": "Adam Francis",
        "chapter": "Dead by Daylight",
        "releaseDate": "2017-09-12",
        "difficulty": "Hard",
        "perks": [
            "deliverance",
            "diversion"
        ],
        "description": "A private investigator."
    },
    {
        "id": "lisa_garland",
        "name": "Lisa Garland",
        "realName": "Lisa Garland",
        "chapter": "Dead by Daylight",
        "releaseDate": "2021-06-16",
        "difficulty": "Medium",
        "perks": [
            "red_herring",
            "cherish"
        ],
        "description": "A nurse from Silent Hill."
    }
];
}),
"[project]/lib/utils/randomizer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAddons",
    ()=>getAddons,
    "getCharacterPerks",
    ()=>getCharacterPerks,
    "getItems",
    ()=>getItems,
    "getKillerAddons",
    ()=>getKillerAddons,
    "getKillerById",
    ()=>getKillerById,
    "getKillerOfferings",
    ()=>getKillerOfferings,
    "getKillerPerks",
    ()=>getKillerPerks,
    "getKillers",
    ()=>getKillers,
    "getOfferings",
    ()=>getOfferings,
    "getPerkById",
    ()=>getPerkById,
    "getPerks",
    ()=>getPerks,
    "getRandomOffering",
    ()=>getRandomOffering,
    "getSurvivorById",
    ()=>getSurvivorById,
    "getSurvivorOfferings",
    ()=>getSurvivorOfferings,
    "getSurvivorPerks",
    ()=>getSurvivorPerks,
    "getSurvivors",
    ()=>getSurvivors,
    "randomizeFullGame",
    ()=>randomizeFullGame,
    "randomizeKiller",
    ()=>randomizeKiller,
    "randomizeSurvivor",
    ()=>randomizeSurvivor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$survivors$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/survivors.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$killers$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/killers.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$perks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/perks.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$addons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/addons.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$items$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/items.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$offerings$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/offerings.json.[json].cjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
function getSurvivors() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$survivors$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}
function getKillers() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$killers$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}
function getPerks() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$perks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}
function getAddons() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$addons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}
function getItems() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$items$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}
function getCharacterPerks(characterName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$perks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((p)=>p.character === characterName);
}
function getSurvivorPerks() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$perks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((p)=>p.type === "Survivor");
}
function getKillerPerks() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$perks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((p)=>p.type === "Killer");
}
function getKillerAddons(killerName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$addons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((a)=>a.killer === killerName);
}
/**
 * Random utility function
 */ function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
/**
 * Get N random unique elements from array
 */ function getRandomElements(array, count) {
    const shuffled = [
        ...array
    ].sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
}
function randomizeSurvivor(omitIds) {
    const availableSurvivors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$survivors$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((s)=>!omitIds?.includes(s.id));
    if (availableSurvivors.length === 0) return null;
    const survivor = getRandomElement(availableSurvivors);
    const survivorPerks = getSurvivorPerks().filter((p)=>!omitIds?.includes(p.id));
    const selectedPerks = getRandomElements(survivorPerks, 4);
    const availableItems = getItems().filter((i)=>!omitIds?.includes(i.id));
    const randomItem = availableItems.length > 0 && Math.random() > 0.3 ? getRandomElement(availableItems) : null;
    // Get random add-ons for the item
    let selectedAddons = [];
    if (randomItem?.addons) {
        const availableAddons = randomItem.addons.filter((a)=>!omitIds?.includes(a));
        selectedAddons = getRandomElements(availableAddons, Math.min(2, availableAddons.length));
    }
    return {
        survivor,
        perks: selectedPerks,
        item: randomItem,
        addons: selectedAddons
    };
}
function randomizeKiller(omitIds) {
    const availableKillers = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$killers$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((k)=>!omitIds?.includes(k.id));
    if (availableKillers.length === 0) return null;
    const killer = getRandomElement(availableKillers);
    const killerPerks = getKillerPerks().filter((p)=>!omitIds?.includes(p.id));
    const selectedPerks = getRandomElements(killerPerks, 4);
    const killerAddons = getKillerAddons(killer.name).filter((a)=>!omitIds?.includes(a.id));
    const selectedAddons = getRandomElements(killerAddons, 2);
    return {
        killer,
        perks: selectedPerks,
        addons: selectedAddons
    };
}
function randomizeFullGame(omitIds) {
    return {
        survivor: randomizeSurvivor(omitIds),
        killer: randomizeKiller(omitIds)
    };
}
function getOfferings() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$offerings$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}
function getSurvivorOfferings() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$offerings$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((o)=>o.type.includes("Survivor"));
}
function getKillerOfferings() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$offerings$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((o)=>o.type.includes("Killer"));
}
function getRandomOffering(type) {
    const offeringList = type === "survivor" ? getSurvivorOfferings() : getKillerOfferings();
    return offeringList.length > 0 ? getRandomElement(offeringList) : null;
}
function getSurvivorById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$survivors$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((s)=>s.id === id);
}
function getKillerById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$killers$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((k)=>k.id === id);
}
function getPerkById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$perks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].find((p)=>p.id === id);
}
}),
];

//# sourceMappingURL=_0tji2sq._.js.map