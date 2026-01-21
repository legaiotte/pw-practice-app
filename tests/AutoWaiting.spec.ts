import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto ('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test('Auto Waiting', async({page}) => {
    const successbutton = page.locator('.bg-success')
    //await successbutton.click()

    const text = await successbutton.textContent()

    expect(text).toEqual('Data loaded with AJAX get request')
})

test('Timeout', async({page}) => {
const successbutton = page.locator('.bg-success')

await successbutton.click()

})