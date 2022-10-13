import '../styles/App.css'
import Logo from "../assets/logo.png";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {
    const [form , setForm] = useState({
        fname:"",
        lname:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();

  const submitHandler = () => {
    
      if(form.fname === "" || form.lname === "" || form.email === "" || form.password === ""){
          alert("Please fill the Required Field")
      }else{
        navigate("/verify")
      }
    
  } 


  return (
    <div className="App" style={{height:'auto', width:'100%'}}>
      <div className="sidebar">
        <img src={Logo} alt="logo" />
        <div className="content">
          <div>Registration</div>
          <div style={{ fontWeight: "600" }}>Become a partner</div>
          <br />
          <div className="span">
            RAMAERA is the future of upcoming Industrialisation in India,aiming
            presence in all kind of manufacturing sector’s
          </div>
        </div>
      </div>
      <div className="curve">
      <div className="register">
        <div style={{display:"flex",justifyContent:"flex-end"}} className="header">
          <div style={{margin:"20px"}}>
          <span>English(UK)</span>
          <ArrowDropDownIcon style={{margin:"-5px"}}/>
          </div>       
        </div>
        <div className="main">
          <div className="heading">
          <h1>Register Individual Accounts</h1>
          <span>For the purpose of industry regulation, your<br/> details are required.</span>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <div className='info'>
             <input onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})} placeholder="First Name" name="fname" type="text" />
             <input onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})} placeholder="Last Name" name="lname" type="text" />
             <input onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})} placeholder="Email" name="email" type="email" />
             <input onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})} placeholder="referral-ID" name="id" type="text" />
             <input onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})} placeholder="Password" name="password" type="password" />
             <div style={{display:"flex",justifyContent:"center"}}>
             <button type="submit" onClick={()=>submitHandler()}>Sign Up</button>
             </div>
          </div>
          </div>
          

        </div>
      </div>

      </div>
     
    </div>
  );
}

export default App;
