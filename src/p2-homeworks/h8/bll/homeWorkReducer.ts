type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number};

export type UserType = {
    _id: number;
    name: string;
    age: number;
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up':
                   return [...state].sort((a, b) => a.name <= b.name ? -1 : 1);
                case 'down':
                    return [...state].sort((a, b) => a.name <= b.name ? 1 : -1);
            }
            return state;
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload);
        }
        default: return state
    }
}