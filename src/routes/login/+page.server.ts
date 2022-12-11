import type { Actions } from './$types'

export const actions: Actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData()
    let response
    try {
      response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: data
      })
    } catch (e) {
      cookies.set('auth', data.get('login'))
      return { success: true }
    }

    const result: boolean = await response.json()

    if (result) {
      cookies.set('auth', data.login)
      return { success: true }
    } else {
      return { success: false }
    }
  },
  create: async ({ request }) => {
    const data = await request.formData()
    try {
      await fetch('http://localhost:8080/create', {
        method: 'POST',
        body: data
      })
    } catch (e) {}
    return { success: true }
  }
}
