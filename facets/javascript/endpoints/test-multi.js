const test-multi = async (parameters) =>  {
	const baseUrl = window.location.origin;
	const url = new URL(`${window.location.pathname.split('/')[1]}/rest/test-multi/`, baseUrl);
	return fetch(url.toString(), {
		method: 'POST', 
		headers : new Headers({
 			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({
			single : parameters.single,
			multi : parameters.multi
		})
	});
}

const test-multiForm = (container) => {
	const html = `<form id='test-multi-form'>
		<div id='test-multi-single-form-field'>
			<label for='single'>single</label>
			<input type='text' id='test-multi-single-param' name='single'/>
		</div>
		<div id='test-multi-multi-form-field'>
			<label for='multi'>multi</label>
			<input type='text' id='test-multi-multi-param' name='multi'/>
		</div>
		<button type='button'>Test</button>
	</form>`;

	container.insertAdjacentHTML('beforeend', html)

	const single = container.querySelector('#test-multi-single-param');
	const multi = container.querySelector('#test-multi-multi-param');

	container.querySelector('#test-multi-form button').onclick = () => {
		const params = {
			single : single.value !== "" ? single.value : undefined,
			multi : multi.value !== "" ? multi.value : undefined
		};

		test-multi(params).then(r => r.text().then(
				t => alert(t)
			));
	};
}

export { test-multi, test-multiForm };