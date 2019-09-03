/**
 *  本地能跑通，不知道为什么 leetcode 上不通过。
 *  
 *  case:
 *  input: []
 *  output: [undefined]
 *  expected: []
 *
 *  很奇怪，明明 output 是 []
 *
 */
function ListNode (val) {
	this.val = val;
	this.next = null;
}

function transformList (ary) {
	let head = new ListNode(ary[0]);
	let tail = head;
	ary.slice(1).forEach(a => {
		tail.next = new ListNode(a);
		tail = tail.next;
	});
	return head;
}

var mergeKLists = function (lists) {
	const merge2Lists = function (list1, list2) {
		if (!list1) return list2;
		if (!list2) return list1;
		let ret = new ListNode(Infinity);
		let tail = ret;
		while (list1 && list2) {
			if (list1.val < list2.val) {
				tail.next = list1;
				tail = list1;
				list1 = list1.next;
			} else {
				tail.next = list2;
				tail = list2;
				list2 = list2.next;
			}
		}
		if (list1) {
			tail.next = list1;
		} else {
			tail.next = list2;
		}
		return ret.next;
	};

	let l1 = lists.shift();
	let l2 = lists.shift();
	while (l1 && l2) {
		lists.push(
			merge2Lists(l1, l2)
		);

		l1 = lists.shift();
		l2 = lists.shift();
	}

	return l1 || l2 || [];
}

const list1 = transformList([1, 3, 8, 5, 9]);
const list2 = transformList([2, 3, 9, 10, 89, 90]);
const list3 = transformList([0, 2, 8, 18, 90, 900]);

let ret = mergeKLists([]);

console.log(ret);

while(ret) {
	console.log(ret.val);
	ret = ret.next;
}

