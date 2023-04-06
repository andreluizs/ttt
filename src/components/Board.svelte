<script>
  import { board, playerTurn } from "../stores/BoardStore";
  import Cell from "./Cell.svelte";

  const winnerPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  $: message = `É a vez do jogador: ${$playerTurn}`;

  const handleMove = () => {
    if (verifyWinner()) {
      message = `O jogador ${$playerTurn} ganhou!`;
      return;
    } else if ($board.filter((p) => !p).length === 0) {
      message = `Deu empate!`;
      return;
    }

    $playerTurn = $playerTurn == "✕" ? "⭘" : "✕";
  };

  const verifyWinner = () => {
    const currentPlayerPositions = $board
      .map((v, i) => (v == $playerTurn ? i : -1))
      .filter((v) => v != -1);

    return winnerPositions.some((winPosition) =>
      winPosition.every((position) => currentPlayerPositions.includes(position))
    );
  };
</script>

<h1>Jogo da Velha</h1>
<div class="board">
  {#each $board as _row, id}
    <Cell {id} on:makeMove={handleMove} />
  {/each}
</div>
<h2>{message}</h2>

<style>
  .board {
    width: 320px;
    height: 320px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
</style>
