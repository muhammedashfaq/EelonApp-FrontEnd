import TimetableCell from "./TimetableCell";

const TableRowDiv = ({
  data,
  index,
  handleData,
  dataArray,
  intervalArray,
  ClassTable,
}) => {
  const divs = Array.from({ length: 11 }, (_, index) => index);

  return (
    <>
      <tr class="text-center h-max">
        <td class="border p-1 h-32 xl:w-30 lg:w-20 md:w-20 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-20 lg:w-20 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <span class="text-gray-500">{data}</span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        {divs &&
          divs.map((item, i) => (
            <TimetableCell index={i} rowIndex={index} ClassTable={ClassTable} />
          ))}
      </tr>
    </>
  );
};

export default TableRowDiv;
