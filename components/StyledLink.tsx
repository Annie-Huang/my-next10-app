import Link from 'next/link'
import styled from 'styled-components'
import React from 'react';

export interface StyledLinkProps {
  as?: any;
  children?: any;
  className?: string;
  href: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
