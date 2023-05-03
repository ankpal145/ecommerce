import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {toast} from 'rreact-toastify'

const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  // form function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password,address,phone);
    toast.success('Register Successfully');
  };
  return (
    <Layout title="Register - Ecommerce App">
    <div className="register">
        <h1>Register Page</h1>
<form onSubmit={handleSubmit}>
  <div classname="mb-3">
    
    <input type="text" value={name}onChange={(e) => setName(e.target.value)}classname="form-control" id="exampleInputEmail1" placeholder="Enter your Name" required/>
    </div>
    <div classname="mb-3">
  
  <div classname="mb-3">
   
    <input type="text"value={email}onChange={(e) => setEmail(e.target.value)} classname="form-control" id="exampleInputEmail1" placeholder="Enter your Email"required/>
    </div>
    <div classname="mb-3">
   
    
  </div>
  <div classname="mb-3">
    
    <input type="password"value={password}onChange={(e) => setPassword(e.target.value)} classname="form-control" id="exampleInputPassword1" placeholder="Enter your Password"required/>
  </div>
  <div classname="mb-3">
    
    <input type="text"value={phone}onChange={(e) => setPhone(e.target.value)} classname="form-control" id="exampleInputEmail1" placeholder="Enter your Phone"required/>
    <div classname="mb-3">
   
    
  </div>
  <div classname="mb-3">
    
    <input type="text" value = {address}onChange={(e) => setAddress(e.target.value)}classname="form-control" id="exampleInputEmail1" placeholder="Enter your Address"required/>
    <div classname="mb-3">
   
    
  </div>
  

  <button type="submit" classname="btn btn-primary">Submit</button>
</form>


    </div>
    </Layout>

  );
};

export default Register;