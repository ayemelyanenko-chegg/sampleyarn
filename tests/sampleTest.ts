import { Selector, t } from "testcafe";
import { screen } from "@testing-library/testcafe";

const emailForSignIn = Selector('input[id*="email"]');
const passForSignin = Selector('input[type="password"]');
const signInButton = Selector('button').withText('Sign in');

// user log in/log out methods
async function userLogInWithCredentials(
  email: string,
  password: string
): Promise<void> {
  await t.navigateTo("https://www.easybib.com/login");
  const title = screen.findByText('Sign up');
  await t.expect(title.exists).ok();
  await t
    .typeText(emailForSignIn, email, { paste: true })
    .typeText(passForSignin, password, { paste: true })
    .click(signInButton);
  // Redirect would happen here
  console.log(`Logged in as user: ${email}`);
  await t.expect(title.exists).notOk();
}

fixture`User log in`
  .meta({ fixtureID: 'f-0001', author: 'GROWTH', app: '' })
  .beforeEach(async (t) => {});

test.meta({
  testID: 't-0001',
})(
  'Sign in',
  async (t) => {
    await userLogInWithCredentials('test_email_chegg@chegg.com', 'Password1');
 });

