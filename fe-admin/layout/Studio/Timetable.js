import Timetable from 'components/Calendar';
import { fetcher } from 'lib';
import { Loading } from 'ui';
import useSWR from 'swr';
import { workingTimeStatus } from 'lib/state';

function StudioTimetablePage() {
	const studioId = '595a0830-359a-4088-a6df-338584acccc6';
	const baseUrl = `${process.env.NEXT_PUBLIC_API_BASEURL}/Studio/api/Studios/${studioId}/Schedules`;
	let { data, error } = useSWR(baseUrl, fetcher);
	let loading = true;
	let renderedData;

	if (data) {
    renderedData = [];
    let newSlot, slotStatus;
    data.forEach((slot) => {
      switch (slot.workingTimeStatus) {
        case (workingTimeStatus.AVAILABLE):
          slotStatus = 'Available';
          break;
        
        case (workingTimeStatus.BOOKED):
          slotStatus = 'Booked';
          break;
        
        default:
          slotStatus = 'Busy';
          break;
        
      }
      newSlot = {
        id: slot.workingTimeSlotId,
        status: slotStatus,
        title: `${slot.artist.fullName} - ${slotStatus}`,
        startTime: new Date(slot.workingTimeSlot.workStartTime),
        endTime: new Date(slot.workingTimeSlot.workEndTime)
      }
      renderedData.push(newSlot);
    })
    console.log(renderedData);
    loading = false;
	}

	if (error)
		return (
			<div className="flex items-center justify-center h-full">
				Failed to load calendar data
			</div>
		);

	if (!data && loading)
		return (
			<div className="flex items-center justify-center h-full">
				<Loading />
			</div>
		);

	return (
		<>
			<Timetable data={renderedData} />
		</>
	);
}

export default StudioTimetablePage;
