import {test} from '@playwright/test'
//hooks : optimize code flow and execution 
// //beforeEachtest:executed for every test 
//beforeAll:before all test execute this 
//test.afterall: after all test nad afterEach:after each test
//test.describe

test.beforeEach(async({page}) => {
    await page.goto ('http://localhost:4200/')
    await page.getByText('Forms').click()
})

test('the first test', async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText ('Forms').click()
    await page.getByText('Forms Layouts').click()
    
})

test('navigate to datepicker page', async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText ('Forms').click()
    await page.getByText('Datepicker').click()
    
})

