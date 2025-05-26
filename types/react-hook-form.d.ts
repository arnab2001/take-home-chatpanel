declare module 'react-hook-form' {
  export * from 'react-hook-form/dist/index';

  export interface FieldValues {
    [key: string]: any;
  }

  export type FieldPath<TFieldValues extends FieldValues> = keyof TFieldValues & (string | number);

  export interface ControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > {
    name: TName;
    control?: any;
    render?: any;
    defaultValue?: any;
  }

  export function useFormContext<TFieldValues extends FieldValues = FieldValues>(): any;
  export function useForm<TFieldValues extends FieldValues = FieldValues>(): any;
  export function Controller<TFieldValues extends FieldValues = FieldValues>(props: ControllerProps<TFieldValues>): any;
} 