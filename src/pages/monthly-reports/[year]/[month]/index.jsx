import { useRouter } from 'next/router'

export default function Reports() {
  const router = useRouter()
  const { year, month } = router.query

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
     <h1>All reports from the month of <span className="font-bold text-2xl uppercase">{ month }</span>, <span className="font-bold text-2xl">{ year }</span></h1>
    </div>
  )
}