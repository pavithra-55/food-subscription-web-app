import React, { use, useState } from 'react'
import './css/Plan.css';

const Plan = () => {
  const [plan, setPlan] = useState('monthly');
  const [type, setType] = useState('veg');
  const [mealType, setMealType] = useState([]);

  const price = {
    breakfast: 40,
    lunch: 80,
    dinner: 70
  };

  const totalPrices = ()=>{
    const totalPrice = mealType.reduce((total, meal) => {
  return total + price[meal];
}, 0);
    if(plan === 'monthly' && type==='veg'){
      return totalPrice*26;
    }else if(plan === 'monthly' && type==='nonveg'){
      return totalPrice*26+500;
    }else if(plan == 'weekly' && type==='veg'){
      return totalPrice*6;
    }else if(plan==='weekly' && type==='nonveg'){
      return totalPrice*6+200;
    }
  }
  const handleMealChange = (e) =>{
    const {value , checked} = e.target;
    if(checked){
      setMealType([...mealType, value]);
    }else{
      setMealType(mealType.filter((meal)=>meal !== value));
    }
    
  }
  const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
  
  return (
    <div className='mt-5' id='plan'>
     <div className='container'>
       <h2 className='mb-4'>Choose a Plan</h2>
      <p className='sunday-leave'>** All Sundays are leave **</p>
      <div className='row border p-4 rounded'>
        <div className='col-md-4'>
          {/* plan */}
          <div className="mb-4">
            <h5 className='mb-3'>Choose Plan</h5>
            <div className="form-check">
              <input type='radio' name='monthly' value='monthly' checked={plan === 'monthly'} onChange={(e)=>setPlan(e.target.value)} className="form-check-input" />
              <label className='form-check-label'>Monthly</label>
            </div>
            <div className="form-check">
              <input type='radio' name='weekly' value='weekly' checked={plan==='weekly'} onChange={(e)=>setPlan(e.target.value)} className='form-check-input' />
              <label className='form-check-label'>Weekly</label>
            </div>
          </div>
          {/* Type */}
          <div>
            <h5 className="mb-3">Choose Type</h5>
            <div className="form-check">
              <input type='radio' name='veg' value='veg' checked={type==='veg'} onChange={(e)=>setType(e.target.value)} className='form-check-input'/>
              <label className='form-check-label'>Veg</label>
            </div>
            <div className="form-check">
              <input type='radio' name='nonveg' value='nonveg' checked={type==='nonveg'} onChange={(e)=>setType(e.target.value)} className='form-check-input'/>
              <label className='form-check-label'>Non-Veg</label>
            </div>
          </div>

          {/*meals type*/}
          <div>
            <h5 className='mb-3'>Select Meals</h5>
            <div className="form-check">
              <input type='checkbox' className='form-check-input' name='breakfast' value='breakfast' onChange={handleMealChange}/>
              <label className='form-check-label'>Breakfast</label>
            </div>
            <div className="form-check">
              <input type='checkbox' className='form-check-input' name='lunch' value='lunch' onChange={handleMealChange}/>
              <label className='form-check-label'>Lunch</label>
            </div>
            <div className="form-check">
              <input type='checkbox' className='form-check-input' name='dinner' value='dinner' onChange={handleMealChange}/>
              <label className='form-check-label'>Dinner</label>
            </div>

            
          </div>

          
        </div>
        <div className='col-md-8'>
          <div className='p-4 bg-light rounded'>
            <h4 className="mb-3">Plan Details</h4>
            <p><strong>Plan :</strong> {capitalize(plan)}</p>
            <p><strong>Type :</strong> {capitalize(type)}</p>
            <p><strong>Meal Type :</strong> {mealType.length?mealType.map(capitalize).join(' + '):'ALL'}</p>

            <p><strong>Price :</strong>₹{totalPrices()}</p>

            <p style={{color:'red'}}>* A one-time initial payment of ₹1000 is required, and ₹500 will be refunded when the subscription is closed.</p>

            <button className="btn btn-success mt-3">
                Subscribe Now
              </button>
          </div>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Plan
