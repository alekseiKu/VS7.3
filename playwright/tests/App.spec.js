const { email, password } = require("../user.js");
const { test, expect } = require("@playwright/test");

test("Success login", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").fill(email);
  await page.locator("[name=password]").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.locator(".src-components-pages-Profile-Programs--title--Kw5NH")).toBeVisible();
});

test("Unsuccessful login", async ({page}) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").fill("asdw@mail.ru");
  await page.locator("[name=password]").fill("123123123");
  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByTestId("login-error-hint")).toBeVisible();
})
