import React from "react";

export const Login =() =>{
    const [formDetails, setformDetails] = React.useState({
        email:"",
        password:""
    })


const handleChange = (e) =>{
    const {name,value} = e.target;

    setformDetails({
        ...formDetails,[name]:value
    });
}
const handleSubmit = (e) =>{
    e.preventDefault();

   console.log(formDetails)
}


const {email ,password} = formDetails;
return (
    <form >
        <h1>Login Page</h1>
        <input name="email" type="text" placeholder="email" value={email} onChange ={handleChange}/>
        <br />
        <input name="password"type="text" placeholder="password" value={password} onChange ={handleChange}/>
        <br />

        <input type="submit" value="login" onChange ={handleSubmit}/>
        </form>
)

}