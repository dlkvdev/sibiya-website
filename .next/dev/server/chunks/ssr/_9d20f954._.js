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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const branches = [
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
        name: "Estcourt – Phillips Street",
        address: "118 Phillips Street, Estcourt",
        phone: "036 940 0551",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=118+Phillips+Street,+Estcourt,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Estcourt – Lorne Street",
        address: "107 Lorne Street, Estcourt",
        phone: "036 940 0853",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=107+Lorne+Street,+Estcourt,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Mooi River – Stock Lane",
        address: "01 Stock lane, Mooi River",
        phone: "031 944 4522",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=01+Stock+lane,+Mooi+River,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Mooi River – York Terrace",
        address: "35 York Terrace, Mooi River",
        phone: "033 940 3778",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=35+York+Terrace,+Mooi+River,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Hammarsdale",
        address: "176 Kunene Road, Hammarsdale",
        phone: "033 940 3789",
        note: "Ku GoSlow wakwaMcoyi",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=176+Kunene+Road,+Hammarsdale,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Pinetown – Joshua Gumede Road",
        address: "05 Joshua Gumede Road, Pinetown",
        phone: "031 940 5414",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=05+Joshua+Gumede+Road,+Pinetown,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Empangeni",
        address: "King Cetshwayo Highway, Empangeni",
        phone: "035 940 0310",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=King+Cetshwayo+Highway,+Empangeni,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Johannesburg – New Redruth, Alberton",
        address: "10 Helston Street, New Redruth, Alberton",
        phone: "010 442 4431",
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
        address: "11 Robinson Street, Port Shepstone",
        phone: "033 307 0143 / 039 940 2467",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=11+Robinson+Street,+Port+Shepstone,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Empangeni – Clan Angus",
        address: "Shop 4 Clan Angus, 4th and 6th Street, Empangeni",
        phone: "035 787 0106",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Shop+4+Clan+Angus,+4th+and+6th+Street,+Empangeni,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Greytown – Bell Street",
        address: "Bell Street Ext / Office no 1 & 2, 102 Bell Street, Greytown",
        phone: "081 586 9800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=102+Bell+Street,+Greytown,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Greytown – Maitland Road",
        address: "65 Maitland Road, Greytown",
        phone: "081 586 9800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=65+Maitland+Road,+Greytown,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Wartburg – Noordsburg Road",
        address: "36 Noordsburg Road, Wartburg",
        phone: "033 307 0116",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=36+Noordsburg+Road,+Wartburg,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Wartburg – Mill Road",
        address: "10 Mill Road, Wartburg",
        phone: "033 307 0116",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=10+Mill+Road,+Wartburg,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Bulwer",
        address: "Jackson St, Office No 3, Stavcom Centre, Bulwer",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Stavcom+Centre,+Jackson+Street,+Bulwer,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Ladysmith",
        address: "26 King Street, Ladysmith",
        phone: "081 386 0388",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=26+King+Street,+Ladysmith,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Bhamshela",
        address: "614 No 16 Noodsburg Road, Bhamshela",
        phone: "033 940 3668",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=614+No+16+Noodsburg+Road,+Bhamshela,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Dalton",
        address: "No 02 Old Main road, Dalton",
        phone: "033 940 3780",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=No+02+Old+Main+road,+Dalton,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Durban – Monty Naicker Road",
        address: "260 Monty Naicker Road, Durban Central, Durban",
        phone: "031 942 5771",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=260+Monty+Naicker+Road,+Durban+Central,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Durban – Anton Lembede",
        address: "407 Anton Lembede Rd, Salmon Grove Chamber, Durban",
        phone: "031 940 0847",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=407+Anton+Lembede+Road,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Durban – Lennox Road",
        address: "16-18 Lennox Road, Windermere Berea, Durban",
        phone: "031 940 0847",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=16-18+Lennox+Road,+Windermere+Berea,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Durban – Ellof & Kerk Street",
        address: "Corner of Ellof & Kerk Street, Durban",
        phone: "072 700 1800",
        note: "Next to Mr Price",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Corner+of+Ellof+Street+and+Kerk+Street,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Webber",
        address: "Shop no 18-19, Webber Shopping Centre",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Webber+Shopping+Centre,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Richmond",
        address: "15 Chilli Street, Richmond",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=15+Chilli+Street,+Richmond,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Impendle – Ikhwezi Street",
        address: "162 Ikhwezi Street, Impendle",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=162+Ikhwezi+Street,+Impendle,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Ixopo",
        address: "15 Margaret Street, Ixopo",
        phone: "076 076 9075",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=15+Margaret+Street,+Ixopo,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "KwaMashu",
        address: "2 Hunslet Road, KwaBester, KwaMashu",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=2+Hunslet+Road,+KwaBester,+KwaMashu,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Stanger",
        address: "20 Hullet Street, Sky Plaza, Stanger",
        phone: "031 942 5770",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=20+Hullet+Street,+Sky+Plaza,+Stanger,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Tongaat",
        address: "Shop 314 Hijaz AZ Centre, 06 Main Road, Tongaat",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Shop+314+Hijaz+AZ+Centre,+06+Main+Road,+Tongaat,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Richards Bay",
        address: "21 Bullion BLVD, Richards Bay",
        phone: "072 700 1800",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=21+Bullion+BLVD,+Richards+Bay,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Isipingo",
        address: "204 Redbro Centre, Isipingo",
        phone: "031 942 5777",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=204+Redbro+Centre,+Isipingo,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Verulam",
        address: "26 Ricland Street, 22 A Shop, Checkrite Parking, Verulam",
        phone: "065 912 1736 / 071 401 6988",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=26+Ricland+Street,+Verulam,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Ulundi",
        address: "Unit 14, Fairbreeze Office Park, 481 Princess Magogo Street, Ulundi",
        phone: "035 940 0311",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Unit+14+Fairbreeze+Office+Park,+481+Princess+Magogo+Street,+Ulundi,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Isipingo – Phila Ndwandwe Road",
        address: "124 Phila Ndwandwe Road, Shop 12 Near CheckSave Supermarket, Isipingo",
        phone: "031 942 5777",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=124+Phila+Ndwandwe+Road,+Shop+12,+Isipingo,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    },
    {
        name: "Newcastle – Voortrekker Street",
        address: "Shop No5, Voortrekker Street, Opposite KwaMata Building, Newcastle",
        phone: "034 940 2940",
        note: "Phambi kwase Renk enkulu",
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=Shop+No5+Voortrekker+Street,+Newcastle,+KwaZulu-Natal,+South+Africa&travelmode=driving"
    }
];
function Branches() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredBranches = branches.filter((branch)=>branch.name.toLowerCase().includes(searchTerm.toLowerCase()) || branch.address.toLowerCase().includes(searchTerm.toLowerCase()));
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
                    className: "text-4xl md:text-5xl font-bold text-center mb-8",
                    children: t("branches")
                }, void 0, false, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search by town, address or office name...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full py-3 px-5 pl-12 bg-slate-800 border border-green-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
                            }, void 0, false, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 20,
                                className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/app/branches/page.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/branches/page.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: filteredBranches.map((branch, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    lineNumber: 350,
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
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        branch.address
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 351,
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
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        branch.phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this),
                                branch.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-yellow-400 mb-4 italic",
                                    children: branch.note
                                }, void 0, false, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 17
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
                                            lineNumber: 370,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/branches/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/branches/page.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this),
                filteredBranches.length === 0 && searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xl mt-10 opacity-80",
                    children: [
                        'No offices found matching "',
                        searchTerm,
                        '". Try another search or call our emergency line.'
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 378,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-16 mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg mb-6 opacity-90",
                            children: "Can't find your area? Call our 24/7 emergency line for assistance."
                        }, void 0, false, {
                            fileName: "[project]/app/branches/page.tsx",
                            lineNumber: 384,
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
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                "Call 072 700 1800 Now"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/branches/page.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/branches/page.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/branches/page.tsx",
            lineNumber: 314,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/branches/page.tsx",
        lineNumber: 313,
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
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
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
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_9d20f954._.js.map