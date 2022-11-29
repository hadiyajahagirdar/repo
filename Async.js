fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((data)=>{
   // console.log(data);
   return data.json();//converted to objects
}).then((objectData)=>{
    console.log(objectData[0].id);
    let tableData="";
    objectData.map((values)=>{
      tableData+=` <tr>
      <td><img src="${values.image}"/></td>
      <td>${values.name}</td>
      <td>${values.symbol}</td>
      <td>${values.current_price}</td>
      <td>${values.price_change_percentage_24h}</td>

      <td>${values.market_cap}</td>
    </tr>`;
      document.getElementById("table_body").innerHTML= tableData; 
    })
})