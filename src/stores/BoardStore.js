import { writable } from "svelte/store";

export const board = writable(Array(9).fill(null));

export const playerTurn = writable("✕");