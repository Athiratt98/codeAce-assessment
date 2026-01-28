interface Props {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  page,
  totalPages,
  onPageChange
}: Props) {
  return (
    <div className="flex items-center gap-4 h-full">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="text-sm leading-none">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
