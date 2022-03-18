(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7412],{53504:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var i=t(24246),a=(t(27378),t(6819)),r=t(78943),s=t(82745),l=[{name:"Switch",value:"switch",propTypes:[{property:"color",type:["string"],default:"primary",values:[],description:"Set the switch color"},{property:"size",type:["sm","md","lg","xl"],default:"md",values:["sm","md","lg","xl"],description:"Size of the switch"},{property:"disabled",type:["boolean"],default:!1,values:[],description:"Makes switch disabled"},{property:"invalid",type:["boolean"],default:!1,values:[],description:"Makes switch invalid"},{property:"defaultChecked",type:["boolean"],default:!1,values:[],description:"The switch will be initially checked"},{property:"checked",type:["boolean"],default:!1,values:[],description:"The switch will be checked"},{property:"id",type:["string"],default:"",values:[],description:"Switch id"},{property:"name",type:["string"],default:"",values:[],description:"Switch name"},{property:"value",type:["string","number"],default:"",values:[],description:"Switch value"},{property:"onChange",type:["React.ChangeEventHandler<HTMLInputElement>"],default:"",values:[],description:"The callback invoked when the checked state of the `Switch` changes.."},{property:"aria-label",type:["string"],default:"",values:[],description:"A label that describes the input"},{property:"aria-describedby",type:["string"],default:"",values:[],description:"The id of the element that describes the input."},{property:"aria-labelledby",type:["string"],default:"",values:[],description:"Refers to the id of the element that labels the checkbox element."}]}],o={name:"Switch",importer:'import { Switch } from "@andromedaprotocol/react"',demoList:[{name:"Basic usage",files:[{name:"switch.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <Switch />\n  <Switch defaultChecked />\n</div>',readOnly:!1}]},{name:"Adding color",files:[{name:"switch.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <Switch color="orange" />\n  <Switch defaultChecked color="orange" />\n</div>',readOnly:!1},r.g]},{name:"Disabled state",files:[{name:"switch.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <Switch disabled />\n  <Switch defaultChecked disabled />\n</div>',readOnly:!1}]},{name:"Sizes",files:[{name:"switch.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <Switch size="sm" />\n  <Switch size="md" />\n  <Switch size="lg" />\n  <Switch size="xl" />\n</div>',readOnly:!1}]},{name:"Form control",files:[{name:"switch.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <FormControl className="flex items-center">\n    <FormLabel htmlFor="email-alerts" className="mb-0 mr-2">\n      Enable email alerts?\n    </FormLabel>\n    <Switch id="email-alerts" />\n  </FormControl>\n</div>',readOnly:!1}]}],propList:l};function d(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{title:"Tailwind CSS Swicth",description:"A control used to switch between two states: often on or off."}),(0,i.jsx)(a.Z,{component:o})]})}},78943:function(e,n,t){"use strict";t.d(n,{g:function(){return i},D:function(){return a}});var i={name:"tailwind.config.js",code:'import colors from "tailwindcss/colors";\n\nmodule.exports = {\n  mode: "jit",\n  purge: [\n    // ...\n    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", \n  ],\n  darkMode: "class", // or \'media\' or \'class\'\n  theme: {\n    extend: {\n      colors: {\n        orange: colors.orange,\n      }\n    }\n  },\n  variants: {\n    extend: {},\n  },\n  // add plugin\n  plugins: [\n    require("@tailwindcss/forms"),\n    require("@andromedaprotocol/core")({\n      colors: ["orange"],\n    }),\n    // ...\n  ],\n};',readOnly:!0},a={name:"tailwind.config.js",code:'module.exports = {\n  mode: "jit",\n  purge: [\n    // ...\n    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", \n  ],\n  darkMode: "class", // or \'media\' or \'class\'\n  theme: {\n    extend: {\n      borderColor: {\n        inherit: "inherit",\n      },\n    }\n  },\n  variants: {\n    extend: {},\n  },\n  // add plugin\n  plugins: [\n    require("@tailwindcss/forms"),\n    require("@andromedaprotocol/core"),\n    // ...\n  ],\n};',readOnly:!0}},65354:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/switch",function(){return t(53504)}])}},function(e){e.O(0,[1955,3989,1283,3430,5519,9774,2888,179],(function(){return n=65354,e(e.s=n);var n}));var n=e.O();_N_E=n}]);