const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if(e.key == 'Enter') {
		randomSelect();
	}

});

//Так можно перевіряти роботу
//createTags('Рената, Ярик, Соня, Илья, Саша, ');

function createTags(input) {
	const tags = input.split(',').filter(tag => tag.trim() !== '');

	console.log('input', input);
	console.log('tags', tags);
	
	tagsEl.innerHTML = "";

	// tagsEl.innerHTML = `<span class='tag'>${tags[0]}</span>
	//  <span class='tag'>${tags[1]}</span>
	//  <span class='tag'>${tags[2]}</span>
	//  <span class='tag'>${tags[3]}</span>
	//  <span class='tag'>${tags[4]}</span>
	//  `;

	tags.forEach(t => {
		//Доречі так воно також запрацює
		//tagsEl.innerHTML += `<span class='tag'>${t}</span>`;
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerHTML = t;
		tagsEl.appendChild(tagEl);
	});
}
 
function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unhighlightTag(tag) {
	tag.classList.remove('highlight');
}

function getRandomTag() {
	const tags = document.querySelectorAll('.tag');
	const randomIndex = Math.floor( Math.random() * tags.length );
	return tags[randomIndex];
}

function randomSelect() {
	const time = 3000;

	const intervalID = setInterval(() => {
		const randomTag = getRandomTag();
		highlightTag(randomTag);

		setTimeout(() => {
			unhighlightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(intervalID);

		setTimeout(() => {
			const randomTag = getRandomTag(); 
			highlightTag(randomTag);
		}, 100);
	}, time);
}

