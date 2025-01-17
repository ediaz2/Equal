import {
  CSSClassesList,
  CSSRawClassesList,
  WithVariantProps,
} from '@/types/variant'
import { PropType } from 'vue'

export type VariantJSWithClassesListProps<ClassesKeys> = {
  classes?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  base?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variants?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variant?: {
    type: PropType<string | string[] | undefined>
    default?: string
  }
}

declare type ObjectWithClassesList = {
  classesList?: CSSClassesList
}

export declare const parseVariantWithClassesList: <
  P extends ObjectWithClassesList,
>() => P

export const getVariantPropsWithClassesList = <
  ClassesKeys extends Record<string, unknown>,
>(): VariantJSWithClassesListProps<ClassesKeys> => ({
  classes: {
    type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
    default: undefined,
  },
  base: {
    type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
    default: undefined,
  },
  variants: {
    type: Object as PropType<WithVariantProps<ClassesKeys>>,
    default: undefined,
  },
  variant: {
    type: [String, Array] as PropType<string | string[] | undefined>,
    default: 'default',
  },
})
