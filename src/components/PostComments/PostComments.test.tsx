import { fireEvent, render, screen } from '@testing-library/react'
import Post from '.'
import PostComment from '.'
import { debug } from 'console'

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })
  test('Deve comentar duas vezes', () => {
    const comments = [{ comment: 'teste 1' }, { comment: 'teste 2' }]
    render(<Post />)
    comments.map(({ comment }) => {
      fireEvent.change(screen.getByTestId('input-comment'), {
        target: { value: comment },
      })
      fireEvent.click(screen.getByText('Comentar'))
    })
    expect(screen.getByText('teste 1')).toBeInTheDocument()
  })
})
