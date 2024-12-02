import { beforeEach } from "vitest"
import Accordion from "./Accordion"
import { render, screen, fireEvent } from "@testing-library/react"

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title="hello">
        <h3>My content</h3>
        <p>Some contt</p>
      </Accordion>
    );
  })
  // test('should show the accordion component', () => {
  //   expect(screen.getByText('hello')).toBeDefined()
  // })
  test('should show title all the time', () => {
    expect(screen.getByText('hello')).toBeDefined()
  })
  test('should not show content at the start', () => {
    expect(screen.queryByText(/content/i)).toBeNull()
  })
  test('should show the content whte title is clicked', () => {
    const button = screen.getByText(/open/i)
    fireEvent.click(button)
    expect(screen.getByText(/content/i)).toBeDefined()
  })
  test('should hide the content whte title is clicked', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(button.textContent).toBe("Close");
    fireEvent.click(button);
    expect(button.textContent).toBe("Open");
  })
})