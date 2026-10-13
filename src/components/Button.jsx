// Reusable button. variant decides the color: "primary" (blue) or "danger" (red)
export default function Button({ label, onClick, variant = 'primary', children }) {
  return (
    <div className="button-wrap">
      <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
        {label}
      </button>
      {/* Extra content shown below the button, if any */}
      {children}
    </div>
  )
}
