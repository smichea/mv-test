const script-endpoint = async (parameters) =>  {
	const baseUrl = window.location.origin;
	const url = new URL(`${window.location.pathname.split('/')[1]}/rest/script-endpoint/`, baseUrl);
	if (parameters.city !== undefined) {
		url.searchParams.append('city', parameters.city);
	}

	return fetch(url.toString(), {
		method: 'GET'
	});
}

const script-endpointForm = (container) => {
	const html = `<form id='script-endpoint-form'>
		<div id='script-endpoint-CityValue-form-field'>
			<label for='CityValue'>CityValue</label>
			<input type='text' id='script-endpoint-CityValue-param' name='CityValue'/>
		</div>
		<button type='button'>Test</button>
	</form>`;

	container.insertAdjacentHTML('beforeend', html)

	const CityValue = container.querySelector('#script-endpoint-CityValue-param');

	container.querySelector('#script-endpoint-form button').onclick = () => {
		const params = {
			CityValue : CityValue.value !== "" ? CityValue.value : undefined
		};

		script-endpoint(params).then(r => r.text().then(
				t => alert(t)
			));
	};
}

export { script-endpoint, script-endpointForm };