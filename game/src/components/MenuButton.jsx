import { forwardRef } from 'react';

const MenuButton = forwardRef(function MenuButton({ children, onClick, disabled = false, active = false, index = 0, description, onFocus, onMouseEnter }, ref) {
  return (
    <button
      ref={ref}
      className={`menu-button ${active ? 'menu-button--active' : ''}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      aria-describedby={description ? 'continue-description' : undefined}
      style={{ '--button-index': index }}
    >
      <span className="menu-button__cursor" aria-hidden="true">›</span>
      <span className="menu-button__label">{children}</span>
    </button>
  );
});

export default MenuButton;
