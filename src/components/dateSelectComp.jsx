import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/dist/esm/presets/vanilla";

function DateSelectComp() {
  const [date, setDate] = useState(new Date());

  const formattedDate = date.toString().split("T")[0];

  return (
    <div className="flex flex-col p-2 gap-2">

      <h2 className="font-bold">Valid Through</h2>
      <div>
        <DateSelect value={date} onChange={setDate} hideDay />
      </div>
      <p>Selected date is: {formattedDate}</p>
    </div>
  );
}

export default DateSelectComp;
