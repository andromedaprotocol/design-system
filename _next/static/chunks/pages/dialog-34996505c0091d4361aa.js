(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6011],{95704:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return i}});var t=a(24246),o=(a(27378),a(90407)),r=a(82745),l={name:"Dialog",importer:'import { Dialog, Transition } from "@headlessui/react";\nimport { cx } from "@andromedaprotocol/react";',demoList:[{name:"Basic usage",files:[{name:"dialog.tsx",code:'function App() {\n  const [showDialog, setShowDialog] = React.useState(false);\n  const completeButtonRef = React.useRef(null);\n\n  const handleOpen = () => setShowDialog(true);\n  const handleClose = () => setShowDialog(false);\n\n  return (\n    <div className="p-8">\n      <Button onClick={handleOpen}>Show Dialog</Button>\n      <Transition show={showDialog} as={React.Fragment}>\n        <Dialog\n          initialFocus={completeButtonRef}\n          as="div"\n          className="fixed inset-0 overflow-y-auto z-modal"\n          open={showDialog}\n          onClose={handleClose}\n        >\n          <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />\n          <Transition.Child\n            as={React.Fragment}\n            enter="transition ease-out duration-150"\n            enterFrom="transform scale-95"\n            enterTo="transform scale-100"\n            leave="transition ease-in duration-100"\n            leaveFrom="transform scale-100"\n            leaveTo="transform scale-95"\n          >\n            <div\n              className={cx(\n                "relative flex flex-col w-full mx-auto my-24 rounded shadow-lg",\n                "bg-white border border-gray-200",\n                "dark:bg-neutral-800 dark:border-neutral-700",\n                "max-w-md"\n              )}\n            >\n              <header\n                className="relative px-6 py-5 text-lg font-semibold"\n              >\n                Modal Title\n              </header>\n              <button\n                onClick={handleClose}\n                className={cx(\n                  "absolute text-sm cursor-base text-gray-600 dark:text-gray-400 hover:text-primary-500 top-4 right-4"\n                )}\n              >\n                <Icon name="x" className="w-4 h-4" />\n              </button>\n              <div className="flex-1 px-6 py-2">\n                <p className="text-base font-normal text-neutral-500">\n                  Sit nulla est ex deserunt exercitation anim occaecat. Nostrud\n                  ullamco deserunt aute id consequat veniam incididunt duis in\n                  sint irure nisi. Mollit officia cillum Lorem ullamco minim\n                  nostrud elit officia tempor esse quis.\n                </p>\n              </div>\n              <footer className="px-6 py-4">\n                <Button ref={completeButtonRef} variant="light" color="primary" onClick={handleClose}>\n                  Complete\n                </Button>\n              </footer>\n            </div>\n          </Transition.Child>\n        </Dialog>\n      </Transition>\n    </div>\n  );\n}',readOnly:!1}]},{name:"Confirm Deletion",files:[{name:"dialog.tsx",code:'function App() {\n  const [showDialog, setShowDialog] = React.useState(false);\n  const inputRef = React.useRef(null);\n\n  const handleOpen = () => setShowDialog(true);\n  const handleClose = () => setShowDialog(false);\n\n  return (\n    <div className="p-8">\n      <Button onClick={handleOpen} color="red">Delete Account</Button>\n      <Transition show={showDialog} as={React.Fragment}>\n        <Dialog\n          initialFocus={inputRef}\n          as="div"\n          className="fixed inset-0 overflow-y-auto z-modal"\n          open={showDialog}\n          onClose={handleClose}\n        >\n          <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />\n          <Transition.Child\n            as={React.Fragment}\n            enter="transition ease-out duration-150"\n            enterFrom="transform scale-95"\n            enterTo="transform scale-100"\n            leave="transition ease-in duration-100"\n            leaveFrom="transform scale-100"\n            leaveTo="transform scale-95"\n          >\n            <div\n              className={cx(\n                "relative flex flex-col w-full mx-auto my-24 rounded shadow-lg",\n                "bg-white border border-gray-200",\n                "dark:bg-neutral-800 dark:border-neutral-700",\n                "max-w-md px-2"\n              )}\n            >\n              <header\n                className="relative px-3 pt-3 pb-2 text-lg font-semibold"\n              >\n                Confirm deletion\n              </header>\n              <button\n                onClick={handleClose}\n                className="absolute text-sm text-gray-600 cursor-base dark:text-gray-400 hover:text-primary-500 top-4 right-4"\n              >\n                <Icon name="x" className="w-4 h-4" />\n              </button>\n              <Divider\n                orientation="horizontal"\n                className="border-neutral-200 dark:border-neutral-700"\n              />\n              <div className="flex-1 px-3 py-2">\n                <p className="mb-4 text-sm font-normal text-muted">\n                  To delete your project, please enter the name of your project <b>Andromeda</b>. \n                  Once deleted this project will be unrecoverable.\n                </p>\n\n                <FormControl id="name">\n                  <FormLabel>\n                    Confirm name\n                  </FormLabel>\n                  <Input ref={inputRef} color="red" />\n                </FormControl>\n              </div>\n              <Divider\n                orientation="horizontal"\n                className="border-neutral-200 dark:border-neutral-700"\n              />\n              <footer className="flex justify-end px-3 py-2 space-x-4">\n                <Button onClick={handleClose}>\n                  Cancel\n                </Button>\n                <Button variant="solid" color="red" onClick={handleClose}>\n                  Delete\n                </Button>\n              </footer>\n            </div>\n          </Transition.Child>\n        </Dialog>\n      </Transition>\n    </div>\n  );\n}',readOnly:!1}]}],propList:[{name:"Dialog",value:"dialog",propTypes:[{extend:!0,path:"https://headlessui.dev/react/dialog",external:!0,label:"See more `Dialog` props."}]}]};function i(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{title:"Tailwind CSS Dialog",description:"A modal is an interface element that appears over other content. It requires an interaction from the user before they can return to whatever is underneath."}),(0,t.jsx)(o.Z,{component:l})]})}},49752:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dialog",function(){return a(95704)}])}},function(n){n.O(0,[1955,7076,6253,3430,2114,9774,2888,179],(function(){return e=49752,n(n.s=e);var e}));var e=n.O();_N_E=e}]);