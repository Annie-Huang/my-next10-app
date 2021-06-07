import { Selector } from 'testcafe'; // first import testcafe selectors

const ButtonGroupContainer = Selector('[data-testid="button-group"]');
const firstButton = Selector('[data-testid="button-group"] > :first-child');
const buttonColor = 'rgb(108, 117, 125)';
const buttonFocusShadow = '0 0 0 0.2rem rgb(130 138 145 / 50%)';

fixture`Getting Started` // declare the fixture
  .page`http://localhost:3000/`; // specify the start page

//then create a test and place your code there
test('My first test', async (t) => {
  await t
    .expect(ButtonGroupContainer.getStyleProperty('display'))
    .eql('inline-flex')
    .expect(firstButton.getStyleProperty('background-color'))
    .eql(buttonColor)
    .click(firstButton)
    // .debug()
    // .eval(() => console.log(firstButton.style));
    .expect(firstButton.getStyleProperty('box-shadow'))
    .eql(buttonFocusShadow);
});
