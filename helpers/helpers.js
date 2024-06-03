export async function fillCredentialsAndLogin(page) {
  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");
  await page.click('input[type="submit"]');
}
