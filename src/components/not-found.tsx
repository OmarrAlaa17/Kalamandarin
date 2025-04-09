import logo from "@/assets/icons/logo.png"
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20 min-h-[80vh] ">
        <img src={logo} alt="Not Found" className="w-64"/>
        <h1 className="text-4xl font-bold text-center text-gray-800">الصفحة غير موجودة!</h1>
    </div>
  )
}

export default NotFound
