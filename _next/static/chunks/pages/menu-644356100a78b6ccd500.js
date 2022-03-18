(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5934],{69036:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return d}});var t=a(24246),s=(a(27378),a(34844)),l=a(82745),i={name:"Menu",importer:'import { Menu, Transition } from "@headlessui/react";\nimport { cx } from "@andromedaprotocol/react";',demoList:[{name:"Basic usage",files:[{name:"menu.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <Menu as="div" className="relative inline-block">\n    <Menu.Button as={Button} variant="solid" color="primary">\n      Profile\n    </Menu.Button>\n    <Transition\n      as={React.Fragment}\n      enter="transition ease-in-out duration-150"\n      enterFrom="transform opacity-0 scale-90"\n      enterTo="transform opacity-100 scale-100"\n      leave="transition ease-out duration-75"\n      leaveFrom="transform opacity-100 scale-100"\n      leaveTo="transform opacity-0 scale-90"\n    >\n      <Menu.Items\n        className={cx(\n          "absolute left-0 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",\n          "bg-white border border-gray-200",\n          "dark:bg-neutral-800 dark:border-gray-700"\n        )}\n      >\n        <div className="px-1 py-1">\n          <div role="group">\n            <div className="mx-3 my-2 text-sm font-semibold">Profile</div>\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-neutral-100 dark:bg-neutral-700",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  My Account\n                </button>\n              )}\n            </Menu.Item>\n\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-neutral-100 dark:bg-neutral-700",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  Payments\n                </button>\n              )}\n            </Menu.Item>\n          </div>\n          <Divider\n            orientation="horizontal"\n            className="border-neutral-200 dark:border-neutral-700"\n          />\n          <div role="group">\n            <div className="mx-3 my-2 text-sm font-semibold">Help</div>\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-neutral-100 dark:bg-neutral-700",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  Docs\n                </button>\n              )}\n            </Menu.Item>\n\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-neutral-100 dark:bg-neutral-700",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  FAQ\n                </button>\n              )}\n            </Menu.Item>\n          </div>\n        </div>\n      </Menu.Items>\n    </Transition>\n  </Menu>\n</div>',readOnly:!1}]},{name:"Basic solid item",files:[{name:"menu.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <Menu as="div" className="relative inline-block">\n    <Menu.Button as={Button} variant="light" color="primary">\n      Profile\n    </Menu.Button>\n    <Transition\n      as={React.Fragment}\n      enter="transition ease-in-out duration-150"\n      enterFrom="transform opacity-0 scale-90"\n      enterTo="transform opacity-100 scale-100"\n      leave="transition ease-out duration-75"\n      leaveFrom="transform opacity-100 scale-100"\n      leaveTo="transform opacity-0 scale-90"\n    >\n      <Menu.Items\n        className={cx(\n          "absolute left-0 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",\n          "bg-white border border-gray-200",\n          "dark:bg-neutral-800 dark:border-gray-700"\n        )}\n      >\n        <div className="px-1 py-1">\n          <div role="group">\n            <div className="mx-3 my-2 text-sm font-semibold">Profile</div>\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-primary-500 text-white",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  My Account\n                </button>\n              )}\n            </Menu.Item>\n\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-primary-500 text-white",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  Payments\n                </button>\n              )}\n            </Menu.Item>\n          </div>\n          <Divider\n            orientation="horizontal"\n            className="border-neutral-200 dark:border-neutral-700"\n          />\n          <div role="group">\n            <div className="mx-3 my-2 text-sm font-semibold">Help</div>\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-primary-500 text-white",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  Docs\n                </button>\n              )}\n            </Menu.Item>\n\n            <Menu.Item>\n              {({ active, disabled }) => (\n                <button\n                  disabled={disabled}\n                  aria-disabled={disabled}\n                  className={cx(\n                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                    active && "bg-primary-500 text-white",\n                    disabled &&\n                    "disabled:opacity-60 disabled:cursor-not-allowed"\n                  )}\n                >\n                  FAQ\n                </button>\n              )}\n            </Menu.Item>\n          </div>\n        </div>\n      </Menu.Items>\n    </Transition>\n  </Menu>\n</div>',readOnly:!1}]},{name:"With icon",files:[{name:"menu.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <Menu as="div" className="relative inline-block">\n    <Menu.Button as={Button} variant="solid">\n      Actions\n    </Menu.Button>\n    <Transition\n      as={React.Fragment}\n      enter="transition ease-in-out duration-150"\n      enterFrom="transform opacity-0 scale-90"\n      enterTo="transform opacity-100 scale-100"\n      leave="transition ease-out duration-75"\n      leaveFrom="transform opacity-100 scale-100"\n      leaveTo="transform opacity-0 scale-90"\n    >\n      <Menu.Items\n        className={cx(\n          "absolute left-0 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",\n          "bg-white border border-gray-200",\n          "dark:bg-neutral-800 dark:border-gray-700"\n        )}\n      >\n        <div className="px-1 py-1">\n          <Menu.Item>\n            {({ active, disabled }) => (\n              <button\n                disabled={disabled}\n                aria-disabled={disabled}\n                className={cx(\n                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                  active && "bg-neutral-100 dark:bg-neutral-700",\n                  disabled &&\n                  "disabled:opacity-60 disabled:cursor-not-allowed"\n                )}\n              >\n                <Icon\n                  as={ArrowsExpandIcon}\n                  label="arrows-expand"\n                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}\n                />\n                <span className="flex-1 mr-2">Fullscreen</span>\n                <Kbd>\u2318F</Kbd>\n              </button>\n            )}\n          </Menu.Item>\n          <Menu.Item>\n            {({ active, disabled }) => (\n              <button\n                disabled={disabled}\n                aria-disabled={disabled}\n                className={cx(\n                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                  active && "bg-neutral-100 dark:bg-neutral-700",\n                  disabled &&\n                  "disabled:opacity-60 disabled:cursor-not-allowed"\n                )}\n              >\n                <Icon\n                  as={DuplicateIcon}\n                  label="duplicate"\n                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}\n                />\n                <span className="flex-1 mr-2">Copy</span>\n                <Kbd>\u2318\u21e7C</Kbd>\n              </button>\n            )}\n          </Menu.Item>\n          <Menu.Item>\n            {({ active, disabled }) => (\n              <button\n                disabled={disabled}\n                aria-disabled={disabled}\n                className={cx(\n                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                  active && "bg-neutral-100 dark:bg-neutral-700",\n                  disabled &&\n                  "disabled:opacity-60 disabled:cursor-not-allowed"\n                )}\n              >\n                <Icon\n                  as={ShareIcon}\n                  label="share"\n                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}\n                />\n                <span className="flex-1">Share</span>\n              </button>\n            )}\n          </Menu.Item>\n          <Divider\n            orientation="horizontal"\n            className="border-neutral-200 dark:border-neutral-700"\n          />\n          <Menu.Item>\n            {({ active, disabled }) => (\n              <button\n                disabled={disabled}\n                aria-disabled={disabled}\n                className={cx(\n                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                  active && "bg-neutral-100 dark:bg-neutral-700",\n                  disabled &&\n                  "disabled:opacity-60 disabled:cursor-not-allowed"\n                )}\n              >\n                <Icon\n                  as={CalendarIcon}\n                  label="calendar"\n                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}\n                />\n                <span className="flex-1 mr-2">Due Date</span>\n                <Kbd>\u2318D</Kbd>\n              </button>\n            )}\n          </Menu.Item>\n          <Menu.Item>\n            {({ active, disabled }) => (\n              <button\n                disabled={disabled}\n                aria-disabled={disabled}\n                className={cx(\n                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                  active && "bg-neutral-100 dark:bg-neutral-700",\n                  disabled &&\n                  "disabled:opacity-60 disabled:cursor-not-allowed"\n                )}\n              >\n                <Icon\n                  as={TagIcon}\n                  label="tag"\n                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}\n                />\n                <span className="flex-1">Priority</span>\n              </button>\n            )}\n          </Menu.Item>\n          <Menu.Item>\n            {({ active, disabled }) => (\n              <button\n                disabled={disabled}\n                aria-disabled={disabled}\n                className={cx(\n                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",\n                  active && "bg-neutral-100 dark:bg-neutral-700",\n                  disabled &&\n                  "disabled:opacity-60 disabled:cursor-not-allowed"\n                )}\n              >\n                <Icon\n                  as={HashtagIcon}\n                  label="hastag"\n                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}\n                />\n                <span className="flex-1 mr-2">Unsubscribe</span>\n                <Kbd>\u2318\u21e7U</Kbd>\n              </button>\n            )}\n          </Menu.Item>\n        </div>\n      </Menu.Items>\n    </Transition>\n  </Menu>\n</div>',readOnly:!1}],openEditor:!0}],propList:[{name:"Menu",value:"menu",propTypes:[{extend:!0,path:"https://headlessui.dev/react/menu",external:!0,label:"See more `Menu` props."}]}]};function d(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{title:"Tailwind CSS Menu",description:"A menu in which options are hidden by default, but can be shown by interacting with a button."}),(0,t.jsx)(s.Z,{component:i})]})}},35231:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu",function(){return a(69036)}])}},function(n){n.O(0,[1955,3989,1283,3430,8838,9774,2888,179],(function(){return e=35231,n(n.s=e);var e}));var e=n.O();_N_E=e}]);