import RatingField from './../RatingField'

export default {
  title: 'Components/Rating',
  component: RatingField,
  argTypes: {
    value: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
    },
  }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { RatingField },
    template:
      '<RatingField :name="name" v-model="value" />',
});

export const Empty = Template.bind({});
Empty.args = {
    name: "Empty"
};

export const WithValue = Template.bind({});
WithValue.args = {
    name: "With value",
    value: 3
};