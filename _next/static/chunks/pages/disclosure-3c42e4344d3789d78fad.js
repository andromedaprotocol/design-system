(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{7539:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i}});var t=s(24246),r=s(90407),a=s(82745),o={name:"Disclosure",importer:'import { Disclosure } from "@headlessui/react";\nimport { cx } from "@andromedaprotocol/react";',demoList:[{name:"Basic usage",files:[{name:"disclosure.tsx",code:'<div className="flex p-8 space-x-4">\n  <div className="w-full">\n    <Disclosure defaultOpen>\n      {({ open }) => (\n        <>\n          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">\n            <span>What is Lorem Ipsum?</span>\n            <span\n              className={cx(\n                "w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-600",\n                open\n                  ? "bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15"\n                  : "bg-transparent"\n              )}\n            >\n              <Icon\n                name="chevron-up"\n                label="chevron-up"\n                className={cx("w-4 h-4", open ? "transform rotate-180" : "")}\n              />\n            </span>\n          </Disclosure.Button>\n          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n          </Disclosure.Panel>\n        </>\n      )}\n    </Disclosure>\n\n    <Disclosure\n      as="div"\n      className="border-t border-neutral-200 dark:border-neutral-700"\n    >\n      {({ open }) => (\n        <>\n          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">\n            <span>Where does it come from?</span>\n            <span\n              className={cx(\n                "w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-600",\n                open\n                  ? "bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15"\n                  : "bg-transparent"\n              )}\n            >\n              <Icon\n                name="chevron-up"\n                label="chevron-up"\n                className={cx("w-4 h-4", open ? "transform rotate-180" : "")}\n              />\n            </span>\n          </Disclosure.Button>\n          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n          </Disclosure.Panel>\n        </>\n      )}\n    </Disclosure>\n  </div>\n</div>',readOnly:!1}]},{name:"",files:[{name:"disclosure.tsx",code:'<div className="flex p-8 space-x-4">\n  <div className="w-full">\n    <Disclosure defaultOpen>\n      {({ open }) => (\n        <>\n          <Disclosure.Button\n            className={cx(\n              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none",\n              "bg-primary-50 text-primary-800 dark:bg-primary-200 dark:bg-opacity-15 dark:text-primary-200"\n            )}\n          >\n            <span>What is Lorem Ipsum?</span>\n            <Icon\n              name="chevron-up"\n              label="chevron-up"\n              className={cx(\n                "w-4 h-4",\n                open ? "transform rotate-180 text-primary-500" : ""\n              )}\n            />\n          </Disclosure.Button>\n          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n          </Disclosure.Panel>\n        </>\n      )}\n    </Disclosure>\n\n    <Disclosure as="div" className="mt-2">\n      {({ open }) => (\n        <>\n          <Disclosure.Button\n            className={cx(\n              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none",\n              "bg-primary-50 text-primary-800 dark:bg-primary-200 dark:bg-opacity-15 dark:text-primary-200"\n            )}\n          >\n            <span>Where does it come from?</span>\n            <Icon\n              name="chevron-up"\n              label="chevron-up"\n              className={cx(\n                "w-4 h-4",\n                open ? "transform rotate-180 text-primary-500" : ""\n              )}\n            />\n          </Disclosure.Button>\n          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n          </Disclosure.Panel>\n        </>\n      )}\n    </Disclosure>\n  </div>\n</div>',readOnly:!1}]},{name:"",files:[{name:"disclosure.tsx",code:'<div className="flex p-8 space-x-4">\n  <div className="w-full">\n    <Disclosure defaultOpen>\n      {({ open }) => (\n        <>\n          <Disclosure.Button\n            className={cx(\n              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none bg-primary-500 text-white"\n            )}\n          >\n            <span>What is Lorem Ipsum?</span>\n            <Icon\n              name="chevron-up"\n              label="chevron-up"\n              className={cx(\n                "w-4 h-4",\n                open ? "transform rotate-180 text-white" : ""\n              )}\n            />\n          </Disclosure.Button>\n          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n          </Disclosure.Panel>\n        </>\n      )}\n    </Disclosure>\n\n    <Disclosure as="div" className="mt-2">\n      {({ open }) => (\n        <>\n          <Disclosure.Button\n            className={cx(\n              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none bg-primary-500 text-white"\n            )}\n          >\n            <span>Where does it come from?</span>\n            <Icon\n              as={ChevronUpIcon}\n              label="chevron-up"\n              className={cx(\n                "w-4 h-4",\n                open ? "transform rotate-180 text-white" : ""\n              )}\n            />\n          </Disclosure.Button>\n          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n          </Disclosure.Panel>\n        </>\n      )}\n    </Disclosure>\n  </div>\n</div>',readOnly:!1}]}],propList:[{name:"Disclosure",value:"disclosure",propTypes:[{extend:!0,path:"https://headlessui.dev/react/disclosure",external:!0,label:"See more `Disclosure` props."}]}]};function i(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{title:"Tailwind CSS Disclosure",description:"An accordion is a vertical stack of interactive headings used to toggle the display of further information; each item can be 'collapsed', with just a short label visible, or 'expanded' to show the complete content."}),(0,t.jsx)(r.Z,{component:o})]})}},4581:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/disclosure",function(){return s(7539)}])}},function(e){e.O(0,[1955,7076,6253,3430,2114,9774,2888,179],(function(){return n=4581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);