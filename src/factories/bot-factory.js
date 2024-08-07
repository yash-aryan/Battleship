'use strict';
import { getRandomInt, isInbounds } from '../utils/utils';

/*
Bot has 3 phases:
- explore phase: To find any enemy ship and get 1st hit on it.
- orientation phase: To find orientation(horizontal/vertical) on the same enemy ship by getting 2nd hit.
- follow-up phase: To shoot follow-up hits in the same orientation until sunk.

The bot must be notified the outcome of it's previous shot after attacking.
New shots are queued in advanced during each phase, and queue is cleared when advancing into next phase.
*/

export default function BotFactory() {
	const exploredPos = [],
		posQueue = [getRandomShot()],
		directionQueue = [];
	let latestShot = null,
		firstHit = null,
		enemyShipFound = false,
		orientationFound = false;

	function generateShot() {
		// Dequeues shot and return.
		latestShot = posQueue.shift();
		exploredPos.push(latestShot);
		return latestShot;
	}

	function notifyMiss() {
		if (enemyShipFound && orientationFound) {
			// Queues pos in reverse direction.
			posQueue.length = 0;
			directionQueue.length = 0;
			const newDirection = getRelativeDirection(latestShot, firstHit);
			posQueue.push(...getAllPosInDirection(firstHit, newDirection));
		} else if (enemyShipFound) {
			// Changes direction to get a 2nd hit.
			directionQueue.shift();
		} else {
			// Queues random pos until enemy ship is found.
			posQueue.push(getRandomShot());
		}
	}

	function notifyHit() {
		if (orientationFound && !directionQueue.length && !posQueue.length) {
			// Queues pos in reverse direction. Runs ship is not sunk, and no more queued pos either.
			const newDirection = getRelativeDirection(latestShot, firstHit);
			posQueue.push(...getAllPosInDirection(firstHit, newDirection));
		}
		if (enemyShipFound && !orientationFound) {
			// Runs on second hit on enemy ship, and queues all pos in current direction.
			orientationFound = true;
			const currDirection = directionQueue.shift();
			directionQueue.length = 0;
			posQueue.length = 0;
			posQueue.push(...getAllPosInDirection(latestShot, currDirection));
			if (posQueue.length === 0) {
				// Queues pos in reverse direction.
				const newDirection = getOppositeDirection(currDirection);
				posQueue.push(...getAllPosInDirection(firstHit, newDirection));
			}
		} else if (!enemyShipFound) {
			// Runs on first hit on enemy ship, and queues all adjacent pos.
			firstHit = latestShot;
			enemyShipFound = true;
			posQueue.push(...getAllAdjacents(latestShot));
		}
	}

	function notifyHitAndSunk() {
		// Resets current ship related status, and queue shots to find next enemy ship.
		posQueue.length = 0;
		directionQueue.length = 0;
		enemyShipFound = false;
		orientationFound = false;
		firstHit = null;
		posQueue.push(getRandomShot());
	}

	// Private Methods
	function getAllAdjacents(inputPos) {
		// Returns valid adjacent pos & queues it's direction.
		const adjacents = [];
		pushValidAdjacents([inputPos[0], inputPos[1] + 1], 'top');
		pushValidAdjacents([inputPos[0] - 1, inputPos[1]], 'left');
		pushValidAdjacents([inputPos[0], inputPos[1] - 1], 'bottom');
		pushValidAdjacents([inputPos[0] + 1, inputPos[1]], 'right');
		return adjacents;

		function pushValidAdjacents(adjacent, direction) {
			// Early exit on any invalid or repeated pos.
			if (!isInbounds(adjacent) || !isUniquePos(exploredPos, adjacent)) return;

			adjacents.push(adjacent);
			directionQueue.push(direction);
		}
	}

	// Private Pure Methods
	function getRelativeDirection(start, end) {
		if (start[0] < end[0]) return 'right';
		else if (start[0] > end[0]) return 'left';
		else if (start[1] < end[1]) return 'top';
		else if (start[1] > end[1]) return 'bottom';
	}

	function getAllPosInDirection(inputPos, direction) {
		// Returns all valid pos based on direction.
		let i = 1;
		const allPos = [];
		switch (direction) {
			case 'top':
				// generate to top.
				while (inputPos[1] + i < 10) {
					allPos.push([inputPos[0], inputPos[1] + i]);
					i++;
				}
				break;
			case 'left':
				// generate to left.
				while (inputPos[0] - i >= 0) {
					allPos.push([inputPos[0] - i, inputPos[1]]);
					i++;
				}
				break;
			case 'bottom':
				// generate to top.
				while (inputPos[1] - i >= 0) {
					allPos.push([inputPos[0], inputPos[1] - i]);
					i++;
				}
				break;
			case 'right':
				// generate to left.
				while (inputPos[0] + i < 10) {
					allPos.push([inputPos[0] + i, inputPos[1]]);
					i++;
				}
				break;
		}

		return allPos.filter(pos => isInbounds(pos) && isUniquePos(exploredPos, pos));
	}

	function getOppositeDirection(direction) {
		// Returns opposite direction.
		switch (direction) {
			case 'top':
				return 'bottom';
			case 'left':
				return 'right';
			case 'bottom':
				return 'top';
			case 'right':
				return 'left';
		}
	}

	function getRandomShot() {
		// Returns unique/unexplored random positions.
		if (exploredPos.length === 100) return null;

		let newPos = [getRandomInt(10), getRandomInt(10)];
		while (!isUniquePos(exploredPos, newPos)) {
			// Loops until unique pos is found.
			newPos = [getRandomInt(10), getRandomInt(10)];
		}
		return newPos;
	}

	function isUniquePos(allPos, inputPos) {
		// Returns TRUE if allPos does not contain the inputPos; else returns FALSE.
		return !allPos.some(pos => pos[0] === inputPos[0] && pos[1] === inputPos[1]);
	}

	return {
		generateShot,
		notifyMiss,
		notifyHit,
		notifyHitAndSunk,
	};
}
