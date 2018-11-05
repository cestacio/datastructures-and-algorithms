/*
Given the number of rows N and a string of reserved seats S, return the max number of seats a family of 3 can take on the plane.

example: N = 1, S = ''
Seats = [A, B, C, D, E, F, G, H, J, K]
*/

function availableSeats(N, S) {
  if (S.length === 0) {
    return N * 3;
  }

  let maxSeatCounter = 0;
  let seatCols = 'ABCDEFGHJK';

  let seatsTaken = S.split(' ');
  let seats = [];

  // build seats
  for (let i = 1; i <= N; i++) {
    seats.push(Array.from({ length: seatCols.length }));
  }

  // loop over the rows and seats
  // check if the seat is in the seatsTaken array
  // if it is, add it to our seats array with the value 'reserved'
  for (let j = 1; j <= N; j++) {
    for (let k = 0; k < seatCols.length; k++) {
      if (seatsTaken.indexOf(j + seatCols[k]) !== -1) {
        seats[j - 1][k] = 'reserved';
      }
    }
  }

  return seats;
  // loop over the seats array and see which seats are reserved
  // if it isnt' we want to check if the seats next to it are also available
  // for (let l = 1; l <= N; l++) {
  //   for (let m = 0; m < seatCols.length; m++) {
  //     // if there's a block of three seats together in rows A-C, D-G, or H-K add it to the maxSeatCounter
  //   }
  // }
  // return the count;
}

availableSeats(2, '1A 2F 1C'); //
//availableSeats(1, ''); // 1
