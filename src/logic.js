import { onMount } from "svelte";

  let winnerPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let player = [];

  function checkWinner(currentPlayer) {
    let winner = winnerPositions.some((winPosition) =>
      winPosition.every((position) => player[currentPlayer].includes(position))
    );
    console.log("Tem ganhador: ", winner);
  }

  onMount(() => {
    //test

    /**
     * |x|o|x|
       |x|x|o|
       |x|o|o|
     */
    let currentPlayer = "X";
    player[currentPlayer] = [1,2,3,0];

    checkWinner(currentPlayer);
  });