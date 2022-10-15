// @ts-check
import { test, expect } from "@playwright/test";
import { User } from "../utils/helpers";

test.describe("Auth", () => {
  test("Login without email and password", async ({ page }) => {
    await page.goto("/login");
    await page.locator("button", { hasText: "Login" }).click();
    await expect(page.locator("span")).toContainText([
      "Email can't be Empty",
      "Password can't be Empty",
    ]);
  });

  test("Login with test user", async ({ page }) => {
    await page.goto("/login");
    await page
      .locator("button", { hasText: "Fill the test credentials" })
      .click();
    await page.locator("button", { hasText: "Login" }).click();
    await expect(page.getByText("Featured Products")).toBeVisible();
  });

  test("Sign up without email", async ({ page }) => {
    await page.goto("/signUp");
    await page.locator("button", { hasText: "Sign Up" }).click();
    await expect(page.locator("span")).toContainText([
      "First name can't be Empty",
      "Last name can't be Empty",
      "Email can't be Empty",
      "Password can't be Empty",
      "Confirm Password can't be Empty",
    ]);
  });
  test("Sign up with wrong email format, password format and wrong confrim password", async ({
    page,
  }) => {
    await page.goto("/signUp");
    await page.locator("#firstName").fill(User.firstName);
    await page.locator("#lastName").fill(User.lastName);
    await page.locator("#email").fill(User.firstName);
    await page.locator("#password").fill(User.wrongPassword);
    await page.locator("#confirmPassword").fill(User.lastName);

    await page.locator("button", { hasText: "Sign Up" }).click();
    await expect(page.locator("span")).toContainText([
      "Invalid email format",
      "Password should contain at least 8 characters, 1 letter and 1 number",
      "Password and Confirm Password should be same",
    ]);
  });
  test("Sign up", async ({ page }) => {
    await page.goto("/signUp");
    await page.locator("#firstName").fill(User.firstName);
    await page.locator("#lastName").fill(User.lastName);
    await page.locator("#email").fill(User.email);
    await page.locator("#password").fill(User.password);
    await page.locator("#confirmPassword").fill(User.password);

    await page.locator("button", { hasText: "Sign Up" }).click();
    await page.getByText("Profile").click();
    const email = await page.locator(".email--content").innerText();
    expect(email).toEqual(User.email);
  });

  test("Sign up and login with new user", async ({ page }) => {
    await page.goto("/signUp");
    await page.locator("#firstName").fill(User.firstName);
    await page.locator("#lastName").fill(User.lastName);
    await page.locator("#email").fill(User.email);
    await page.locator("#password").fill(User.password);
    await page.locator("#confirmPassword").fill(User.password);

    await page.locator("button", { hasText: "Sign Up" }).click();
    await page.getByText("Profile").click();
    await page.locator("button", { hasText: "Logout" }).click();
    await page.locator("#email").fill(User.email);
    await page.locator("#password").fill(User.password);
    await page.locator("button", { hasText: "Login" }).click();
    await page.getByText("Profile").click();
    const email = await page.locator(".email--content").innerText();
    expect(email).toEqual(User.email);
  });

  test("Redirect Test", async ({ page }) => {
    await page.goto("/cart");
    await page
      .locator("button", { hasText: "Fill the test credentials" })
      .click();
    await page.locator("button", { hasText: "Login" }).click();
    await expect(page.getByText("My Cart")).toBeVisible();
  });
});
