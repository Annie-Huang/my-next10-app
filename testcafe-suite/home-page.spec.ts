import { Selector } from 'testcafe'; // first import testcafe selectors

const ButtonGroupContainer = Selector('[data-testid="button-group"]');
const firstButton = Selector('[data-testid="button-group"] > :first-child');
const buttonDefaultColor = 'rgb(108, 117, 125)';
const buttonSelectedColor = 'rgb(90, 98, 104)';
const buttonFocusShadow = 'rgba(130, 138, 145, 0.5) 0px 0px 0px 3.2px';

fixture`Getting Started` // declare the fixture
  .page`http://localhost:3000/`; // specify the start page

//then create a test and place your code there
test('My first test', async (t) => {
  await t
    .expect(ButtonGroupContainer.getStyleProperty('display'))
    .eql('inline-flex')
    .expect(firstButton.getStyleProperty('background-color'))
    .eql(buttonDefaultColor)
    .click(firstButton)
    .expect(firstButton.getStyleProperty('background-color'))
    .eql(buttonSelectedColor);
});
