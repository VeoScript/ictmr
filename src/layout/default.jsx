import SideBar from '~/components/SideBar'

export default function Layout({ children }) {
  return (
    <div className="font-poppins flex flex-row w-full h-screen mx-auto transition ease-in-out duration-700 overflow-y-auto bg-panther text-bright-white">
      <div className="flex w-full h-auto">
        <div className="flex flex-row justify-between w-full h-full">
          <div className="flex flex-col w-full max-w-[4rem] h-full overflow-hidden">
            <SideBar />
          </div>
          <div className="flex flex-col items-center w-full max-w-full h-full overflow-hidden">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}