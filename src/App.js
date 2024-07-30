import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  const[principle,setPrinciple]= useState(0);
  const[rate, setRate]= useState(0);
  const[year, setYear]= useState(0);
  const[interest, setInterest]= useState(0);
  
  // state to store whether input field values are valid 
  const[isPrincipleValid,setIsPrincipleValid]= useState(true);
  const[isYearValid,setIsYearValid]= useState(true);
  const[isRateValid,setIsRateValid]= useState(true);

    
    const validate =(e)=>{
    const{name,value}=e.target;
    //if(!! value.match(/^[1-9][0-9]*$/))- To check Whether 
    if(!! value.match(/^[1-9][0-9]*\.?[0-9]*$/)){
      if (name === 'principleAmount' ){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }
      else if (name === 'interestRate' ){
      setRate(value)
      setIsRateValid(true)
      }
      else {
      setYear(value)
      setIsYearValid(true)
      }
    }
    else{
      if (name === 'principleAmount' ){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }
      else if (name === 'interestRate' ){
      setRate(value)
      setIsRateValid(false)
      }
      else {
      setYear(value)
      setIsYearValid(false)
      }
    
    }
  
  }
  
  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("Principle Amount Entered",principle)
    console.log("Interest Rate",rate)
    console.log("Total Years",year)
    const result=((principle*rate*year)/100)
    setInterest(result)
  }

   const resetValues = () =>{
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setIsPrincipleValid(true);
    setIsRateValid(true);
    setIsYearValid(true);
   }
  return (
    <>
      <div style={{backgroundColor:'black',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div style={{backgroundColor:'white', width:'500px'}} className='p-5 rounded'>
        <h2 className='text-primary'>Simple Interest</h2>  
        <p>Calculate your simple interest easily</p>
        <div style={{height:'150px',backgroundColor:'orange'}} 
          className='p-3 mt-3 rounded shadow d-flex justify-content-center align-items-center flex-column'>
          <h2 className='fw-bold'>&#x20B9;{interest}</h2>  
          <p>Total Simple Interest</p>
        </div>
          <form onSubmit={handleCalculate}>
            <div className='mt-3'>
            <TextField id="outlined-basic" label="Principle Amount" name="principleAmount" variant="outlined" className='w-100' value={principle||""} onChange={(e)=>validate(e)}/>
            {
              
              !isPrincipleValid &&
              <p className='text-danger'>Invalid Input</p>
            }
            </div>
            <div className='mt-3'>
            <TextField id="outlined-basic" label="Rate of Interest in %" name="interestRate" variant="outlined" className='w-100' value={rate||""} onChange={(e)=>validate(e)}/>
            {
              
              !isRateValid &&
              <p className='text-danger'>Invalid Input</p>
            }
            </div>
            <div className='mt-3'>
            <TextField id="outlined-basic" label="Total Years" name="totalYear" variant="outlined" className='w-100' value={year||""} onChange={(e)=>validate(e)}/>
            {
              
              !isYearValid &&
              <p className='text-danger'>Invalid Input</p>
            }
            </div>
            <div className='mt-3 d-flex justify-content-between'>
            <Button  variant="outlined" color="error" style={{ width:'190px',padding:'10px'}} onClick={resetValues}>Reset</Button>
            <Button  type="submit" variant="contained" color="success" style={{ width:'190px',padding:'10px'}} disabled={isPrincipleValid && isRateValid && isYearValid ? false:true}>Calculate</Button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
