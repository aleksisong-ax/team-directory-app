export default function Button({ label, onClick, variant = 'primary', children }) {
  return (
    <div className="button-wrap">
      <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
        {label}
      </button>
      {children}
    </div>
  )
}
