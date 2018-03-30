import {
	EMPLOYEE_UPDATE
} from './types';

export employeeUpdate = ({ prop, value }) => {
	type: EMPLOYEE_UPDATE,
	payload: { prop, value }
}