(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4636],{7122:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var a=t(24246),s=t(6819),r=t(82745),o={name:"ContextMenu",importer:'import * as ContextMenu from "@radix-ui/react-context-menu";\nimport { cx } from "@andromedaprotocol/react";',demoList:[{name:"Basic usage",files:[{name:"context-menu.tsx",code:'<div>\n  <ContextMenu.Root>\n    <ContextMenu.Trigger>\n      <div className="flex items-center justify-center p-16 bg-gray-100 dark:bg-neutral-800">\n        Right click anywhere\n      </div>\n    </ContextMenu.Trigger>\n    <ContextMenu.Content\n      className={cx(\n        "z-40 w-56 min-w-max py-1 rounded-md shadow-sm outline-none",\n        "bg-white border border-gray-200",\n        "dark:bg-neutral-800 dark:border-gray-700"\n      )}\n      alignOffset={-5}\n    >\n      <ContextMenu.Item\n        className={cx(\n          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n          "focus:bg-neutral-100",\n          "dark:focus:bg-neutral-700"\n        )}\n      >\n        <Icon as={ArrowsExpandIcon} label="arrows-expand" className="w-4 h-4 mr-2" />\n        <span className="flex-1 mr-2">Fullscreen</span>\n        <Kbd>\u2318F</Kbd>\n      </ContextMenu.Item>\n      <ContextMenu.Item\n        className={cx(\n          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n          "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n        )}\n      >\n        <Icon as={DuplicateIcon} label="duplicate" className="w-4 h-4 mr-2" />\n        <span className="flex-1 mr-2">Copy</span>\n        <Kbd>\u2318\u21e7C</Kbd>\n      </ContextMenu.Item>\n      <ContextMenu.Item\n        className={cx(\n          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n          "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n        )}\n      >\n        <Icon as={ShareIcon} label="share" className="w-4 h-4 mr-2" />\n        <span className="flex-1 mr-2">Share</span>\n      </ContextMenu.Item>\n      <ContextMenu.Separator className="h-px my-1 bg-neutral-200 dark:bg-neutral-700" />\n      <ContextMenu.Item\n        className={cx(\n          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n          "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n        )}\n      >\n        <Icon as={CalendarIcon} label="calendar" className="w-4 h-4 mr-2" />\n        <span className="flex-1 mr-2">Due Date</span>\n        <Kbd>\u2318D</Kbd>\n      </ContextMenu.Item>\n\n      <ContextMenu.Root>\n        <ContextMenu.TriggerItem\n          className={cx(\n            "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n            "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n          )}\n        >\n          <Icon as={TagIcon} label="tag" className="w-4 h-4 mr-2" />\n          <span className="flex-1 mr-2">Labels</span>\n          <Icon as={ChevronRightIcon} label="chevron-right" className="w-3 h-3 ml-2" />\n        </ContextMenu.TriggerItem>\n        <ContextMenu.Content\n          className={cx(\n            "z-40 w-48 min-w-max py-1 rounded-md shadow-sm outline-none",\n            "bg-white border border-gray-200",\n            "dark:bg-neutral-800 dark:border-gray-700"\n          )}\n          sideOffset={5}\n          alignOffset={-5}\n        >\n          <ContextMenu.Item\n            className={cx(\n              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n              "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n            )}\n          >\n            <span className="w-2 h-2 mr-4 bg-red-500 rounded-full" />\n            Bug\n          </ContextMenu.Item>\n          <ContextMenu.Item\n            className={cx(\n              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n              "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n            )}\n          >\n            <span className="w-2 h-2 mr-4 bg-purple-500 rounded-full" />\n            Feature\n          </ContextMenu.Item>\n          <ContextMenu.Item\n            className={cx(\n              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n              "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n            )}\n          >\n            <span className="w-2 h-2 mr-4 bg-blue-500 rounded-full" />\n            Improvement\n          </ContextMenu.Item>\n        </ContextMenu.Content>\n      </ContextMenu.Root>\n      <ContextMenu.Item\n        className={cx(\n          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n          "focus:bg-neutral-100 dark:focus:bg-neutral-700"\n        )}\n      >\n        <Icon as={HashtagIcon} label="hastag" className="w-4 h-4 mr-2" />\n        <span className="flex-1 mr-2">Unsubscribe</span>\n        <Kbd>\u2318\u21e7U</Kbd>\n      </ContextMenu.Item>\n    </ContextMenu.Content>\n  </ContextMenu.Root>\n</div>',readOnly:!1}],openEditor:!0}],propList:[{name:"ContextMenu",value:"context-menu",propTypes:[{extend:!0,path:"https://www.radix-ui.com/primitives/docs/components/context-menu",external:!0,label:"See more `ContextMenu` props."}]}]};function l(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Tailwind CSS ContextMenu",description:"Displays a menu located at the pointer, triggered by a right-click or a long-press."}),(0,a.jsx)(s.Z,{component:o})]})}},78165:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/context-menu",function(){return t(7122)}])}},function(n){n.O(0,[1955,3989,1283,3430,5519,9774,2888,179],(function(){return e=78165,n(n.s=e);var e}));var e=n.O();_N_E=e}]);