import { fireEvent, render, screen } from '@testing-library/react';
import { EditUser } from 'src/images/EditUser';
import { IUser } from 'src/interfaces/IUser';
import { Edit } from '../Edit';
import { UserCard } from './index';

describe('Card', () => {
  const user: IUser = {
    id: '1',
    name: 'Fredy de la Torre',
    email: 'fredy.delatorre@test.com',
    phone: '99999999',
    address: 'location 123',
    profile: 'https://randomuser.me/api/portraits/men/68.jpg'
  }

  test('Render Card with correct props', () => {
    const component = render(<UserCard {...user} />);
    component.getByText(/Fredy de la torre/i);
    component.getByText(/fredy.delatorre@test.com/i);
    component.getByText(/99999999/i);
    component.getByText(/Location/i);
  })

  test('Print Edit Icon', () => {
    const component = render(<UserCard {...user} />)
    component.container.querySelector('svg')
  })

  test('Correct props', () => {
    render(<Edit user={user} show={false} />)
    const editElement = screen.getByRole('button', {
      name: /save/i
    })
    expect(editElement).toBeInTheDocument();
  })

  test('Open Edit', () => {
    const mockHandler = jest.fn()
    const component = render(<EditUser onClick={mockHandler} />)
    const button = component.container.querySelector('svg') as SVGSVGElement
    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
