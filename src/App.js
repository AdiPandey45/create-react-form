
import './App.css';
import { useState } from 'react';
import './index.css' 

function App() {
  const [formData, setFormData] = useState({ 
    firstName: "", lastName: "", email: "", street: "",   
    city: "", state: "", zip: "", comments: true, candidates: false, offers: false, offer: ""   
  });
 
 
  const changeHandler = (event) => { 
    const { name, value, checked, type } = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    console.log(formData);

  }

  return (
    <div className='form1'>
      <form>
        <div className='info'>
          <h4>First Name</h4>

          <input type='text' name='firstName' placeholder='Adi' value={formData.firstName} onChange={changeHandler}></input>

          <h4>Last Name</h4>

          <input type='text' name='lastName' placeholder='Pandey' value={formData.lastName} onChange={changeHandler}></input>

          <h4>Email address</h4>
          <input type='email' name='email' placeholder='adipandey1405@gmail.com' value={formData.email} onChange={changeHandler}></input>

          <h4>Country</h4>
          <select name='Country' value={formData.country}>
            <option name='India'>India</option>
            <option name='Pakistan'>Pakistan</option>
            <option name='USA'>USA</option>
            <option name='Indonesia'>Indonesia</option>
          </select>

          <h4>Street Address</h4>

          <input type='text' name='street' placeholder='E-804,Pramukh Residency' value={formData.street} onChange={changeHandler}></input>

          <h4>City</h4>

          <input type='text' name='city' placeholder='Chala' value={formData.city} onChange={changeHandler}></input>

          <h4>State/Province</h4>

          <input type='text' name='state' placeholder='Gujarat' value={formData.state} onChange={changeHandler}></input>


          <h4>ZIP/Postal Code</h4>

          <input type='text' name='zip' placeholder='396191' value={formData.zip} onChange={changeHandler}></input>
        </div>

        <div className='tech'>
          <h4>By Email</h4>
          <br></br>
          <input type='checkbox' name='comments' checked={formData.comments} id='comments' onChange={changeHandler}></input>
          <label htmlFor='comments'>Comments</label>
          <p>Get notified when someones  psots a comment  on a posting</p>

          <input type='checkbox' name='candidates' checked={formData.candidates} id='candidates' onChange={changeHandler}></input>
          <label htmlFor='candidates'>Candidates</label>
          <p>Get notified when a candidate gets a job</p>

          <input type='checkbox' name='offers' checked={formData.offers} id='offers' onChange={changeHandler}></input>
          <label htmlFor='comments'>offers</label>
          <p>Get notified when a candidate accepts or rejects a job</p>
          <br></br>

          <div className='push'>
            <h4>Push Notifications</h4>
            <p>These are delivered  via SMS to your mobile phone</p>
            <br></br>
            <div>
              <input type="radio" id="everything" name="offer" value="everything"
                onChange={changeHandler} checked={formData.offer === "everything"} />
              <label htmlFor="everything">Everything</label>
            </div>

            <div>
              <input type="radio" id="same" name="offer" value="same"
                onChange={changeHandler} checked={formData.offer === "same"} />
              <label htmlFor="same">Same</label>
            </div>
            <div>

              <input type="radio" id="no" name="offer" value="no"
                onChange={changeHandler} checked={formData.offer === "no"} />
              <label htmlFor="no">No</label>
            </div>


          </div>


        </div>

   <button onClick={submitHandler} className='save'>
    Save
   </button>


      </form>


    </div>
  );
}

export default App;
