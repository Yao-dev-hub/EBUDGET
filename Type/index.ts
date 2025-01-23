export type UsersType = {
    uid?: string,
    nom?: string,
    prenom?: string,
    email?: string,
    password?: string,
    tel?: string,
    photo?: string
}

export type BudgetType = {
    id?: string, titre: string, fond: number, emoji: string, uid: UsersType
}


export type ListBudgetType = {
    _id?: string,
    titre?: string,
    fond?: number,
    emoji?: string,
    depense?: number,
    reste?: number,
    pourcentage?: number,
    nbreTransaction?: number,
    uid?: UsersType,
    BudgetListFunc?: (e: ListBudgetType) => void,
    item?: ListBudgetType
}

export const MoneyOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'XOF'
}

export type ParamesID = {
    params: {
        uid?: string,
        budgetId?: string,
    }
} 
