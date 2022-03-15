(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{20531:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(1717),o=t(11566),a=(t(27378),t(35318));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l={};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",s(s(s({},l),t),{},{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Getting Started"),(0,a.kt)("h2",null,"Installation"),(0,a.kt)("p",null,"Andromeda Design System works out of the box with create-react-app (including TypeScript version), Preact cli (with compat), Next.js, Gatsby and any other environment."),(0,a.kt)("p",null,"To install the Andromeda Design System run the following within your project directory."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm i @andromedaprotocol/core @andromedaprotocol/react @tailwindcss/forms\n\n# OR\n\nyarn add @andromedaprotocol/core @andromedaprotocol/react @tailwindcss/forms\n")),(0,a.kt)("h2",null,"Configuration"),(0,a.kt)("p",null,"The default theme of this library depends on the ",(0,a.kt)("inlineCode",{parentName:"p"},"@tailwindcss/forms")," plugin. To use it, follow the steps on the plugin source page. ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-forms"}),"https://github.com/tailwindlabs/tailwindcss-forms")),(0,a.kt)("p",null,"Andromeda Design System can be configed in ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),'// tailwind.config.js\nmodule.exports = {\n  mode: "jit",\n  purge: [\n    // ...\n    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}",\n  ],\n  darkMode: "class", // or \'media\' or \'class\'\n  theme: {\n    extend: {},\n  },\n  variants: {\n    extend: {},\n  },\n  plugins: [require("@tailwindcss/forms"), require("@andromedaprotocol/core")],\n};\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Andromeda Design System required ",(0,a.kt)("inlineCode",{parentName:"p"},"jit")," mode and ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwindcss")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"2.1.4")," or higher (",(0,a.kt)("inlineCode",{parentName:"p"},"basic")," mode seems buggy when compiling some components)"),(0,a.kt)("h2",null,"Quick start"),(0,a.kt)("p",null,"Here's a quick example to get you started, ",(0,a.kt)("strong",{parentName:"p"},"it's literally all you need:")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),'import * as React from "react";\nimport {\n  AndromedaDesignSystemProvider,\n  Button,\n} from "@andromedaprotocol/react";\n\nfunction App() {\n  return (\n    <AndromedaDesignSystemProvider>\n      <Button>Hello Andromeda Design System</Button>\n    </AndromedaDesignSystemProvider>\n  );\n}\n')))}p.isMDXComponent=!0},26568:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(20531)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=26568,e(e.s=n);var n}));var n=e.O();_N_E=n}]);