import React,{useState,useEffect} from "react";
import axios from 'axios';
import { VerticalGraph } from "./verticalgraph";
// import {holdings} from '../data/data'

const Holdings = () => {
  const [allHoldings,setallHoldings] = useState([]);
  useEffect(()=>{
    axios.get("https://zerodha-clone-backend-wb5i.onrender.com/allHoldings").then((res)=>{
      console.log(res.data);
      setallHoldings(res.data);
    });
  },[]);


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels=allHoldings.map((subArray)=>subArray["name"]);

const data={
  labels,
  datasets:[
    {
      label: "Stock Price",
      data: allHoldings.map((Stock) => Stock.price),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>stock name</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock,index)=>{
            const currvalue = stock.price*stock.qty;
            const isProfit = currvalue-stock.avg*stock.qty>=0.0;
            const profitclass=isProfit?"profit":"loss";
            const dayclass=stock.isLoss?"loss":"profit";

            return(
              <tr key={index} className="item">
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currvalue.toFixed(2)}</td>
            <td className={profitclass}>{(currvalue-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={profitclass}>{stock.net}</td>
            <td className={dayclass}> {stock.day} </td>
          </tr>
            )
          })}

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>  
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;