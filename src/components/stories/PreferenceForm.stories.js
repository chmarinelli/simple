import PreferenceForm from './../PreferenceForm'
import { within, screen, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/PreferenceForm',
  component: PreferenceForm,
  args: {
    breeds: ["affenpinscher", "african", "airedale", "bluetick"],
  },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { PreferenceForm },
    template:
      '<PreferenceForm :value="value" :breeds="breeds" />',
});

export const Empty = Template.bind({});
Empty.args = {
    value: {
        email: null,
        breed: null,
        hadShiba: null,
        receiveNews: false,
        rating: null
    },
};

export const WithError = Template.bind({});
WithError.args = {
    value: {
        email: null,
        breed: "affenpinscher",
        hadShiba: null,
        receiveNews: false,
        rating: null
    },
};

WithError.play = async () => {
    const emailInput = screen.getByLabelText('Email*', {
        selector: 'input',
    });
    await userEvent.type(emailInput, 'example', {
        delay: 100,
    });

    const saveButton = screen.getByRole('button', { name: /save/i });
    await userEvent.click(saveButton);
};

export const Success = Template.bind({});
Success.args = {
    value: {
        email: null,
        breed: "affenpinscher",
        hadShiba: false,
        receiveNews: true,
        rating: 3
    },
};

Success.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('Email*', {
        selector: 'input',
    });
    console.log(emailInput);
    await userEvent.type(emailInput, 'lionking@example.com', {
        delay: 100,
    });

    const saveButton = canvas.getByRole('button', { name: /save/i });
    await userEvent.click(saveButton);
};