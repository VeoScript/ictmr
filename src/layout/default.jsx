export default function Layout({ children }) {
  return (
    <div className="font-poppins flex flex-row w-full h-screen mx-auto transition ease-in-out duration-700 overflow-y-auto bg-panther text-bright-white">
      <div className="flex w-full h-auto">
        { children }
      </div>
    </div>
  )
}