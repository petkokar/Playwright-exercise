const { test, expect } = require("@playwright/test");
const { fillCredentialsAndLogin } = require("../helpers/helpers");

const link = "http://localhost:3000";
const navbar = "nav.navbar";
const catalogBtnSelector = 'a[href="/catalog"]';
const loginBtnSelector = 'a[href="/login"]';
const registerBtnSelector = 'a[href="/register"]';
const myBooksBtnSelector = 'a[href="/profile"]';
const addBookBtnSelector = 'a[href="/create"]';

test('Verify "All books" link is visible', async ({ page }) => {
  await page.goto(link);
  await page.waitForSelector(navbar);
  const allBooksLink = await page.$(catalogBtnSelector);
  const isLinkVisible = await allBooksLink.isVisible();
  expect(isLinkVisible).toBe(true);
});

test('Verify "Login" button is visible', async ({ page }) => {
  await page.goto(link);
  await page.waitForSelector(navbar);
  const loginButton = await page.$(loginBtnSelector);
  const isLoginButtonVisible = await loginButton.isVisible();
  expect(isLoginButtonVisible).toBe(true);
});

test('Verify "Register" button is visible', async ({ page }) => {
  await page.goto(link);
  await page.waitForSelector(navbar);
  const registerBtn = await page.$(registerBtnSelector);
  const isRegisterBtnVisible = await registerBtn.isVisible();
  expect(isRegisterBtnVisible).toBe(true);
});

test('Verify "All books" link is visible after user login', async ({
  page,
}) => {
  page.goto(link + "/login");
  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");
  await page.click('input[type="submit"]');
  const allBooksLink = await page.$(catalogBtnSelector);
  const isAllBooksLinkVisible = await allBooksLink.isVisible();
  expect(isAllBooksLinkVisible).toBe(true);
});

test('Verify "My books" btn is visible', async ({ page }) => {
  page.goto(link + "/login");
  await fillCredentialsAndLogin(page);
  const myBooksLink = await page.$(myBooksBtnSelector);
  const isMyBooksLinkVisible = await myBooksLink.isVisible();
  expect(isMyBooksLinkVisible).toBe(true);
});

test('Verify "Add book" btn is visible', async ({ page }) => {
  page.goto(link + "/login");
  await fillCredentialsAndLogin(page);
  const addBookLink = await page.$(addBookBtnSelector);
  const isAddBookLinkVisible = await addBookLink.isVisible();
  expect(isAddBookLinkVisible).toBe(true);
});
