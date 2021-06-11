import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Year() {
  const router = useRouter()
  const { year } = router.query

  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-panther">
      <h1 className="font-black text-7xl">Year: { year }</h1>
      <ul className="flex flex-col items-center w-full h-full mt-10 space-y-5">
        <li>
          <Link href="/monthly-reports/[year]/[month]" as={`/monthly-reports/${year}/january`}>
            <a className="font-bold text-5xl">January</a>
          </Link>
        </li>
        <li>
          <Link href="/monthly-reports/[year]/[month]" as={`/monthly-reports/${year}/february`}>
            <a className="font-bold text-5xl">February</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}