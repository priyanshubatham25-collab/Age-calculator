import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = (e) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();
    const year = Number(birthYear);

    // Validation
    if (!birthYear) {
      setError("Please enter your birth year.");
      setAge(null);
      return;
    }

    if ( year > currentYear) {
      setError(`That year is in the future! Please enter a birth year up to ${currentYear}.`);
      setAge(null);
      return;
    }

    // Calculate age
    const calculatedAge = currentYear - year;

    setAge(calculatedAge);
    setError("");
  };

  const resetCalculator = () => {
    setBirthYear("");
    setAge(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Age Calculator
        </h1>

        {/* Form */}
        <form onSubmit={calculateAge}>
          <div className="mb-6">
            <label
              htmlFor="birthYear"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Enter your birth year:
            </label>

            <input
              id="birthYear"
              type="text"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder="e.g. 2000"
              className="w-full px-4 py-3 rounded-xl
                         border border-slate-600
                         bg-slate-700
                         text-white
                         placeholder:text-slate-400
                         outline-none
                         transition duration-200
                         focus:border-emerald-400
                         focus:ring-4 focus:ring-emerald-400/20"
            />

            {/* Error */}
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-slate-950
                       font-bold py-3 rounded-xl
                       transition duration-200
                       hover:bg-emerald-400
                       hover:shadow-lg hover:shadow-emerald-500/20
                       active:scale-95"
          >
            Calculate Age
          </button>
        </form>

        {/* Result */}
        {age !== null && (
          <div className="mt-6 rounded-xl bg-slate-700 border border-emerald-500/30 p-6 text-center">
            <p className="text-slate-400 text-sm">Your age is</p>

            <p className="text-5xl font-bold text-emerald-400 mt-2">{age}</p>

            <p className="text-slate-300 mt-1">years old 🎉</p>

            {/* Reset */}
            <button
              type="button"
              onClick={resetCalculator}
              className="mt-5 px-5 py-2 rounded-lg
                         border border-slate-600
                         text-slate-300
                         hover:bg-slate-600
                         hover:text-white
                         transition"
            >
              Calculate Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
