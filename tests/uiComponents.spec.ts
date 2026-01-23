import {test, expect} from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('form Layouts page', () => {
    test.beforeEach( async({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('imput fields', async({page}) => {
        const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"})
            .getByRole('textbox', {name: "Email"})
        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear()
        await usingTheGridEmailInput.pressSequentially('test@test.com', {delay:500})

        //generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test@test.com')

        //locator assertion
        await expect (usingTheGridEmailInput).toHaveValue('test@test.com')
    })
    test('radio buttons', async({page}) => {
        //locator for using the great form
        const usingTheGridForm = page.locator('nb-card', {hasText: "Using the Grid"})

        //two ways: 
        //await usingTheGridEmailInput.getByLabel('Option 1').check({force: true})
        await usingTheGridForm.getByRole('radio', {name: "Option 1"}).check({force: true})
        
        const radioStatus = await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()

        //to validaded if is selected or not
        expect(radioStatus).toBeTruthy()
        await expect(usingTheGridForm.getByRole('radio', {name: "Option 1"})).toBeChecked()

        //select option 2 
        await usingTheGridForm.getByRole('radio', {name: "Option 2"}).check({force: true})
        expect(await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()).toBeFalsy()
        expect(await usingTheGridForm.getByRole('radio', {name: "Option 2"}).isChecked()).toBeTruthy()
    })

test('checkboxes', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()
    
    await page.getByRole('checkbox', {name:"Hide on click"}).check({force: true})
    await page.getByRole('checkbox', {name:"Prevent arising of duplicate toast"}).check({force: true})

    const allBoxes = page.getByRole('checkbox')
    for(const box of await allBoxes.all()){
        await box.check({force: true})
        expect(await box.isChecked()).toBeTruthy()
    }
})