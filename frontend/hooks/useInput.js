import { useState } from "react"

const useInput = ({ placeholder = "" , type = "text" , initialState = "" }) =>
{
  const [value , setValue] = useState(initialState)

  const onChange = (e) => setValue(e.target.value)

  return {
    value ,
    placeholder ,
    type ,
    onChange
  }
}

export default useInput
