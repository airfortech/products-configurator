import React from "react";

export interface NavItem {
  title: string;
  href: string;
  component?: JSX.Element;
  isActive: boolean;
  back: boolean;
}
