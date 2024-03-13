import {useQuery} from '@tanstack/react-query';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import {Select, Option} from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';
import {useEffect} from 'react';

const AcademicYearDropdown = ({setYear, name, label, variant}) => {
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();
  const schoolId = auth?.userData?.schoolId;

  const {
    data: academicYearDD,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['academicYearDD'],
    queryFn: async () => {
      const response = await axiosPrivate.put('classsection/academicyear', {schoolId});
      const sortedData = response?.data?.academicYears.sort((a, b) => a.localeCompare(b));
      console.log(sortedData);
      return sortedData;
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  // useEffect(() => {
  //   refetch();
  // }, []);

  if (isRefetching) console.log('fetching academic years');

  return (
    <>
      {academicYearDD ? (
        <Select name={name} label={label} variant={variant} onChange={e => setYear(e)}>
          {academicYearDD &&
            academicYearDD.map(year => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
        </Select>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default AcademicYearDropdown;
