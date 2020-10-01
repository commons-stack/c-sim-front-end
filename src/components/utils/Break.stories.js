import Break from './Break'

export default {
  component: Break,
  title: 'Components/Break',
}

// with text
export const withText = () => ({
  components: { Break },
  template: '<break />',
})

// with jsx
const Template = args => ({
  render() {
    return <break {...{ attrs: args }} />
  },
})

export const withJsx = Template.bind({})
withJsx.args = {
  height: '2',
}
export const withJsxColor = Template.bind({})
withJsxColor.args = {
  color: 'secondary',
}
