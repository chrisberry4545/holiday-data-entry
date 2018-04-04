export interface SelectBoxStateProps {
  elementId?: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  selectedValue: string;
}
