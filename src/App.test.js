import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {rest} from 'msw';
import {setupServer} from 'msw/node'

const server = setupServer(
  rest.get('/films', (req, res, ctx) => {
    return res(ctx.json([{title:"Castle in the Sky"}]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays the first film title', async () => {
  render(<App />);
  
  const filmTitle = await waitFor(() => screen.getByText('Castle in the Sky'));

  expect(filmTitle).toBeInTheDocument();
});
