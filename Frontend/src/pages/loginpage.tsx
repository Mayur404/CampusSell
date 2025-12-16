import { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [ showPassword, setShowPassword ] = useState(true);
  const [ showConfirmPassword, setShowConfirmPassword] = useState(true);
  return (
  
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF2] px-4">
      <div className="w-full max-w-md bg-white border border-black/10 rounded-2xl p-8 shadow-lg">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-[#111] mb-2 tracking-wide">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h1>
        <p className="text-center text-black/70 mb-8">
          {isLogin
            ? "Login to continue to CampusSell"
            : "Sign up to start buying & selling"}
        </p>

        {/* Form */}
        <form className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          
          {/* Password */}
          <div className='relative'>
          <input
            type={showPassword ? "password" : "text"}
            placeholder="Password"
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
          type='button'
          onClick={()=> setShowPassword(!showPassword)}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-black/60 hover:text-black'
          >
              {showPassword ? <RiEyeOffLine size={20}/> : <RiEyeLine size={20}/>}
          </button>
          </div>

          {!isLogin && (
            <div className='relative'>

            <input
              type={showConfirmPassword ? "password" : "text"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
            type='button'
            onClick={() => {
              setShowConfirmPassword(!showConfirmPassword)
            }}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-black/60 hover:text-black'
            >
              {showConfirmPassword ? <RiEyeOffLine size={20}/> : <RiEyeLine size={20}/>}
            </button>

            </div>
          )}

          {/* Submit*/}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-black/90 transition-all"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-black/70 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-semibold text-black underline hover:opacity-80"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginPage;