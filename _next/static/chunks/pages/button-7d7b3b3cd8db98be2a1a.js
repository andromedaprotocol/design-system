(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6421],{82232:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return u}});var e=o(24246),a=(o(27378),o(6819)),r=o(82745),i=[{name:"Button",value:"button",propTypes:[{property:"color",type:["string"],default:"",values:[],description:"Set the button color"},{property:"size",type:["xs","sm","md","lg","xl"],default:"md",values:["xs","sm","md","lg","xl"],description:"Size of the button"},{property:"variant",type:["link","solid","outline","light","ghost"],default:"outline",values:["link","solid","outline","light","ghost"],description:"Controls button appearance"},{property:"loading",type:["boolean"],default:!1,values:[],description:"Shows loading spinner"},{property:"loadingText",type:["string"],default:"",values:[],description:"The label to show in the button when loading is true"},{property:"type",type:["button","reset","submit"],default:"",values:["button","reset","submit"],description:"Set the original html type of button"},{property:"leftIcon",type:["React.ReactElement"],default:"",values:[],description:"Adds icon before button label"},{property:"rightIcon",type:["React.ReactElement"],default:"",values:[],description:"Adds icon after button label"},{property:"disabled",type:["boolean"],default:!1,values:[],description:"Makes button disabled "},{property:"active",type:["boolean"],default:!1,values:[],description:"Makes button active"}]},{name:"Button.Group",value:"button-group",propTypes:[{property:"attached",type:["boolean"],default:!1,values:[],description:"Button will be altered to look flushed together"},{property:"disabled",type:["boolean"],default:!1,values:[],description:"Set all wrapped button will be disabled"},{property:"size",type:['ButtonProps["size"]'],default:"",values:["xs","sm","md","lg","xl"],description:"Size of all wrapped button"},{property:"color",type:["string"],default:"",values:[],description:"Set all wrapped button color"}]}],l={name:"Button",importer:'import { Button } from "@andromedaprotocol/react"',demoList:[{name:"Variants",files:[{name:"button.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-2">\n  <Button>Button</Button>\n  <Button variant="solid">Button</Button>\n  <Button variant="light">Button</Button>\n  <Button variant="ghost">Button</Button>\n  <Button variant="link">Button</Button>\n</div>',readOnly:!1}],openEditor:!0},{name:"Mixing variant and color",files:[{name:"button.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-2">\n  <Button color="primary">Button</Button>\n  <Button variant="solid" color="primary">Button</Button>\n  <Button variant="light" color="primary">Button</Button>\n  <Button variant="ghost" color="primary">Button</Button>\n  <Button variant="link" color="primary">Button</Button>\n</div>',readOnly:!1}]},{name:"Adding color",files:[{name:"button.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-2">\n  <Button color="orange">Button</Button>\n  <Button variant="solid" color="orange">Button</Button>\n  <Button variant="light" color="orange">Button</Button>\n  <Button variant="ghost" color="orange">Button</Button>\n  <Button variant="link" color="orange">Button</Button>\n</div>',readOnly:!1},o(78943).g]},{name:"Sizes",files:[{name:"button.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-2">\n  <Button size="xs" variant="solid" color="primary">\n    Button\n  </Button>\n  <Button size="sm" variant="solid" color="primary">\n    Button\n  </Button>\n  <Button size="md" variant="solid" color="primary">\n    Button\n  </Button>\n  <Button size="lg" variant="solid" color="primary">\n    Button\n  </Button>\n  <Button size="xl" variant="solid" color="primary">\n    Button\n  </Button>\n</div>',readOnly:!1}]},{name:"With icons",files:[{name:"button.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-2">\n  <Button\n    variant="solid"\n    color="primary"\n    leftIcon={<Icon as={GiftIcon} label="gift" className="w-4 h-4 mr-1" />}\n  >\n    Button\n  </Button>\n  <Button color="primary" rightIcon={<Icon as={GiftIcon} label="gift" className="w-4 h-4 ml-1" />}>\n    Button\n  </Button>\n</div>',readOnly:!1}]},{name:"Loading state",files:[{name:"button.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-2">\n  <Button loading>Button</Button>\n  <Button color="primary" loading loadingText="Loading...">\n    Button\n  </Button>\n</div>',readOnly:!1}]},{name:"Button Group",files:[{name:"button.tsx",code:'<div className="flex flex-col w-full p-8 space-y-4">\n  <Button.Group variant="solid" className="space-x-2">\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n  </Button.Group>\n\n  <Button.Group variant="solid" color="primary" attached>\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n    <Button>Button</Button>\n  </Button.Group>\n</div>',readOnly:!1}]}],propList:i};function u(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.Z,{title:"Tailwind CSS Button",description:"Buttons trigger an action such as submitting a form or showing/hiding an interface component."}),(0,e.jsx)(a.Z,{component:l})]})}},78943:function(t,n,o){"use strict";o.d(n,{g:function(){return e},D:function(){return a}});var e={name:"tailwind.config.js",code:'import colors from "tailwindcss/colors";\n\nmodule.exports = {\n  mode: "jit",\n  purge: [\n    // ...\n    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", \n  ],\n  darkMode: "class", // or \'media\' or \'class\'\n  theme: {\n    extend: {\n      colors: {\n        orange: colors.orange,\n      }\n    }\n  },\n  variants: {\n    extend: {},\n  },\n  // add plugin\n  plugins: [\n    require("@tailwindcss/forms"),\n    require("@andromedaprotocol/core")({\n      colors: ["orange"],\n    }),\n    // ...\n  ],\n};',readOnly:!0},a={name:"tailwind.config.js",code:'module.exports = {\n  mode: "jit",\n  purge: [\n    // ...\n    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", \n  ],\n  darkMode: "class", // or \'media\' or \'class\'\n  theme: {\n    extend: {\n      borderColor: {\n        inherit: "inherit",\n      },\n    }\n  },\n  variants: {\n    extend: {},\n  },\n  // add plugin\n  plugins: [\n    require("@tailwindcss/forms"),\n    require("@andromedaprotocol/core"),\n    // ...\n  ],\n};',readOnly:!0}},58637:function(t,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/button",function(){return o(82232)}])}},function(t){t.O(0,[1955,3989,1283,3430,5519,9774,2888,179],(function(){return n=58637,t(t.s=n);var n}));var n=t.O();_N_E=n}]);