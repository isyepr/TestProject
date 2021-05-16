export const addExpenses = expenseIndex => (
    {
        type: 'ADD_EXPENSES',
        payload: expenseIndex,
    }
);

export const removeExpenses = expenseIndex => (
    {
        type: 'REMOVE_EXPENSES',
        payload: expenseIndex,
    }
);

export const addToken = expenseIndex => (
    {
        type: 'ADD_TOKEN',
        payload: expenseIndex,
    }
);