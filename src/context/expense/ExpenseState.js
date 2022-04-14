import React, { useState } from "react";
import ExpenseContext from "./expenseContext";
import { BASE_URL } from "../../Api";

const ExpenseState = (props) => {
    const [expense, setExpense] = useState();
    const fetchExpenses = async () => {
        //API call
        
        const response = await fetch(`${BASE_URL}studentspace/getArticles`, {
          method: "GET",
          headers: {
    
          },
        });
        const json = await response.json()
        console.log(json);
        setExpense(json);
        // console.log(typeof(notes));
        // console.log(json.articles);
        // console.log(typeof(json.articles));
      };
  return (
    <ExpenseContext.Provider value={{ expense, fetchExpenses }}>
      {props.children};
    </ExpenseContext.Provider>
  )
}

export default ExpenseState