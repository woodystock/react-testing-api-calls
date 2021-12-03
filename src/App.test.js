import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {rest} from 'msw';
import {setupServer} from 'msw/node'

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
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

test('handles server error: 500', async () => {
  server.use(
    rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<App />);

  const errorCode = await waitFor(() => screen.getByText("Oops… something went wrong, try again 🤕"));

  expect(errorCode).toBeInTheDocument();

});

test('handles server error: 418 tea pot', async () => {
  server.use(
    rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
      return res(ctx.status(418))
    }),
  )

  render(<App />);

  const errorCode = await waitFor(() => screen.getByText("418 I'm a tea pot 🫖, silly"));

  expect(errorCode).toBeInTheDocument();

  
});
