const comModule1 = {
	data() {
		return {
			text: '模組化元件 1 (comModule1)'
		};
	},
	template: `<div class="alert alert-primary" role="alert">`
		+ `{{ text }}`
		// 區域元件也可以使用全域元件
		+ `<global></global>`
		+ `</div>`
};

const comModule2 = {
	data() {
		return {
			text: '模組化元件 2 (comModule2)'
		};
	},
	template: `<div class="alert alert-primary" role="alert">`
		+ `{{ text }}`
		+ `</div>`
};

export {comModule1, comModule2};