export default function DisplayNetworks() {
  return (
    <div className="flex flex-col items-center w-full px-10 py-10 pb-20 mt-8 space-y-5">
      <div className="flex flex-row items-center w-full space-x-5">
        <div className="flex flex-col w-full max-w-full">
          <div className="flex flex-col w-full h-[21rem] bg-light-panther text-bright-white rounded-xl">
            Display Content Here...
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm">
          <div className="flex flex-col w-full h-[21rem] px-5 py-5 bg-light-panther text-bright-white rounded-xl">
            <div className="head flex flex-row justify-between items-center w-full">
              <span>Downtime Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}