export type UsersType = {
    uid?: string,
    nom?: string,
    prenom?: string,
    email?: string,
    password?: string,
    tel?: string,
    photo?: string,
    typeConnection?: string,
    pays?: string,
    profession?: string,
    genre?: string,
    _id?: string,
    adresse?: string,
    user?:UsersType,
    setUser?: React.Dispatch<React.SetStateAction<UsersType>>
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
    nbreTransact?: number,
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
    _id?: string,
    titre?: string,
    montant?: string,
    uid?: string,
    budgetId?: string,
    date?: string,
    budgetName?: string,
    listTransactions?: DepenseType[],
    setListransactions?: React.Dispatch<React.SetStateAction<DepenseType[]>>
}


export type FormType = {
    submitForm: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    montantSaisie: (e: any) => void,
    TitreSaisie: (e: any) => void,
    loadform: boolean,
    formRef?: React.Ref<HTMLFormElement>
}