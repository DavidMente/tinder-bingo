import {containsBingo, getBingos, getNewBingos} from "./bingo";
import {getRandomWords} from "./reducers";

describe('bingo', () => {

  it('compares two bingo lists and gets new bingos', () => {
    const prevBingos = [{cells: [1, 2, 3, 4, 5]}];
    const currBingos = [{cells: [1, 2, 3, 4, 5]}, {cells: [2, 3, 4, 5, 6]}];
    expect(getNewBingos(currBingos, prevBingos)).toEqual([{cells: [2, 3, 4, 5, 6]}]);
    expect(getNewBingos(prevBingos, prevBingos)).toEqual([]);
  });

  it('checks if bingo exists in bingo list', () => {
    const bingos = [{cells: [1, 2, 3, 4, 5]}];
    const bingoExists = {cells: [1, 2, 3, 4, 5]};
    const bingoNotExists = {cells: [1, 2, 3, 4, 6]};
    expect(containsBingo(bingos, bingoExists)).toBeTruthy();
    expect(containsBingo(bingos, bingoNotExists)).toBeFalsy();
  });

  it('gets bingos from words', () => {
    const wordListFactory = () => getRandomWords();
    const setHits = (wordList, cells) => {
      cells.forEach((cell) => {
        wordList[cell].hits = 1;
      });
    };

    const wordList = wordListFactory();
    expect(getBingos(wordList)).toEqual([]);

    const verticalBingo = wordListFactory();
    const verticalCells = [0, 5, 10, 15, 20];
    setHits(verticalBingo, verticalCells);
    expect(getBingos(verticalBingo)).toEqual([{cells: verticalCells}]);

    const horizontalBingo = wordListFactory();
    const horizontalCells = [0, 1, 2, 3, 4];
    setHits(horizontalBingo, horizontalCells);
    expect(getBingos(horizontalBingo)).toEqual([{cells: horizontalCells}]);

    const diagonalBingo = wordListFactory();
    const diagonalCells = [0, 6, 12, 18, 24];
    setHits(diagonalBingo, diagonalCells);
    expect(getBingos(diagonalBingo)).toEqual([{cells: diagonalCells}]);

    const combinedBingo = wordListFactory();
    const diagonalCells2 = [4, 8, 12, 16, 20];
    const verticalCells2 = [1, 6, 11, 16, 21];
    const horizontalCells2 = [5, 6, 7, 8, 9];
    setHits(combinedBingo, diagonalCells2);
    setHits(combinedBingo, verticalCells2);
    setHits(combinedBingo, horizontalCells2);
    expect(getBingos(combinedBingo)).toEqual([{cells: horizontalCells2}, {cells: verticalCells2}, {cells: diagonalCells2}]);
  });

});
