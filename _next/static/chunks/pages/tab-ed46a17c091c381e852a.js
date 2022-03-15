(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1364],{3189:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var t=a(24246),r=a(44044),l=a(82745),s=a(78943),o={name:"Tab",importer:'import { Tab } from "@headlessui/react";\nimport { cx } from "@andromedaprotocol/react";',demoList:[{name:"Tabs Line",files:[{name:"tabs.tsx",code:'function App() {\n  const tabs = [\n    {\n      value: "tab1",\n      name: "Account",\n      content: "Tab one content",\n      icon: UserCircleIcon,\n    },\n    {\n      value: "tab2",\n      name: "Notifications",\n      content: "Tab second content",\n      icon: BellIcon,\n    },\n    {\n      value: "tab3",\n      name: "Security",\n      content: "Tab third content",\n      icon: ShieldCheckIcon,\n    },\n  ];\n\n  return (\n    <div className="flex flex-wrap w-full p-8 space-x-4">\n      <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>\n        <Tab.List\n          aria-label="tabs example"\n          className={cx(\n            "flex flex-row justify-start",\n            "border-b border-neutral-200 dark:border-neutral-700"\n          )}\n        >\n          {tabs.map((tab) => (\n            <Tab\n              key={tab.value}\n              value={tab.value}\n              className={cx(\n                "px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",\n                "text-neutral-900 bg-transparent border-b-2 border-transparent",\n                "hover:border-neutral-300",\n                "selected:border-primary-500 selected:text-primary-600",\n                // dark\n                "dark:text-neutral-100",\n                "dark:hover:border-neutral-600",\n                "dark:selected:border-primary-500"\n              )}\n            >\n              {tab.name}\n            </Tab>\n          ))}\n        </Tab.List>\n        <Tab.Panels>\n          {tabs.map((tab) => (\n            <Tab.Panel\n              key={tab.value}\n              value={tab.value}\n              className="p-4 flex-grow-1"\n            >\n              {tab.content}\n            </Tab.Panel>\n          ))}\n        </Tab.Panels>\n      </Tab.Group>\n    </div>\n  )\n}',readOnly:!1}]},{name:"Tabs Line With Icon",files:[{name:"tabs.tsx",code:'function App() {\n  const tabs = [\n    {\n      value: "tab1",\n      name: "Account",\n      content: "Tab one content",\n      icon: UserCircleIcon,\n      label: "user-circle",\n    },\n    {\n      value: "tab2",\n      name: "Notifications",\n      content: "Tab second content",\n      icon: BellIcon,\n      label: "bell",\n    },\n    {\n      value: "tab3",\n      name: "Security",\n      content: "Tab third content",\n      icon: ShieldCheckIcon,\n      label: "shield-check",\n    },\n  ];\n\n  return (\n    <div className="flex flex-wrap w-full p-8 space-x-4">\n      <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>\n        <Tab.List\n          aria-label="tabs example"\n          className={cx(\n            "flex flex-row justify-start",\n            "border-b border-neutral-200 dark:border-neutral-700"\n          )}\n        >\n          {tabs.map((tab) => (\n            <Tab\n              key={tab.value}\n              value={tab.value}\n              className={cx(\n                "flex items-center justify-center px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",\n                "text-neutral-900 bg-transparent border-b-2 border-transparent",\n                "hover:border-neutral-300",\n                "selected:border-primary-500",\n                // dark\n                "dark:text-neutral-100",\n                "dark:hover:border-neutral-600",\n                "dark:selected:border-primary-500"\n              )}\n            >\n              <Icon as={tab.icon} label={tab.label} className="w-4 h-4 mr-2" />\n              <span>{tab.name}</span>\n              {tab.value === "tab2" && (\n                <Badge className="ml-2">18</Badge>\n              )}\n            </Tab>\n          ))}\n        </Tab.List>\n        <Tab.Panels>\n          {tabs.map((tab) => (\n            <Tab.Panel\n              key={tab.value}\n              value={tab.value}\n              className="p-4 flex-grow-1"\n            >\n              {tab.content}\n            </Tab.Panel>\n          ))}\n        </Tab.Panels>\n      </Tab.Group>\n    </div>\n  );\n}',readOnly:!1}]},{name:"Tabs End Closed",files:[{name:"tabs.tsx",code:'function App() {\n  const tabs = [\n    {\n      value: "tab1",\n      name: "Account",\n      content: "Tab one content",\n      icon: UserCircleIcon,\n    },\n    {\n      value: "tab2",\n      name: "Notifications",\n      content: "Tab second content",\n      icon: BellIcon,\n    },\n    {\n      value: "tab3",\n      name: "Security",\n      content: "Tab third content",\n      icon: ShieldCheckIcon,\n    },\n  ];\n\n  return (\n    <div className="flex flex-wrap w-full p-8 space-x-4">\n      <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>\n        <Tab.List\n          aria-label="tabs example"\n          className={cx(\n            "flex flex-row justify-start",\n            "border-b border-gray-300 dark:border-neutral-700"\n          )}\n        >\n          {tabs.map((tab) => (\n            <Tab\n              key={tab.value}\n              value={tab.value}\n              className={cx(\n                "px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",\n                "flex-shrink-0 inline-block",\n                "text-neutral-600 bg-transparent border border-transparent",\n                "hover:text-neutral-900",\n                "selected:bg-base selected:text-neutral-900 selected:rounded-tl-md selected:rounded-tr-md",\n                "selected:border-inherit selected:border-b-transparent",\n                // dark\n                "dark:text-neutral-400 dark:bg-transparent",\n                "dark:hover:text-neutral-100",\n                "dark:selected:bg-base dark:selected:text-neutral-100",\n              )}\n            >\n              {tab.name}\n            </Tab>\n          ))}\n        </Tab.List>\n        <Tab.Panels>\n          {tabs.map((tab) => (\n            <Tab.Panel\n              key={tab.value}\n              value={tab.value}\n              className="p-4 flex-grow-1"\n            >\n              {tab.content}\n            </Tab.Panel>\n          ))}\n        </Tab.Panels>\n      </Tab.Group>\n    </div>\n  )\n}',readOnly:!1},s.D]},{name:"Tabs End Closed With Icon",files:[{name:"tabs.tsx",code:'function App() {\n  const tabs = [\n    {\n      value: "tab1",\n      name: "Account",\n      content: "Tab one content",\n      icon: UserCircleIcon,\n      label: "user-circle",\n    },\n    {\n      value: "tab2",\n      name: "Notifications",\n      content: "Tab second content",\n      icon: BellIcon,\n      label: "bell",\n    },\n    {\n      value: "tab3",\n      name: "Security",\n      content: "Tab third content",\n      icon: ShieldCheckIcon,\n      label: "shield-check",\n    },\n  ];\n\n  return (\n    <div className="flex flex-wrap w-full p-8 space-x-4">\n      <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>\n        <Tab.List\n          aria-label="tabs example"\n          className={cx(\n            "flex flex-row justify-start",\n            "border-b border-gray-300 dark:border-neutral-700"\n          )}\n        >\n          {tabs.map((tab) => (\n            <Tab\n              key={tab.value}\n              value={tab.value}\n              className={cx(\n                "px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",\n                "flex-shrink-0 inline-block",\n                "text-neutral-600 bg-transparent border border-transparent",\n                "hover:text-neutral-900",\n                "selected:bg-base selected:text-neutral-900 selected:rounded-tl-md selected:rounded-tr-md",\n                "selected:border-inherit selected:border-b-transparent",\n                // dark\n                "dark:text-neutral-400 dark:bg-transparent",\n                "dark:hover:text-neutral-100",\n                "dark:selected:bg-base dark:selected:text-neutral-100",\n              )}\n            >\n              <Icon as={tab.icon} label={tab.label} className="w-4 h-4 mr-2" />\n              <span>{tab.name}</span>\n              {tab.value === "tab2" && (\n                <Badge className="ml-2">18</Badge>\n              )}\n            </Tab>\n          ))}\n        </Tab.List>\n        <Tab.Panels>\n          {tabs.map((tab) => (\n            <Tab.Panel\n              key={tab.value}\n              value={tab.value}\n              className="p-4 flex-grow-1"\n            >\n              {tab.content}\n            </Tab.Panel>\n          ))}\n        </Tab.Panels>\n      </Tab.Group>\n    </div>\n  );\n}',readOnly:!1},s.D]},{name:"Tabs Soft Rounded",files:[{name:"tabs.tsx",code:'function App() {\n  const tabs = [\n    {\n      value: "tab1",\n      name: "Account",\n      content: "Tab one content",\n      icon: UserCircleIcon,\n    },\n    {\n      value: "tab2",\n      name: "Notifications",\n      content: "Tab second content",\n      icon: BellIcon,\n    },\n    {\n      value: "tab3",\n      name: "Security",\n      content: "Tab third content",\n      icon: ShieldCheckIcon,\n    },\n  ];\n\n  return (\n    <div className="flex flex-wrap w-full p-8 space-x-4">\n      <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>\n        <Tab.List\n          aria-label="tabs example"\n          className="flex flex-row justify-start"\n        >\n          {tabs.map((tab) => (\n            <Tab\n              key={tab.value}\n              value={tab.value}\n              className={cx(\n                "flex items-center justify-center",\n                "px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",\n                "flex-shrink-0 inline-block rounded-md",\n                "text-neutral-600 bg-transparent",\n                "hover:text-neutral-900",\n                "selected:text-neutral-900 selected:bg-neutral-200",\n                // dark\n                "dark:text-neutral-400 dark:bg-transparent",\n                "dark:hover:text-neutral-100",\n                "dark:selected:text-neutral-100 dark:selected:bg-neutral-700",\n              )}\n            >\n              {tab.name}\n            </Tab>\n          ))}\n        </Tab.List>\n        <Tab.Panels>\n          {tabs.map((tab) => (\n            <Tab.Panel\n              key={tab.value}\n              value={tab.value}\n              className="p-4 flex-grow-1"\n            >\n              {tab.content}\n            </Tab.Panel>\n          ))}\n        </Tab.Panels>\n      </Tab.Group>\n    </div>\n  )\n}',readOnly:!1}]}],propList:[{name:"Tab",value:"tab",propTypes:[{extend:!0,path:"https://headlessui.dev/react/tabs",external:!0,label:"See more `Tab` props."}]}]};function c(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{title:"Tailwind CSS Tabs",description:"Tabbed interfaces are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space."}),(0,t.jsx)(r.Z,{component:o})]})}},78943:function(n,e,a){"use strict";a.d(e,{g:function(){return t},D:function(){return r}});var t={name:"tailwind.config.js",code:'import colors from "tailwindcss/colors";\n\nmodule.exports = {\n  mode: "jit",\n  purge: [\n    // ...\n    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", \n  ],\n  darkMode: "class", // or \'media\' or \'class\'\n  theme: {\n    extend: {\n      colors: {\n        orange: colors.orange,\n      }\n    }\n  },\n  variants: {\n    extend: {},\n  },\n  // add plugin\n  plugins: [\n    require("@tailwindcss/forms"),\n    require("@andromedaprotocol/core")({\n      colors: ["orange"],\n    }),\n    // ...\n  ],\n};',readOnly:!0},r={name:"tailwind.config.js",code:'module.exports = {\n  mode: "jit",\n  purge: [\n    // ...\n    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", \n  ],\n  darkMode: "class", // or \'media\' or \'class\'\n  theme: {\n    extend: {\n      borderColor: {\n        inherit: "inherit",\n      },\n    }\n  },\n  variants: {\n    extend: {},\n  },\n  // add plugin\n  plugins: [\n    require("@tailwindcss/forms"),\n    require("@andromedaprotocol/core"),\n    // ...\n  ],\n};',readOnly:!0}},12687:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tab",function(){return a(3189)}])}},function(n){n.O(0,[1955,3989,1283,3430,2463,9774,2888,179],(function(){return e=12687,n(n.s=e);var e}));var e=n.O();_N_E=e}]);