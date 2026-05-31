import React,{useState,useEffect} from "react";
import axios from "axios";

const Positions = () => {
  const [allpositions,setallpositions] = useState([]);
  useEffect(()=>{
    axios.get("https://zerodha-clone-backend-wb5i.onrender.com/allPositions").then((res)=>{
      console.log(res.data);
      setallpositions(res.data);
    });
  },[])
  return (
    <>
      <h3 className="title">Positions {allpositions.length}</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allpositions.map((stock,index)=>{
                      const currvalue = stock.price*stock.qty;
                      const isProfit = currvalue-stock.avg*stock.qty>=0.0;
                      const profitclass=isProfit?"profit":"loss";
                      const dayclass=stock.isLoss?"loss":"profit";
          
                      return(
                        <tr key={index} classname="item">
                          <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profitclass}>{(currvalue-stock.avg*stock.qty).toFixed(2)}</td>
                      <td className={dayclass}> {stock.day} </td>
                    </tr>
                      )
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;