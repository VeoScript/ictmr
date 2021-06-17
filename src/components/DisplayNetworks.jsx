export default function DisplayNetworks({ networks, networkStatus }) {
  return (
    <div className="flex flex-col items-center w-full px-10 py-10 pb-20 space-y-5">
      <div className="flex flex-row w-full space-x-5">
        <div className="flex flex-col w-full max-w-full">
          <div className="flex flex-col w-full h-full px-5 py-5 bg-light-panther text-bright-white rounded-xl">
            <div className="head flex flex-row justify-between items-center w-full">
              <span className="font-bold text-xl">Network Information</span>
            </div>
            <div className="flex flex-col w-full mt-5 space-y-3">
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Main Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_main }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_main }</span>
                </div>
              </div>
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Backup Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_backup }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_backup }</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-3 space-y-3">
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Staff House Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_staffhouse }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_staffhouse }</span>
                </div>
              </div>
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Office Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_office }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_office }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm">
          <div className="flex flex-col w-full h-full px-5 py-5 bg-light-panther text-bright-white rounded-xl">
            <div className="head flex flex-row justify-between items-center w-full">
              <span className="font-bold text-xl">Internet Monitoring</span>
            </div>
            <div className="flex flex-col w-full mt-5 space-y-3">
              <div className="flex flex-row items-center justify-between w-full px-10 py-3 rounded-full bg-panther text-bright-white space-x-2">
                <span className="font-light text-sm text-cool-gray">Downtime</span><span className="font-bold text-2xl text-scarlet">5</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-normal text-lg text-cerulean">{ networks[0].internet_staffhouse }</span>
                <span className="font-light text-sm text-cool-gray">Staffhouse Internet</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-normal text-lg text-cerulean">{ networks[0].internet_office }</span>
                <span className="font-light text-sm text-cool-gray">Office Internet</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-normal text-base text-bright-white">{ networkStatus }</span>
                <span className="font-light text-sm text-cool-gray">Network Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-5 py-5 bg-light-panther text-bright-white rounded-xl">
        <div className="head flex flex-row justify-between items-center w-full">
          <span className="font-bold text-xl">Downtime Report</span>
        </div>
      </div>
    </div>
  )
}