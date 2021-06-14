import toast, { Toaster } from 'react-hot-toast'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default function GeneratePDF({ reports, year, month }) {

  function generate() {

    if(reports.length == 0) {
      toast.error('No data to download!',
        {
          icon: '⚠️'
        }
      )
      return
    }

    const doc = new jsPDF()

    doc.autoTable({
      head: [['Requesting Person', 'Reported Issue', 'Resolution Made', 'Date Reported', 'Date Resolved']],
      body: 
        reports.map(({ requesting_person, reported_issue, resolution_made, date_reported, date_resolved }) => {
          return [
            requesting_person,
            reported_issue,
            resolution_made,
            date_reported,
            date_resolved
          ]
        }),
    })

    doc.save(`Monthly Report - ${month.month} ${year.year}`)
  }

  return (
    <div>
      <Toaster 
        position="top-center"
        reverseOrder={true}
      />
      <button
        type="button"
        onClick={generate}
        className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-44 bg-cerulean rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
      >
      <DownloadIcon />
      <span>PDF</span>
    </button>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
  )
}