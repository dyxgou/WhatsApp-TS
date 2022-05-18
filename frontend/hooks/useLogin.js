import request from "./axios"

const useLogin = async ({ email , password }) =>
{
  if (!email || !password)
    return false

  const data = await request({
    method: "POST",
    url: "/auth/login",
    data: { email , password }
  }).then(res => {

  }).catch(err => {
    
  })

  return data
}

export default useLogin
