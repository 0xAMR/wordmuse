type DefinitionProps = {
  definedWord: string;
};

export default function Definition({ definedWord }: DefinitionProps) {
  return <div className="definition">I will define {definedWord}</div>;
}
