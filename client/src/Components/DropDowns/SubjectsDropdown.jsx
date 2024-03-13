import {useQuery} from '@tanstack/react-query';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import {Select, Option} from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';

const SubjectsDropdown = ({setSubject, name, label ,variant}) => {
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();
  const schoolId = auth?.userData?.schoolId;

  const {data: DropDowns, isRefetching} = useQuery({
    queryKey: ['Subject-DD'],
    queryFn: async () => {
      const response = await axiosPrivate.put('classsection/subjects', {schoolId});
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
        <Select name={name} label={label} variant={variant} onChange={e => setSubject(e)}>
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
