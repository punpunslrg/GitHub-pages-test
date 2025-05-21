export function yupToFormErrors(err, refs) {
  // console.log(refs)
  const errorObj = {}
  err.inner.forEach((error) => {
    errorObj[error.path] = error.message
  })

  const firstErrorField = err.inner[0]?.path

  if(firstErrorField && refs[firstErrorField]?.current) {
    console.log(refs[firstErrorField])
    refs[firstErrorField].current.focus()
  }

  return errorObj
}