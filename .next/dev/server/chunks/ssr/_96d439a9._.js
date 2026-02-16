module.exports = [
"[project]/app/branches/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Branches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const branches = [
    // ───────────────────────────────────────────────
    // All branches (original + newly added from map)
    // ───────────────────────────────────────────────
    {
        name: "Pietermaritzburg (Head Office) – Boom Street",
        address: "433 Boom Street, Pietermaritzburg",
        phone: "081 237 1921",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=433+Boom+Street,+Pietermaritzburg,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Pietermaritzburg – Langalibalele Shop No 1",
        address: "412 Langalibalele Street, Pietermaritzburg",
        phone: "081 330 6840",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=412+Langalibalele+Street,+Pietermaritzburg,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Pietermaritzburg – Langalibalele Shop No 2",
        address: "Shop No 2 Selgro 412 Langalibalele Street, Pietermaritzburg",
        phone: "033 940 3871",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Shop+No+2+Selgro+412+Langalibalele+Street,+Pietermaritzburg,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Howick",
        address: "27 Somi Street, Howick",
        phone: "Not listed – call 072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=27+Somi+Street,+Howick,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Estcourt",
        address: "Victoria Street, Estcourt",
        phone: "036 352 5678",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Victoria+Street,+Estcourt,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Mooi River",
        address: "Main Road, Mooi River",
        phone: "033 263 9012",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Main+Road,+Mooi+River,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Hammarsdale",
        address: "Old Main Road, Hammarsdale",
        phone: "031 736 3456",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Old+Main+Road,+Hammarsdale,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Pinetown",
        address: "Old Main Road, Pinetown",
        phone: "031 701 7890",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Old+Main+Road,+Pinetown,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Empangeni",
        address: "King Cetshwayo Highway, Empangeni",
        phone: "035 772 2345",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=King+Cetshwayo+Highway,+Empangeni,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Johannesburg – 6th Street",
        address: "6th Street, Johannesburg",
        phone: "011 492 5678",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=6th+Street,+Johannesburg,+Gauteng,+South+Africa&travelmode=driving"
    },
    {
        name: "Johannesburg – New Redruth, Alberton",
        address: "10 Helston Street, New Redruth, Alberton",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=10+Helston+Street,+New+Redruth,+Alberton,+Gauteng,+South+Africa&travelmode=driving"
    },
    {
        name: "Newcastle",
        address: "2 Ayliff Street, Newcastle",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=2+Ayliff+Street,+Newcastle,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Port Shepstone",
        address: "4 Court House Road, Port Shepstone",
        phone: "063 292 7628",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=4+Court+House+Road,+Port+Shepstone,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Empangeni – Clan Angus",
        address: "Shop 4 Clan Angus, 4th and 6th Street, Empangeni",
        phone: "035 787 0106",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Shop+4+Clan+Angus,+4th+and+6th+Street,+Empangeni,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Greytown",
        address: "Bell Street Ext / Office no 1 & 2, 102 Bell Street, Greytown",
        phone: "081 586 9800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=102+Bell+Street,+Greytown,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Wartburg",
        address: "No 7 Mill Road, Wartburg",
        phone: "081 263 2610",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=No+7+Mill+Road,+Wartburg,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Bulwer",
        address: "Jackson St, Office No 3, Stavcom Centre, Bulwer",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Stavcom+Centre,+Jackson+Street,+Bulwer,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Ladysmith",
        address: "26 King St, Ladysmith",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=26+King+Street,+Ladysmith,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Bhamshela",
        address: "614 No 16 Noodsburg Road, Bhamshela",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=614+No+16+Noodsburg+Road,+Bhamshela,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Dalton",
        address: "Shop No 2, Market Centre, 4 Noordsberg Road, Dalton",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Market+Centre,+4+Noordsberg+Road,+Dalton,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Durban – Umngeni",
        address: "74 Umngeni Road, Durban",
        phone: "031 942 5771",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=74+Umngeni+Road,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Durban – Anton Lembede",
        address: "407 Anton Lembede Rd, Salmon Grove Chamber, Durban",
        phone: "031 940 0847",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=407+Anton+Lembede+Road,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Pinetown – Crompton Rd",
        address: "79 Crompton Rd, Pinetown",
        phone: "031 094 9414",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=79+Crompton+Road,+Pinetown,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Webber",
        address: "Shop no 18-19, Webber Shopping Centre",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Webber+Shopping+Centre,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Richmond",
        address: "Chilly Street, Richmond",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Chilly+Street,+Richmond,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Impendle – Ikhwezi Street",
        address: "162 Ikhwezi Street, Impendle",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=162+Ikhwezi+Street,+Impendle,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    }
];
function Branches() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "pt-32 pb-20 bg-slate-900 text-white min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "text-4xl md:text-5xl font-bold text-center mb-16",
                    children: t("branches")
                }, void 0, false, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: branches.map((branch, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: index * 0.05,
                                duration: 0.5
                            },
                            className: "bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-green-500 hover:shadow-2xl transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-3",
                                    children: branch.name
                                }, void 0, false, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 18,
                                            className: "text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/branches/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        branch.address
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 18,
                                            className: "text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/branches/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        branch.phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                branch.mapsLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: branch.mapsLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium",
                                    children: [
                                        "Get Directions on Google Maps",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/branches/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/branches/page.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-16 mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg mb-6 opacity-90",
                            children: "Can't find your area? Call our 24/7 emergency line for assistance."
                        }, void 0, false, {
                            fileName: "[project]/app/branches/page.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "tel:+27727001800",
                            className: "inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-xl text-lg shadow-xl transition-all hover:scale-105",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                "Call 072 700 1800 Now"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/branches/page.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/branches/page.tsx",
            lineNumber: 208,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/branches/page.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Phone
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }
    ]
];
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ExternalLink
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_96d439a9._.js.map