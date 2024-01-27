function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <form>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">How was your experience?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </form>
    </div>
  )
}

export default App
