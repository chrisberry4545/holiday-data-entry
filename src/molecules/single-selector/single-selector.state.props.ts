export interface SingleSelectorStateProps {
  choices: Array<{
    _id: string;
    label: string;
  }>;
  selectedId: string;
}
