import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import PeopleTable from '../components/PeopleTable/PeopleTable';
import { usePeople } from '../hooks/usePeople';

const PeoplePage = () => {
  const { people, isLoading, hasError } = usePeople();
  const { slug } = useParams();

  return (
    <>
      <h1 className="title">People Page</h1>
      <div className="block">
        <div className="box table-container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {hasError && (
                <p data-cy="peopleLoadingError" className="has-text-danger">
                  Something went wrong
                </p>
              )}

              <PeopleTable people={people} selectedPersonSlug={slug} />

              {!people.length && (
                <p data-cy="noPeopleMessage">
                  There are no people on the server
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
