import {useQuery} from '@tanstack/react-query';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import {Select, Option} from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';

const StdDropdown = ({setStd, name, label, variant}) => {
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();
  const schoolId = auth?.userData?.schoolId;

  const {
    data: DropDowns,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['std-DD'],
    queryFn: async () => {
      const response = await axiosPrivate.put('classsection/dropdowns/std', {schoolId});
      return response?.data?.libraryGenre;
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isRefetching) console.log('fetching dropdowns');

  return (
    <>
      {DropDowns ? (
        <Select name={name} label={label} variant={variant} onChange={e => setStd(e)}>
          {DropDowns &&
            DropDowns?.map(item => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
        </Select>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default StdDropdown;
