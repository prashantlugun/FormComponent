// "use client"

// import React, { FormEvent, useState } from 'react'
// import { LoginProps } from './type';
// import Input from '../Input';
// const Login = ({ inputs, onLogin }: LoginProps) => {


//     console.log('inputs :: ', inputs);
//     const [isValid, setIsValid] = useState(false);

//     const showData = (e: FormEvent<HTMLFormElement>): void => {
//         e.preventDefault();
//         const data = new FormData(e.currentTarget);
//         console.log("data :: ", data);

//         isValid
//             ? onLogin({
//                 username: data.get("username") as string,
//                 email: data.get("email") as string,
//                 password: data.get("password") as string,
//             })
//             : console.log("Invalid Data");
//     };

//     return (
//         <>
//             <form onSubmit={showData}>
//                 {inputs.map((input, index) => (
//                     <Input key={index} type={input.type} name={input.name} onValidate={(v: any) => setIsValid(v)} />
//                 ))}
//                 <button type="submit">submit</button>
//             </form>
//         </>
//     )
// }

// export default Login