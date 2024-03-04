import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

// a user will fill in initialInvestment, annualInvestment, expectedReturn,duration.
export default function UserInput({onChange, userInput}){


    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label> Inital Investment</label>
                    <input type="number" required value={userInput.initialInvestment}
                    onChange={(event) => onChange("initalInvestment", event.target.value)} />
                </p>
                <p>
                    <label> Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment}
                    onChange={(event) => onChange("annualInvestment", event.target.value)} />
                </p>
                <p>
                    <label> Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn}
                    onChange={(event) => onChange("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <label> Duration</label>
                    <input type="number" required value={userInput.duration}
                    onChange={(event) => onChange("duration", event.target.value)} />
                </p>
            </div>


        </section>
    )
}