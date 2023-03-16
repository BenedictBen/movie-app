import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useForm } from "react-hook-form/dist/useForm";
import cover from "../constants/images/cover.jpg";
import logo from '../constants/images/netflix.png';

interface Inputs {
  email: string
  password: string
}

const Login = () => {

  const [login, setLogin] = useState(false)
  
  const 
  { register,
     handleSubmit, 
     watch, formState: { errors } 
} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) =>{
        if (login){
          // await signIn(email, password)
        } else {
          // await signUp(email, password)
        }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black/75 md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Login - Netflix</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Image
        src={cover}
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        // width={200}
        // height={200}
        alt="login-pic"
      />
      <Image
        src={logo}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt="logo"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8 rounded bg-black py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semi
        ">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email" className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              {...register('email', { required: true })}/>
               {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
           <label className="inline-block w-full">
            <input type="password" {...register('password', { required: true })} placeholder="Password" className={`input ${
                errors.password && 'border-b-2 border-orange-500'
              }`}/>
              {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button className="w-full rounded bg-[#e51414] py-3 font-semibold" onClick={() => setLogin(true)}>Sign in</button>

        <div className="text-[gray]">
         New to Netflix{' '}
          <button type="submit" className="text-white hover:underline" onClick={() => setLogin(false)}>Sign up now</button>
        </div>
      </form>
    </div>
  )
}

export default Login