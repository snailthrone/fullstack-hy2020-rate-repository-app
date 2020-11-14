import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { ReviewFormContainer } from '../../components/ReviewForm';

describe('Review form', () => {
  describe('Review form container', () => {
    it('calls onSubmit with correct arguments', async () => {
      const onSubmit = jest.fn();

      const { getByTestId } = render(<ReviewFormContainer onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId('ownerName'), 'snailthrone');
      fireEvent.changeText(getByTestId('repositoryName'), 'fullstack-hy2020-rate-repository-app');
      fireEvent.changeText(getByTestId('rating'), 100);
      fireEvent.press(getByTestId('reviewFormSubmitButton'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toMatchObject({
          ownerName: 'snailthrone',
          repositoryName: 'fullstack-hy2020-rate-repository-app',
          rating: 100,
        });
      });
    });
  });
});
