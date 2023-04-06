<script>
  import { createEventDispatcher } from "svelte";
  import { board, playerTurn } from "../stores/BoardStore";

  const dispatch = createEventDispatcher();

  export let id;

  const handleClick = (e) => {
    $board[id] = $playerTurn;
    e.target.innerHTML = $playerTurn;
    e.target.removeEventListener("click", handleClick);
    dispatch("makeMove");
  };
</script>

<button class="cell" on:click={(handleClick)} />

<style>
  .cell {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25em;
    font-size: 10vmin;
    font-weight: bold;
  }
</style>
