import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //add piece of state
  // const array = useState(1);
  //new piece of state
  const [isOpen, setIsOpen] = useState(true);
  // console.log(array);
  //results in array, position One is with argument (1) and the second one is function which will
  //defining useState variable
  const [step, setStep] = useState(1);

  //defining functions
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    // entity &times; gives cross symbol
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {/* array is zero based so we start with 1-1 =0*/}
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ background: "violet", color: "white" }}
              className="previous"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="next"
              style={{ background: "violet", color: "white" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
