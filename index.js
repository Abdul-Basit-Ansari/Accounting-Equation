const activeAssests = () =>{
  console.log("activeAssest");
  let assestsBox = document.getElementById("assestsBox")
  assestsBox.style.display ="flex"
  let revenueBox = document.getElementById("revenueBox")
  revenueBox.style.display ="none"
}
const activeRevenue = () =>{
  console.log("activeRevenue");
  let revenueBox = document.getElementById("revenueBox")
  revenueBox.style.display ="flex"
  let assestsBox = document.getElementById("assestsBox")
  assestsBox.style.display ="none"
}
const resAssestData = ()=>{
  console.log("submit")
  let ass = Number(document.getElementById("assests").value) 
  let lia = Number(document.getElementById("liability").value) 
  let cap = Number(document.getElementById("capital").value)
  let res = document.getElementById("res")
  let ans
  res.innerHTML =""
  
  if ((!ass && !lia) || (!ass && !cap) || (!lia && !ass) ||(!lia && !cap) ||(!cap && !ass) || (!cap && !lia) ) {
    res.innerHTML = "Minimun 2 Fields Values Must Required ."
  }
  if (ass && lia && !cap  ) {
    ans = Number(ass - lia)
    res.innerHTML = `Assests = Liability  + Capital <hr>Capital = Assests - Liability <br> Capital =  ${ass} - ${lia}<br>Capital = ${ans}  `
  }
  if (ass && cap && !lia  ) {
    ans = Number(ass - cap) 
    res.innerHTML = `Assests = Liability + Capital <hr>Liability = Assests - Capital <br> Liability =  ${ass} - ${cap}<br>Liability = ${ans}  `
  }
  if (lia && cap && !ass  ) {
    ans = Number(lia + cap) 
    res.innerHTML = `Assests = Liability + Capital <hr>Assests =  ${lia} + ${cap}<br>Assests = ${ans}  `
  }
}

const resRevenueData = ()=>{
  let rev = Number(document.getElementById("revenue").value) 
  let exp = Number(document.getElementById("expense").value) 
  let pol = Number(document.getElementById("profitLoss").value)
  let res = document.getElementById("res")
  let ans
  res.innerHTML =""
  
  if ((!rev && !exp) || (!rev && !pol) || (!exp && !rev) ||(!exp && !pol) ||(!pol && !rev) || (!pol && !exp) ) {
    res.innerHTML = "Minimun 2 Fields Values Must Required ."
  }
  if (rev && exp && !pol  ) {
    ans = Number(rev - exp)
    let checkPol
    if(ans >= 0){
      checkPol = "Profit"
    }
    if(ans < 0){
      checkPol = "Loss"
    }
    res.innerHTML = `Revenue + Expense = Profit / Loss <hr>${rev} + ${exp} = Profit / Loss <br>${checkPol} = ${ans}  `
  }
  if (rev && pol && !exp  ) {
    ans = Number(rev - pol)
    res.innerHTML = `Revenue + Expense = Profit / Loss <hr> Revenue - Profit / Loss = Expense <br> ${rev} - ${pol} = Expense <br>Expense = ${ans}  `
  }
  if (exp && pol && !rev  ) {
    ans = Number(pol + exp)
    res.innerHTML = `Revenue + Expense = Profit / Loss <hr> Revenue = Profit / Loss + Expense <br> Revenue = ${pol} + ${exp} <br>Revnue = ${ans}  `
  }
}
