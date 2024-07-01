import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    count: number;
};

type Actions = {
    increment: (qty: number) => void;
    decrement: (qty: number) => void;
};

export const useCountStore = create<State & Actions>()(
    immer((set) => ({
        count: 0,
        increment: (qty: number) =>
            set((state) => {
                state.count += qty;
            }),
        decrement: (qty: number) =>
            set((state) => {
                state.count -= qty;
            }),
    }))
);
