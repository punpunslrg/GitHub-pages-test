import React from 'react'
import { useState } from 'react'
import { loginSchema } from '../schemas/loginSchema'
import { yupToFormErrors } from '../utils/yupToFormErrors'
import * as Yup from 'yup'

function LoginForm() {
  const style = {
    textError: 'text-red-500 font-medium text-right text-xs h-4'
  }

  const [form, setForm] = useState({
    email: '',
    password: '',
    day: '',
    age: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginSchema.validate(form, { abortEarly: false })
      alert("Submit success !")
      setErrors({})
    } catch (err) {

      // console.log(err.inner)
      // const errorObj = {}
      // err.inner.forEach((error) => {
      //   errorObj[error.path] = error.message
      // })

      // move above to function yupToFormErrors in utils

      const errorObj = yupToFormErrors(err)
      setErrors(errorObj)
    }
  }

  return (
    <div className='w-screen flex flex-col justify-center items-center gap-3 p-10'>
      <p className='text-3xl font-bold h-12'>CC20 Login Form</p>
      <form className='flex flex-col w-90 gap-3' onSubmit={handleSubmit}>
        <div className='flex justify-between items-center text-xl'>
          <label>Email :</label>
          <input className='border rounded-2xl px-2 p-1'
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <p className={style.textError}>{errors.email}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Password :</label>
          <input className='border rounded-2xl px-2 p-1'
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <p className={style.textError}>{errors.password}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Day :</label>
          <input className='border rounded-2xl px-2 p-1'
            type="number"
            name="day"
            value={form.day}
            onChange={handleChange}
          />
        </div>
        <p className={style.textError}>{errors.day}</p>
        <div className='flex justify-between items-center text-xl'>
          <label>Age :</label>
          <input className='border rounded-2xl px-2 p-1'
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <p className={style.textError}>{errors.age}</p>
        <button className='btn btn-neutral w-30 rounded-2xl' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
