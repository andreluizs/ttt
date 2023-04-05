<script>
  import { createEventDispatcher } from "svelte";
  import { board, playerTurn } from "../stores/BoardStore";

  const dispatch = createEventDispatcher();

  export let id;

  const handleClick = (e) => {
    $board[id] = $playerTurn;
    e.target.innerHTML = $playerTurn;
    e.target.removeEventListener("click", handleClick);
    dispatch('makeMove');
  };
  
</script>

<button {id} class="cell" on:click={handleClick} />

<style>
  .cell {
    width: 100px;
    height: 100px;
    border: 2px solid black;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
  }
</style>
