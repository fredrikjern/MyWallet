import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/dist/esm/presets/vanilla";

function DateSelectComp() {
  const [date, setDate] = useState(new Date());

  const formattedDate = date.toString().split("T")[0];

  return (
    <div>
      <DateSelect value={date} onChange={setDate} hideDay />
      <p>Selected date is: {formattedDate}</p>
    </div>
  );
}

export default DateSelectComp;
