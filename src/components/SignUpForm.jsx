import React from 'react'
import { useState, useRef } from 'react'
import { signupSchema } from '../schemas/signupSchema'
import { yupToFormErrors } from '../utils/yupToFormErrors'


function SignUpForm() {
  const style = {
    textError: 'text-red-500 font-medium text-right text-xs h-4'
  }

  const [form, setForm] = useState({
    username: '',
    nickname: '',
    password: '',
    confirmPassword: '',
    age: '',
    phoneNumber: '',
    terms: false
  })

  const refs = {
    username: useRef(null),
    nickname: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    age: useRef(null),
    phoneNumber: useRef(null),
    terms: useRef(null)
  }

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, type, checked, value} = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signupSchema.validate(form, { abortEarly: false })
      alert("Sign Up success !")
      setErrors({})
    } catch (err) {
      const errorObj = yupToFormErrors(err, refs)
      setErrors(errorObj)
    }
  }
  return (
    <div className='w-100 flex flex-col justify-center items-center gap-3 p-10 mx-auto rounded-2xl shadow-xl bg-[#eee]'>
      <p className='text-3xl font-bold h-12'>CC20 Sign Up Form</p>
      <form className='flex flex-col w-90 gap-3' onSubmit={handleSubmit}>
        <div className='flex justify-between items-center text-xl'>
          <label>Username :</label>
          <input className='border rounded-2xl px-2 p-1 bg-white'
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            ref={refs.username}
          />
        </div>
        <p className={style.textError}>{errors.username}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Nickname :</label>
          <input className='border rounded-2xl px-2 p-1 bg-white'
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            ref={refs.nickname}
          />
        </div>
        <p className={style.textError}>{errors.nickname}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Password :</label>
          <input className='border rounded-2xl px-2 p-1 bg-white'
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            ref={refs.password}
          />
        </div>
        <p className={style.textError}>{errors.password}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Confirm Password :</label>
          <input className='border rounded-2xl px-2 p-1 bg-white'
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            ref={refs.confirmPassword}
          />
        </div>
        <p className={style.textError}>{errors.confirmPassword}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Age :</label>
          <input className='border rounded-2xl px-2 p-1 bg-white'
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            ref={refs.age}
          />
        </div>
        <p className={style.textError}>{errors.age}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Phone Number :</label>
          <input className='border rounded-2xl px-2 p-1 bg-white'
            type="number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            ref={refs.phoneNumber}
          />
        </div>
        <p className={style.textError}>{errors.phoneNumber}</p>
        <div className='flex justify-start gap-4 items-center text-xl'>
          <label>Terms :</label>
          <input className='border rounded-2xl px-2 p-1 bg-white size-5'
            type="checkbox"
            name="terms"
            value={form.terms}
            onChange={handleChange}
            ref={refs.terms}
          />
        </div>
        <p className={style.textError}>{errors.terms}</p>
        <button className='btn btn-neutral w-30 rounded-2xl' type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
