import {useQuery} from '@tanstack/react-query';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import {Select, Option} from '@material-tailwind/react';

const SubjectsDropdown = ({setSubject, name, label}) => {
  const axiosPrivate = useAxiosPrivate();

  const {data: DropDowns, isRefetching} = useQuery({
    queryKey: ['Subject-DD'],
    queryFn: async () => {
      const response = await axiosPrivate.get('classsection/subjects/dropdowns');
      //   const sortedData = response.data?.academicYear.sort((a, b) => a.localeCompare(b));
      return response.data?.subjects;
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isRefetching) console.log('fetching dropdown data');

  return (
    <>
      {DropDowns ? (
        <Select name={name} label={label} onChange={e => setSubject(e)}>
          {DropDowns &&
            DropDowns.map(item => (
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

export default SubjectsDropdown;
