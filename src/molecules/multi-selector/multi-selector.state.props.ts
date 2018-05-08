export interface MultiSelectorStateProps {
  choices: Array<{
    _id: string;
    label: string;
  }>;
  selectedIds: string[];
}
