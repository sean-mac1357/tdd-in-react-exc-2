import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from '../components/NewMessageForm';

describe('<NewMessageForm />', () => {
    let getByTestId;
    let sendHandler;
    
    describe('clicking the send button', () => {
        sendHandler = jest.fn().mockName('sendHandler');
        beforeEach(async () => {
            ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));
    
            await userEvent.type(
                getByTestId('messageText'),
                'New message',
            );
            userEvent.click(getByTestId('sendButton'));
        });
        it('clears the text field', () => {
            expect(getByTestId('messageText').value).toEqual('');
        });

        it('calls the send handler', () => {
            expect(sendHandler).toHaveBeenCalledWith('New message');
        });
    });
});