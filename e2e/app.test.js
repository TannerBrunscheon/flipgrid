const path = require('path')

describe('E2E', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should inititally load a form', async () => {
    await expect(page).toMatchElement('form')
  })

  it('should fillout form and click submit', async ()=>{
    await expect(page).toFillForm('form[name="SignupForm"]', {
      nameInput: 'Test',
      emailInput: 'Test@Best.com',
      passwordInput: 'PassTest',
    })
    await expect(page).toClick("#SubmitButton")
    await expect(page).toMatch("You have been registered for this awesome service")
    await expect(page).toMatch("Test@Best.com")
  })

  it("should not allow submittion if form is not completly filled", async ()=>{
    await expect(page).toFillForm('form[name="SignupForm"]', {
      nameInput: 'Test',
      passwordInput: 'PassTest',
    })
    await expect(page).toClick("#SubmitButton")
    await expect(page).toMatchElement('form')
  })

  it("should not allow submittion if email is not an email", async ()=>{
    await expect(page).toFillForm('form[name="SignupForm"]', {
      nameInput: 'Test',
      emailInput: 'NotAnEmail',
      passwordInput: 'PassTest',
    })
    await expect(page).toClick("#SubmitButton")
    await expect(page).toMatchElement('form')
  })
})