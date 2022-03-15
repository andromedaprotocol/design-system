(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7119],{7429:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return i}});var n=o(24246),t=(o(27378),o(44044)),s=o(82745),a={name:"Form Control",importer:'import {\n  FormControl,\n  FormLabel,\n  FormHelperText,\n  FormErrorMessage,\n} from "@andromedaprotocol/react"',demoList:[{name:"Basic Usage",files:[{name:"form-control.tsx",code:'<div className="flex flex-wrap w-full p-8 space-x-4">\n  <FormControl id="email">\n    <FormLabel>\n      Email address\n    </FormLabel>\n    <Input placeholder="jon@gmail.com" />\n    <FormHelperText>We\'ll never share your email.</FormHelperText>\n  </FormControl>\n</div>',readOnly:!1}],openEditor:!0},{name:"React Hook Form",files:[{name:"form-control.js",code:'function App() {\n  const [loading, setLoading] = React.useState(false);\n  const [showPassword, setShowPassword] = React.useState(false)\n  const handleToggleShowPassword = () => setShowPassword(!showPassword)\n\n  const { register, formState: { errors }, handleSubmit } = useForm();\n  const onSubmit = async (data) => {\n    setLoading(true);\n    setTimeout(() => {\n      alert(JSON.stringify(data));\n      setLoading(false);\n    }, 500);\n  };\n  \n  return (\n    <div className="w-full max-w-xs p-8 space-x-4">\n      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">\n        <FormControl invalid={Boolean(errors.username)}>\n          <FormLabel>\n            Username<RequiredIndicator />\n          </FormLabel>\n          <Input {...register("username", { required: true })} placeholder="Enter your username." />\n          {errors.username && errors.username.type === "required" && <FormErrorMessage>Username is required</FormErrorMessage>}\n        </FormControl>\n\n        <FormControl invalid={Boolean(errors.password)}>\n          <FormLabel>\n            Password<RequiredIndicator />\n          </FormLabel>\n          <Input.Group>\n            <Input\n              className="pr-16"\n              type={showPassword ? "text" : "password"}\n              placeholder="Enter password"\n              {...register("password", { required: true })}\n            />\n            <Input.RightElement className="w-16">\n              <Button type="button" size="xs" variant="solid" onClick={handleToggleShowPassword}>\n                {showPassword ? "Hide" : "Show"}\n              </Button>\n            </Input.RightElement>\n          </Input.Group>\n          {errors.password && errors.password.type === "required" && <FormErrorMessage>Password is required</FormErrorMessage>}\n        </FormControl>\n\n        <FormControl>\n          <FormLabel>\n            Gender\n          </FormLabel>\n          <Select {...register("gender")}>\n            <option value="female">female</option>\n            <option value="male">male</option>\n            <option value="other">other</option>\n          </Select>\n        </FormControl>\n\n        <Button type="submit" variant="solid" color="primary" loading={loading}>Submit</Button>\n      </form>\n    </div>\n  );\n}',readOnly:!1}],openEditor:!0}],propList:[{name:"FormControl",value:"form-control",propTypes:[{property:"id",type:["string"],default:"",values:[],description:"The `id` to use for the form control"},{property:"required",type:["boolean"],default:!1,values:[],description:"If `true`, this prop is passed to its children"},{property:"disabled",type:["boolean"],default:!1,values:[],description:"If `true`, this prop is passed to its children"},{property:"invalid",type:["boolean"],default:!1,values:[],description:"If `true`, this prop is passed to its children"},{property:"readOnly",type:["boolean"],default:!1,values:[],description:"If `true`, this prop is passed to its children"}]}]};function i(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{title:"Tailwind CSS FormControl"}),(0,n.jsx)(t.Z,{component:a})]})}},31735:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form-control",function(){return o(7429)}])}},function(e){e.O(0,[1955,3989,1283,3430,2463,9774,2888,179],(function(){return r=31735,e(e.s=r);var r}));var r=e.O();_N_E=r}]);