'use strict';

import { ShipFactory } from './ship-factory';

export function GameboardFactory(shipInputs = [5, 4, 3, 3, 2]) {
	const incomingShots = [],
		incomingHits = [],
		incomingMisses = [],
		allShips = [],
		allShipIDs = [];
	let remainingShips,
		lastShotReport = null;

	shipInputs.forEach((input, index) => {
		const ship = ShipFactory(input);
		allShipIDs.push({ id: index, length: ship.getInfo().length });
		allShips.push(ship);
	});
	remainingShips = allShips.length;

	function getInfo() {
		return {
			allShipIDs,
			remainingShips,
			hits: incomingHits,
			misses: incomingMisses,
		};
	}

	function moveShip(id, posArr) {
		allShips[id].setPos(posArr);
	}

	function isPosOccupied(targetPos) {
		return allShips.some(ship => ship.isOccupied(targetPos));
	}

	function receiveAttack(pos) {
		incomingShots.push(pos);
		const targetShip = getTargetShip(pos);

		if (targetShip) {
			targetShip.hit();
			incomingHits.push(pos);
			if (targetShip.isSunk()) {
				--remainingShips;
				lastShotReport = 'sunk';
			} else lastShotReport = 'hit';
		} else {
			incomingMisses.push(pos);
			lastShotReport = 'miss';
		}
	}

	function getLastShotReport() {
		return lastShotReport;
	}

	function isAllShipSunk() {
		if (remainingShips === 0) return true;
		return false;
	}

	// Private Functions
	function getTargetShip(targetPos) {
		return allShips.find(ship => ship.isHit(targetPos));
	}

	function isOutOfBounds(targetPos) {
		return targetPos.some(n => n < 0 || n > 9);
	}

	return {
		getInfo,
		isPosOccupied,
		moveShip,
		receiveAttack,
		getLastShotReport,
		isAllShipSunk,
	};
}
