export type UsersType = {
    uid?: string,
    nom?: string,
    prenom?: string,
    email?: string,
    password?: string,
    tel?: string,
    photo?: string,
    typeConnection?: string
}

export type BudgetType = {
    id?: string, titre: string, fond: number, emoji: string, uid: UsersType
}

<<<<<<< HEAD
=======
//salut


>>>>>>> 0df83235d72f350aedec4a8ded78c45eaa921c74
export type ListBudgetType = {
    _id?: string,
    titre?: string,
    fond?: number,
    emoji?: string,
    depense?: number,
    reste?: number,
    pourcentage?: number,
    nbreTransaction?: number,
    uid?: string,
    BudgetListFunc?: (e: ListBudgetType) => void,
    item?: ListBudgetType
}

export const MoneyOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'XOF'
}

export type ParamesID = {
    params: Promise<{
        uid?: string;
        budgetId?: string
    }>
}

export type DepenseType = {
    titre?: string,
    montant?: string,
    uid?: string,
    id?: string,
}