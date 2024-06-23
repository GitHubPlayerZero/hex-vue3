function createChangeProcessor(funcRestore, funcChange, funcLog)
{
	let isChange = false;
	
	function change()
	{
		if (isChange) {
			funcRestore();
		}
		else {
			funcChange();
		}
		
		isChange = !isChange;
		
		console.log(``);
		console.log(`After change ...`);
		funcLog();
	}
	
	return change;
}


// function createArrayProcessor(ary)
function createArrayProcessor(funcPush, funcReset, funcLog)
{
	let cnt = 1;
	
	function push()
	{
		console.log(``);
		
		const item = `項目${cnt}`;
		console.log(`Push ...`, item);
		// ary.push(item);
		funcPush(item);
		
		cnt ++;
		
		funcLog();
	}
	
	function reset() {
		funcReset();
		show();
	}
	
	function show() {
		console.log(``);
		funcLog();
	}
	
	return {
		push,
		reset,
		show,
	};
}


/* 名字 */
function getName1() {
	return '小明';
}
function getName2() {
	return '宰宰';
}

/* 父親的名字 */
function getFatherName1() {
	return '老明';
}
function getFatherName2() {
	return '王牌天神';
}


/* 物件 */
function getObj1() {
	return {
		name: getName1(),
		father: {
			name: getFatherName1(),
		},
	};
}

function getObj2() {
	return {
		name: '杰倫',
		father: {
			name: '老倫',
		},
	};
}


/* 陣列 */
function getAry1() {
	return ['aaa', 'bbb'];
}

