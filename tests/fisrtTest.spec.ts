import {test} from '@playwright/test'
//hooks: optimize code flow and execution 
//beforeEachtest:executed for every test 
//beforeAll:before all test execute this 
//test.afterall: after all test nad afterEach:after each test
//test.describe

test.beforeEach(async({page}) => {
    await page.goto ('http://localhost:4200')
    await page.getByText('Forms').click()
    await page.getByText('Forms layouts').click()
})

test('Locator syntax rules', async ({page}) => {
    //by tag name
    await page.locator('input').first().click()

    //by ID
    page.locator('#inputEmail1')

    //by Class value
    page.locator('.shape-retangle')

    //by atribute
    page.locator('[placeholder="Email"]')

    //by class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //by xPath (not recommended)
    page.locator('//*[@id="inputemail1"]')

    //by partial text match
    page.locator(':text("Using ")')

    //by exact text match
    page.locator(':text-is("Using the Grid")')
})

test('User facing locators', async({page}) => {
    page.getByRole('textbox', {name: "Email"}).first().click()
})
