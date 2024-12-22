import { RESUME_SUB_TEXT_TYPES } from "../constants"

export interface ResumeSubText{
    type: RESUME_SUB_TEXT_TYPES
    value:string
}

export interface ResumeSection {
    head?:string
    position?:string
    subText?: ResumeSubText[]
    points?:string[]
}

export interface ResumePrograaming    {
    type: string
    icon?: string,
    items: { 
        name: string,
        score: number 
    }[]
}