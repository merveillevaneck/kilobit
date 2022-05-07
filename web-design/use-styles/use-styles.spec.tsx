import { renderHook, act } from '@testing-library/react-hooks';
import { useStyles } from './use-styles';

it('should increment counter', () => {
  const { result } = renderHook(() => useStyles())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
