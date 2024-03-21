export default function Button({ children, onClick }) {
  return (
    <div className="button-container">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
