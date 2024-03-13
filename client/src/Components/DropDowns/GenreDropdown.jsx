import {useQuery} from '@tanstack/react-query';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import {Select, Option} from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';

const GenreDropdown = ({setGenre, name, label, variant}) => {
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();
  const schoolId = auth?.userData?.schoolId;

  const {
    data: DropDowns,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['genre-DD'],
    queryFn: async () => {
      const response = await axiosPrivate.put('librarysettings', {schoolId});
      return response?.data?.libraryGenre;
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isRefetching) console.log('fetching academic years');

  return (
    <>
      {DropDowns ? (
        <Select name={name} label={label} variant={variant} onChange={e => setGenre(e)}>
          {DropDowns &&
            DropDowns?.map(item => (
              <Option key={item?.genre} value={item?.genre}>
                {item?.genre}
              </Option>
            ))}
        </Select>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GenreDropdown;
