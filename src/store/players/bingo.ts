import {Bingo, Word} from "./types";

export function getNewBingos(currBingos: Bingo[], previousBingos: Bingo[]) {
  return currBingos.filter((currBingo) => {
    return !containsBingo(previousBingos, currBingo)
  });
}

export function containsBingo(bingos: Bingo[], needle: Bingo): boolean {
  return bingos.some((bingo) => bingo.cells.join('.') === needle.cells.join('.'));
}

export function getBingos(words: Word[]): Bingo[] {
  const bingos = [];
  for (let i = 0; i < 5; i++) {
    // horizontal
    let horizontalCells = [0, 1, 2, 3, 4].map((cell) => cell + i * 5);
    if (cellsHaveHits(words, horizontalCells)) {
      bingos.push({cells: horizontalCells});
    }
    // vertical
    let verticalCells = [i, i + 5, i + 10, i + 15, i + 20];
    if (cellsHaveHits(words, verticalCells)) {
      bingos.push({cells: verticalCells});
    }
  }
  // diagonal
  let diagonalCells1 = [0, 6, 12, 18, 24];
  if (cellsHaveHits(words, diagonalCells1)) {
    bingos.push({cells: diagonalCells1});
  }
  let diagonalCells2 = [4, 8, 12, 16, 20];
  if (cellsHaveHits(words, diagonalCells2)) {
    bingos.push({cells: diagonalCells2});
  }
  return bingos;
}

function cellsHaveHits(words: Word[], cells: number[]): boolean {
  let hits = 0;
  cells.forEach((cell) => {
    if (words[cell].hits > 0) {
      hits++
    }
  });
  return hits === cells.length
}
