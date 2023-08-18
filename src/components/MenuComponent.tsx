import React, { ReactNode, ReactElement, useState, RefObject } from 'react';

type MenuItemProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  children: ReactNode;
  active?: boolean;
};

type MenuProps = {
  children: ReactElement<MenuItemProps>[];
  ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
};

const MenuItem: React.FC<MenuItemProps> = ({ children, active, ...props }) => {
  return (
    <a
      style={{ color: active ? 'blue' : 'black' }}
      {...props}
    >
      {children}
    </a>
  );
};

const MenuComponent: React.FC<MenuProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const isActive = index === activeItem;
          return React.cloneElement(child, {
            active: isActive,
            onClick: () => setActiveItem(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export { MenuComponent, MenuItem };
