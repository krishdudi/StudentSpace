import React from 'react'
import { Container } from 'react-bootstrap';
import {Pie} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import Transaction from './Transaction';
import './expense.css'

const Expenses = () => {
Chart.register(ArcElement);
  return (
    <Container className="expenses">
        <div className="heading-expenses">Expense Tracker</div>
        <div className="mnn">
            <div className="bal">
                <div className="bal-head">Your Balance:&nbsp;  <span style={{color: 'white', letterSpacing: '1px'}}>15000$</span></div>
                {/* <div className="bal-val">15000$</div> */}
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
            <Transaction/>
        </div>
    </Container>
  )
}

export default Expenses