import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. number of Bookings
  const numBookings = bookings.length;

  // 2. Total price
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Number of check in
  const checkins = confirmedStays.length;

  // 4. Occupance rate
  const occupance =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title={"Bookings"}
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title={"Sales"}
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title={"Check ins"}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title={"Occupancy rate"}
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={`${Math.round(occupance * 100)}%`}
      />
    </>
  );
}

export default Stats;
