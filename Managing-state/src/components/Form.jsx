export default function Form({ status = "empty" }) {
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea
          className="border"
          placeholder="Your answer here"
          disabled={status === "submitting"}
        />
        <br />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 cursor-pointer 
          hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={status === "submitting"}
        >
          Submit
        </button>

        {status === "error" && (
          <p className="Error">Good guess but a wrong answer. Try again!</p>
        )}
      </form>
    </>
  );
}
