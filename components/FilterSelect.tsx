interface Props {
  value: string
  options: string[]
  onChange: (value: string) => void
}

export default function FilterSelect({ value, options, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-3 py-2"
    >
      <option value="all">All Categories</option>
      {options.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  )
}
