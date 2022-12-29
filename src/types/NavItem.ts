import { BuilderSectionsProps } from "./BuilderSectionsProps";

export interface NavItem {
  title: string;
  href: string;
  component?: (props: BuilderSectionsProps) => JSX.Element;
  isActive: boolean;
  back: boolean;
}
