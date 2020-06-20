import React, { ReactNode } from 'react';
import styled from 'styled-components';

const PageTemplateBlock = styled.div``;

interface PageTemplateProps {
  hideHeader?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
}

function PageTemplate({
  hideHeader,
  style,
  className,
  children,
}: PageTemplateProps) {
  return (
    <PageTemplateBlock style={style} className={className}>
      {children}
    </PageTemplateBlock>
  );
}

export default PageTemplate;
