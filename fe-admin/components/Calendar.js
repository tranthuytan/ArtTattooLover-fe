import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Ripple } from '../ui';

import { useTranslation } from 'i18n';
import moment from 'moment';
import { useState } from 'react';

const CalendarApp = ({ data }) => {
	const { t } = useTranslation('calendar');
	const [date, setDate] = useState(moment().toDate());

	const localizer = momentLocalizer(moment);

	return (
		<div className="-mx-4 overflow-y-auto h-full block">
			<Calendar
				selectable
				defaultView="week"
				localizer={localizer}
				events={data}
				startAccessor="startTime"
				endAccessor="endTime"
				date={date}
				onNavigate={(date) => {
					setDate(date );
				}}
				step={60}
				min={new Date(2017, 10, 0, 8, 0, 0)}
				max={new Date(2017, 10, 0, 20, 0, 0)}
				// components={{
				//   toolbar: CustomToolbar,
				// }}
			/>
		</div>
	);
};

export default CalendarApp;
