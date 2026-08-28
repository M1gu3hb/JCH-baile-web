import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type StarBorderProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T;
  children: ReactNode;
  color?: string;
  speed?: string;
};

/** Adapted from React Bits StarBorder (MIT + Commons Clause). */
export function StarBorder<T extends ElementType = "button">({
  as,
  children,
  className = "",
  color = "#d3ff57",
  speed = "5s",
  ...rest
}: StarBorderProps<T>) {
  const Component = as ?? "button";

  return (
    <Component className={`star-border ${className}`} {...rest}>
      <span className="star-border__light star-border__light--bottom" style={{ background: color, animationDuration: speed }} />
      <span className="star-border__light star-border__light--top" style={{ background: color, animationDuration: speed }} />
      <span className="star-border__inner">{children}</span>
    </Component>
  );
}

