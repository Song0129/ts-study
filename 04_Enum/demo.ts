enum Status {
	OFFLINE,
	ONLINE,
	DELETED,
}
const Status1 = {
	OFFLINE: 0,
	ONLINE: 1,
	DELETED: 2,
};
function getResult(status: unknown) {
	if (status === Status.OFFLINE) {
		return 'offline';
	} else if (status === Status.ONLINE) {
		return 'online';
	} else if (status === Status.DELETED) {
		return 'deletd';
	}
	return 'error';
}

const result = getResult(Status.ONLINE);
console.log(result);
