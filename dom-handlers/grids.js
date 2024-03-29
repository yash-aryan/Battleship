'use strict';

export const oceanGrid = (() => {
	const gridId = 'ocean-grid';

	function create() {
		const gridWrap = getGrid('My Screen');
		gridWrap.id = gridId;
		gridWrap.classList.add('grid-wrap--ocean');
		document.querySelector('#js-ocean-parent').append(gridWrap);
	}

	function getElement() {
		return document.getElementById(gridId);
	}

	function getCell(pos) {
		const grid = getElement();
		return grid.querySelector(`[data-pos-x="${pos[0]}"][data-pos-y="${pos[1]}"]`);
	}

	function isCell(node) {
		if (node.classList.contains('grid__cell')) return true;
		return false;
	}

	function highlightCells(posArr) {
		const grid = getElement();
		posArr.forEach(pos => {
			const cell = grid.querySelector(`[data-pos-x="${pos[0]}"][data-pos-y="${pos[1]}"]`);
			cell.classList.add('grid__cell--highlighted');
		});
	}

	function unhighlightAll() {
		getElement()
			.querySelectorAll('.grid__cell--highlighted')
			.forEach(cell => cell.classList.remove('grid__cell--highlighted'));
	}

	function markOccupied(posArr) {
		const grid = getElement();
		posArr.forEach(pos => {
			const cell = grid.querySelector(`[data-pos-x="${pos[0]}"][data-pos-y="${pos[1]}"]`);
			cell.classList.add('grid__cell--occupied');
		});
	}

	function markHit(cell) {
		cell.classList.add('grid__cell--hit');
	}

	function markMiss(cell) {
		cell.classList.add('grid__cell--miss');
	}

	function reset() {
		getElement()
			.querySelectorAll('.grid__cell')
			.forEach(cell => (cell.className = 'grid__cell'));
	}

	return {
		create,
		getElement,
		getCell,
		isCell,
		highlightCells,
		unhighlightAll,
		markOccupied,
		markHit,
		markMiss,
		reset,
	};
})();

export const targetGrid = (() => {
	const gridId = 'target-grid';

	function create() {
		const gridWrap = getGrid('Enemy Screen');
		gridWrap.id = gridId;
		gridWrap.classList.add('grid-wrap--target');
		document.querySelector('#js-target-parent').append(gridWrap);
	}

	function getElement() {
		return document.getElementById(gridId);
	}

	function isCell(node) {
		if (node.classList.contains('grid__cell')) return true;
		return false;
	}

	function isCellMarked(node) {
		if (
			node.classList.contains('grid__cell--hit') ||
			node.classList.contains('grid__cell--miss')
		)
			return true;
		return false;
	}

	function markHit(cell) {
		cell.classList.add('grid__cell--hit');
	}

	function markMiss(cell) {
		cell.classList.add('grid__cell--miss');
	}

	function remove() {
		getElement().closest('.grid-wrap').remove();
	}

	return {
		create,
		getElement,
		isCell,
		isCellMarked,
		markHit,
		markMiss,
		remove,
	};
})();

function getGrid(titleText) {
	let posX = 0,
		posY = 9;

	// <div class="grid-wrap" tabindex="0"></div>
	const gridNode = document.createElement('div');
	gridNode.classList.add('grid');
	for (let i = 0; i < 100; i++) {
		if (posX > 9) {
			posX = 0;
			--posY;
		}

		const gridCell = document.createElement('div');
		gridCell.classList.add('grid__cell');
		gridCell.dataset.posX = posX;
		gridCell.dataset.posY = posY;
		gridNode.append(gridCell);
		++posX;
	}

	const titleNode = document.createElement('h2');
	titleNode.classList.add('grid__title');
	titleNode.textContent = titleText;

	const gridWrap = document.createElement('div');
	gridWrap.classList.add('grid-wrap');
	gridWrap.append(titleNode, gridNode);
	return gridWrap;
}
