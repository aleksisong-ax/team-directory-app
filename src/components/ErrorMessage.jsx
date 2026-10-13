// Red box that shows a message, like "No users found."
export default function ErrorMessage({ message }) {
  return <p className="error-message">{message}</p>
}
