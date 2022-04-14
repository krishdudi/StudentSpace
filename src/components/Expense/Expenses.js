import React, {useState, useEffect} from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import {Pie} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import Transaction from './Transaction';
import {BASE_URL} from '../../Api';
import expenseContext from '../../context/expense/expenseContext';
import './expense.css'

const Expenses = () => {
// const balanceInitial = [];
  const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [expenses, setExpenses] = useState([]);
  const fetchExpenses = async () => {
    //API call
    const response = await fetch(`${BASE_URL}user/getExpenses`, {
      method: "GET",
      headers: {
        "Authorization": localStorage.getItem('token')
      },
    });
    const json = await response.json()
    // console.log(json);
    setBalance(json.balance);
    console.log(json.expenseList);
    console.log(expenses)
  };
useEffect(() => {
  fetchExpenses();
  console.log(expenses);
}, [])

    const addBalance = async (e) => {
        e.preventDefault();
        console.log("The amount is -",amount.amount);
        var jsonData = {"amount" : parseInt(amount.amount)};
        const response = await fetch(`${BASE_URL}user/addBalance`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              "Authorization": localStorage.getItem('token')
            },
            body : JSON.stringify(jsonData)
          });

          const json = await response.json();
          console.log(json);
         // setBalance(json.balance);
    }
    const onChange = (e)=>{
        
        // console.log("The entered amount is - ",amount,"  ",e.target.value);
        // console.log(typeof(e.target.value));
        setAmount(e.target.value);
    }

//amount is not the number - amount is - {"amount" : string}
Chart.register(ArcElement);
  return (
    <Container className="expenses">
        <div className="heading-expenses">Expense Tracker</div>
        <div className="mnn">
            <div className="bal">
                <div className="bal-head">Your Balance:&nbsp;  <span style={{color: 'white', letterSpacing: '1px'}}>${balance}</span></div>
                {/* <div className="bal-val">15000$</div> */}
                <Form onSubmit={() => addBalance()}>
                    <input type="number" placeholder="Amount" value={amount.amount} onChange={onChange} id="amount" name="amount" />
                    <Button type="submit" className="bal-add">AddBalance</Button>
                </Form>
                <Pie
                    data={{
                        labels:['out', 'in'],
                        datasets: [{
                            data:['1000', '2000'],
                            backgroundColor: ['red', 'orange']
                        }]
                    }}
                    options={{
                        responsive:true,
                    }}
                    labels={['out', 'in']}
                    height={300}
                />
                <div className='inc-exp-container dark-mode'>
                    <div>
                        <h4>Income</h4>
                        <p className='money plus'>1500 $</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p className='money minus'>12222 $</p>
                    </div>
                </div>
            </div>
            <Transaction />
        </div>
    </Container>
  )
}

export default Expenses