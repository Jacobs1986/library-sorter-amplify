/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookUpdateFormInputValues = {
    title?: string;
    authorFirst?: string;
    authorLast?: string;
    publisher?: string;
    isbn?: string;
    pubDate?: string;
    numOfPages?: number;
    synopsis?: string;
    cover?: string;
    collectorInfo?: boolean;
    edition?: string;
    printing?: string;
    dustJacket?: string;
    condition?: string;
    damage?: string;
    acquisitionDate?: string;
    acquiredFrom?: string;
    acquiredCost?: string;
};
export declare type BookUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    authorFirst?: ValidationFunction<string>;
    authorLast?: ValidationFunction<string>;
    publisher?: ValidationFunction<string>;
    isbn?: ValidationFunction<string>;
    pubDate?: ValidationFunction<string>;
    numOfPages?: ValidationFunction<number>;
    synopsis?: ValidationFunction<string>;
    cover?: ValidationFunction<string>;
    collectorInfo?: ValidationFunction<boolean>;
    edition?: ValidationFunction<string>;
    printing?: ValidationFunction<string>;
    dustJacket?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
    damage?: ValidationFunction<string>;
    acquisitionDate?: ValidationFunction<string>;
    acquiredFrom?: ValidationFunction<string>;
    acquiredCost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookUpdateFormOverridesProps = {
    BookUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    authorFirst?: PrimitiveOverrideProps<TextFieldProps>;
    authorLast?: PrimitiveOverrideProps<TextFieldProps>;
    publisher?: PrimitiveOverrideProps<TextFieldProps>;
    isbn?: PrimitiveOverrideProps<TextFieldProps>;
    pubDate?: PrimitiveOverrideProps<TextFieldProps>;
    numOfPages?: PrimitiveOverrideProps<TextFieldProps>;
    synopsis?: PrimitiveOverrideProps<TextFieldProps>;
    cover?: PrimitiveOverrideProps<TextFieldProps>;
    collectorInfo?: PrimitiveOverrideProps<SwitchFieldProps>;
    edition?: PrimitiveOverrideProps<TextFieldProps>;
    printing?: PrimitiveOverrideProps<TextFieldProps>;
    dustJacket?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<TextFieldProps>;
    damage?: PrimitiveOverrideProps<TextFieldProps>;
    acquisitionDate?: PrimitiveOverrideProps<TextFieldProps>;
    acquiredFrom?: PrimitiveOverrideProps<TextFieldProps>;
    acquiredCost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    book?: any;
    onSubmit?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onSuccess?: (fields: BookUpdateFormInputValues) => void;
    onError?: (fields: BookUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onValidate?: BookUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookUpdateForm(props: BookUpdateFormProps): React.ReactElement;
