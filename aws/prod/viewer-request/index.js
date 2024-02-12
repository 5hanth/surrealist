function handler(event) {

	let request = event.request;
	let host = request.headers.host.value;

	if (host !== 'surrealist.app') {

		return {
			statusCode: 301,
			statusDescription: 'Moved Permanently',
			headers: {
				location: {
					value: `https://surrealist.app${path}`
				}
			},
		};

	}

	switch (true) {
		case request.uri === '/embed/new':
			request.uri = '/embed/new.html';
			return request;
		case request.uri === '/embed':
			request.uri = '/embed/run.html';
			return request;
		case request.uri.includes('.') === false:
			request.uri = '/index.html';
			return request;
	}

	return request;

}
