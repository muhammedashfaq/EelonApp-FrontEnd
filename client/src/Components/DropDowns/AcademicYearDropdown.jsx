import {useQuery} from '@tanstack/react-query';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import {Select, Option} from '@material-tailwind/react';

const AcademicYearDropdown = ({setYear, name, label}) => {
  const axiosPrivate = useAxiosPrivate();

  const {data: academicYearDD, isRefetching} = useQuery({
    queryKey: ['academicYearDD'],
    queryFn: async () => {
      const response = await axiosPrivate.get('classsection/academicyear/academicyear');
      const sortedData = response.data?.academicYear.sort((a, b) => a.localeCompare(b));
      return sortedData;
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isRefetching) console.log('fetching academic years');

  return (
    <Select name={name} label={label} onChange={e => setYear(e)}>
      {academicYearDD &&
        academicYearDD.map(year => (
          <Option key={year} value={year}>
            {year}
          </Option>
        ))}
    </Select>
  );
};

export default AcademicYearDropdown;
