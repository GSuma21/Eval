import React from "react";

export const Register =() =>{
    const [fDetails, setfDetails] = React.useState({
        name:"",
        email:"",
        password:"",
        username: "",
        mobile: "",
        description: ""
    })


const handleChange = (e) =>{
    const value = e.target;


    setfDetails({
        ...setfDetails,value
    });
}
const handleSubmit = (e) =>{
    e.preventDefault();

   console.log(fDetails)
}


const {Name, email ,password,username,mobile,description } = fDetails;
return (
    <form >
        <h1>Login Page</h1>
        <input name="Name" type="text" placeholder="Name" value={Name} onChange ={handleChange}/>
        <br />
        <input name="email" type="text" placeholder="email" value={email} onChange ={handleChange}/>
        <br />
        <input name="password"type="text" placeholder="password" value={password} onChange ={handleChange}/>
        <br />
        <input name="username" type="text" placeholder="username" value={username} onChange ={handleChange}/>
        <br />
        <input name="mobile" type="text" placeholder="mobile" value={mobile} onChange ={handleChange}/>
        <br />
        <input name="description" type="text" placeholder="description" value={description} onChange ={handleChange}/>
        <br />
        <input type="submit" value="Register" onChange ={handleSubmit}/>
        </form>
)

}