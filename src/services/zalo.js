import api from "zmp-sdk"

export const getUserInfo = () =>
  new Promise((resolve, reject) => {
    api.login({
      success: () => {
        api.getUserInfo({
          success: (user) => {
            resolve(user)
          },
          fail: (error) => {
            console.error(error)
            reject(error)
          },
        })
      },
      fail: (error) => {
        console.error(error)
        reject(error)
      },
    })
  })
