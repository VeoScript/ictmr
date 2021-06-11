import Link from 'next/link'

export default function DisplayMonth() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full max-w-full h-full overflow-y-auto px-5 py-5 rounded-xl bg-light-panther">
      <Link href="/monthly-reports/[year]/[month]" as={`/monthly-reports/2021/january`}>
        <a className="flex flex-col w-full h-[7rem] px-10 py-5 rounded-xl bg-panther transition ease-in-out duration-300 transform hover:scale-95 hover:shadow-md">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col w-full space-y-1">
              <h1 className="font-bold text-3xl">January</h1>
              <span className="font-light text-sm text-cool-gray">See my entries in this month</span>
            </div>
            <h1 className="font-bold text-5xl text-cerulean">45</h1>
          </div>
        </a>
      </Link>
    </div>
  )
}