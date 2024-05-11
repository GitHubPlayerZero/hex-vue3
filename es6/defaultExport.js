export default
{
	// 資料
	data: [
		'這是第一句話',
		'這是第二句話',
		'這是第三句話',
	],

	// 渲染方法
	render(domSelector)
	{
		// 渲染方法
		const list = document.querySelector(`${domSelector} ul`);
		console.log(`ul ==>`, list);
		let content = '';
		this.data.forEach((item, i) => {
			content = `${content}<li>${item} <button type="button" class="btn" data-id="${i}">移除</button></li>`;
		});
		// 縮寫優化
		// const content = component.data.map(item => `<li>${item}</li>`).join('');
		console.log(this.data)
		list.innerHTML = content;

		// 加入監聽
		const btns = document.querySelectorAll(`${domSelector} .btn`);
		btns.forEach((btn) =>
			btn.addEventListener('click', (e) => {
				// #2 重點，移除項目是先移除資料，而不是直接移除 DOM
				// 如果要進行 AJAX 或更複雜行為，不會因為 DOM 與資料混合而難以運作
				const id = e.target.dataset.id;
				this.data.splice(id, 1);
				this.render(domSelector);
			})
		);
	},
	
	// 生命週期
	init(selector) {
		this.render(selector);
	}
};