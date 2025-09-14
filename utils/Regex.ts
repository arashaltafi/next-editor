const numberRegex = /^\d+$/
const stringRegex = /^[\s\S]*$/
const persianRegex = /^[\u0600-\u06FF\s]+$/ // Persian/Arabic Unicode block
const englishRegex = /^[A-Za-z\s]+$/ // English letters only

export const isNumber = (value: string): boolean => {
    return numberRegex.test(value.trim())
}

export const isString = (value: string): boolean => {
    return stringRegex.test(value.trim())
}

export const isPersian = (value: string): boolean => {
    return persianRegex.test(value.trim())
}

export const isEnglish = (value: string): boolean => {
    return englishRegex.test(value.trim())
}