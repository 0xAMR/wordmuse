import Result from '../Result';

type ResultsListProps = {
  data: object;
};

export default function ResultsList({ data }: ResultsListProps): JSX.Element {
  return (
    <>
      {Object.keys(data).map((_word) => (
        <Result title={_word} description="testing" />
      ))}
    </>
  );
}
